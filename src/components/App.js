import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Search from './Search';
import Graph from './Graph';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleInputChange = (event) => {
    this.setState({
        query: event.target.value,
    })
  }

  handleSubmit = () => {
      console.log('Entered query: ',this.state.query)
  }

  render() {  
    return (
      <div>
        <Navbar />
        <Search handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <Cards query={this.state.query}/>
        <Graph />
      </div>
    );
  }
}

export default App;
