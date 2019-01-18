import React from 'react';
import { Input, Button, Dropdown, Divider } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [
          {
            text: '1', 
            value: '1'
          },
          {
            text: '2', 
            value: '2'
          },
          {
            text: '3', 
            value: '3'
          },
          {
            text: '4', 
            value: '4'
          },
          {
            text: '5', 
            value: '5'
          }
        ]
    };
  }

  render() {  
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:'80px'}}>
                <Input placeholder='Search' onChange={this.props.handleInputChange} />
                <Dropdown placeholder='Select number of responses' selection options={this.state.num} />
                <Button onClick={this.props.handleSubmit} >Send</Button>
            </div>
            
            <Divider />
        </div>
    );
  }
}

export default Search;
