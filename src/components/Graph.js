import React from 'react';
import { Segment, Dimmer, Loader, Header, Icon, Container, Divider } from 'semantic-ui-react';
import API from '../utils/Api';
import moment from 'moment';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphdata: []
    };
  }

  getPerformance = () => {
    axios.get(`http://172.16.0.85:2358/ML/RLaccuracy`)
      .then(res => {
        return (res.data)
      }).then(function (data) {
        let dataPoints = [];
        for (var i = 0; i < data.data.length; i++) {
          dataPoints.push({
            x: Number(moment.utc(Number(data.data[i].timestamp)).format('h')),
            y: data.data[i].accuracy
          });
        }
        return (dataPoints)
      }).then((data) => {
        this.setState({
          graphdata: data
        })
      });
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.getPerformance(), 3000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <Header as='h3' textAlign='center'>
          <Icon name='line graph' />
          Precision Graph:
        </Header>
        {(this.state.graphdata.length == 0) ? 
          <Segment style={{ height: 200 }}>
            <Dimmer active inverted style={{ marginTop: '80px' }}>
              <Loader size='massive'>Preparing Graph</Loader>
            </Dimmer>
          </Segment> 
          :
          <Segment style={{ margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
            <ResponsiveContainer width='80%' height={200}>
              <LineChart data={this.state.graphdata}>
                <XAxis dataKey="x" >
                  <Label value="Time(hrs)" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis label={{
                  value: 'Accuracy',
                  angle: -90,
                  position: 'insideLeft'
                }} />

                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="y" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
          </Segment>}
      </div>
    );
  }
}

export default Graph;