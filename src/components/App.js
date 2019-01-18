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
      input: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
        input: event.target.value,
    })
  }

  handleSubmit = () => {
    this.setState({
      query: this.state.input,
    })
  }

  render() {  
    return (
      <div>
        <Navbar />
        <Search handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        {(this.state.query=='')?'':<Cards query={this.state.query}/>}
        <Graph />
      </div>
    );
  }
}

export default App;
