import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Cards from './Cards';
import Graph from './Graph';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          query: '',
          input: '',
          filters: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilters = this.handleFilters.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    handleFilters = (event, {value}) => {
        this.setState({
            filters: value,
        })
    }

    handleSubmit = () => {
      console.log('Submitted')
      this.setState({
        query: '',
      })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div style={{marginTop: '30px'}}>
                    <Search handleInputChange={this.handleInputChange} handleSearch={this.handleSearch} handleFilters={this.handleFilters} />
                    {(this.state.query=='')?'':<Cards query={this.state.query} filters={this.state.filters} handleSubmit={this.handleSubmit}/>}
                    <Graph />
                </div>
            </div>
        );
    }
}

export default App;
