import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Cards from './Cards';
import Graph from './Graph';
import API from '../utils/Api'
import axios from 'axios';
import Message from './Message';
import SessionIdGenerator from '../../src/utils/SessionIdGenerator';
import { request } from 'http';
// import {machineId, machineIdSync} from 'node-machine-id';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            input: '',
            filters: [],
            feedback: [],
            coins: 0,
            tags: [],
            message: '',
            messageOpen: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state == undefined) {
            this.props.history.push('/')
        }
        else {
            this.generateStartTelemetry(this.props.location.state);
            if (this.props.location.state.coinsGiven === undefined) {
                this.setState({ coins: 0 })
            }
            else {
                if (sessionStorage.getItem("coins") == null) {
                    this.setState({ coins: this.props.location.state.coinsGiven })
                }
                else {
                    this.setState({ coins: sessionStorage.getItem("coins") })
                }

            }
        }

    }

    generateStartTelemetry(visitorInfo) {
        const edata = { type: "bazaar", mode: "play" };
        // const did = machineIdSync();
        const telemetry = {
            eid: "DC_START",
            did: '98912984-c4e9-5ceb-8000-03882a0485e4',
            ets: (new Date).getTime(),
            dimensions: {
                'visitorId': visitorInfo.code,
                'visitorName': visitorInfo.name,
                'stallId': "STA7",
                'stallName': "Bazaar",
                'ideaId': "IDE21",
                'ideaName': "Crowd Sourcing",
                'edata': edata
            }
        }
        const event = telemetry;
        const request = {
            "events": [event]
        };

        console.log('telemetry request', request)

        axios.post(`http://52.172.188.118:3000/v1/telemetry`, request)
            .then(data => {
                console.log("telemetry registered successfully", data);
            }).catch(err => {
                console.log("telemetry registration error", err);
            })
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    handleSearch = () => {
        this.setState({
            query: this.state.input,
        })

        localStorage.setItem("sessionId", SessionIdGenerator.getUuid() + "_" + SessionIdGenerator.getTimestamp())

        console.log("the sessionIdgenrated is", localStorage.getItem("sessionId"))
        const request =
        {
            "query": this.state.query,
            "subject": this.state.filters[0],
            "num_of_response": 3,
            "session_id": localStorage.getItem("sessionId")
        }
        axios.post(`http://172.16.0.85:1123/ML/getRecommendation`, { request }).then(res => {
            this.setState({
                tags: res.data.response.reco.splice(0, 3),  //For rendering only three cards
            })
            console.log('response query=>', res.data)
        })
        this.generateInteractTelemetry(this.props.location.state)
    }

    generateInteractTelemetry(visitorInfo) {
        const telemetry = {
            "eid": "INTERACT",
            "ets": (new Date).getTime(),
            "ver": "3.0",
            "mid": '98912984-c4e9-5ceb-8000-03882a0485e4',
            "actor": {
                "id": visitorInfo.code,
                "type": 'visitor'
            },
            "context": {
                "channel": "devcon.appu",
                "env": 'devcon',
                "cdata": [{
                    "visitorId": visitorInfo.code,
                    "visitorName": visitorInfo.name,
                    "stallId": "STA7",
                    "stallName": "bazaar",
                    "ideaId": "IDE21",
                    "ideaName": "Crowd Sourcing"
                }
                ],
            }
        }
        const event = telemetry;
        console.log('telemetry', telemetry)
        const request = {
            "events": [event]
        };

        axios.post(`http://52.172.188.118:3000/v1/telemetry`, request)
            .then(data => {
                console.log('interact telemetry registered successfully', data);
            }).catch(err => {
                console.log('interact telemetry registration error', err);
            })
    }

    handleFilters = (event, { value }) => {
        this.setState({
            filters: value,
        })
    }

    handleSubmit = () => {
        let keys = Object.keys(localStorage);
        let values = [];
        keys.forEach((x) => {
            let c = localStorage.getItem(x);
            if(x!="sessionId"){
            values.push({ 'cardID': x, 'Rating': c })}
        })
        console.log('Feedback', values)
        this.setState({
            query: '',
            feedback: values,
        })
        this.submitTagsReview(values,localStorage.getItem("sessionId"))
        localStorage.clear();
        this.updateCoinsCurrentState(keys.length);
        this.generateInteractTelemetry(this.props.location.state);
    }


    submitTagsReview(values,sessionId) {
        var preparedData = this.prepareRequestForReview(values)
        const submitRequest = {
            "content_info": content,
            "session_id": sessionId
        }
        axios.post(`http://172.16.0.85:1235/ML/getReview`, { "content_info": preparedData,
        "session_id": sessionId })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("in a catch block of submit review")
                this.setState({
                    message: 'No coins credited! Retry After Some Time',
                    messageOpen: true,
                })
            })





    }


    prepareRequestForReview(feedback) {

        console.log("feedback recieved", feedback)
        var req = []
        feedback.forEach((item) => {
            req.push({ "id": item.cardID, "reward": item.Rating })
        })

        console.log("the prepared json data is", req)
        return (req)

    }



    updateCoinsCurrentState = (value) => {
        let addCoins = Number(this.state.coins) + Number(value)
        var config = {
            headers: { "Access-Control-Allow-Origin": "*" }
        };
        const request = {                      //parameter need to be passed 
            "code": sessionStorage.getItem("userCode"),
            "roleCode": "TCH1",
            "stallCode": "STA7",
            "ideaCode": "IDE21"
        }
        const updateReq = {
            "id": "open-saber.registry.update",
            "ver": "1.0",
            "ets": "11234",
            "params": {
                "did": "",
                "key": "",
                "msgid": ""
            },
            "request": {
                "Visitor": {
                    "code": sessionStorage.getItem("userCode"),
                    "coinsGiven": Number(addCoins)
                }
            }
        }
        axios.post(`http://104.211.78.0:8080/update`, {
            "id": "open-saber.registry.update",
            "ver": "1.0",
            "ets": "11234",
            "params": {
                "did": "",
                "key": "",
                "msgid": ""
            },
            "request": {
                "Visitor": {
                    "code": sessionStorage.getItem("userCode"),
                    "coinsGiven": addCoins
                }
            }
        })
            .then(res => {
                if (res.data.params.status === 'SUCCESSFUL') {
                    API.get(`profile/read/${sessionStorage.getItem("userCode")}`)
                        .then(res => {
                            this.setState({
                                coins: res.data.result.Visitor.coinsGiven,
                                message: 'Congratulations! Coins successfully credited!',
                                messageOpen: true,
                            })
                            sessionStorage.setItem("coins", res.data.result.Visitor.coinsGiven)
                            
                        })
                }
                else {
                    // login to be put if coin updation is unsuccessfull
                    this.setState({
                        message: 'No coins credited! Try again later!',
                        messageOpen: true,
                    })
                }
            }).catch(err => {
                this.setState({
                    message: 'No coins credited! Try again later!',
                    messageOpen: true,
                })
            })
    }

    handleClose = () => this.setState({ messageOpen: false })

    render() {
        return (
            <div>
                <Navbar credits={this.state.coins} />
                <div style={{ marginTop: '30px' }}>
                    <Search handleInputChange={this.handleInputChange} handleSearch={this.handleSearch} handleFilters={this.handleFilters} />
                    {(this.state.query == '' || this.state.filters.length == 0) ? '' : <Cards query={this.state.query} tags={this.state.tags} filters={this.state.filters} handleSubmit={this.handleSubmit} />}
                    {(this.state.messageOpen) ? <Message message={this.state.message} messageOpen={this.state.messageOpen} handleClose={this.handleClose} /> : ''}
                    <Graph />
                </div>
            </div>
        );
    }
}

export default App;
