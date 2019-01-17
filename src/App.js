import React from 'react';
import { Input, Image, Button, Card, Menu, Segment } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      query: '',
      credits: 0,
      showResults: false,
    };
  }

  handleShowResults = () => {
    this.setState({
      showResults: !this.state.showResults,
    })
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    })
  }

  render() {  
    return (
      <div className="App">
        <Menu inverted fixed='top' >
          <Menu.Item >
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" avatar />
          </Menu.Item>
          <Menu.Item position='right'>
            <Image size="mini" 
              src="https://cdn2.iconfinder.com/data/icons/world-currencies-gold/512/indian_rupee_sign_currency_gold_symbol-512.png" 
              verticalAlign='middle' />
            <span>{this.state.credits}</span>
          </Menu.Item>
        </Menu>
        <header>

          <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <Input action={{icon: 'search',onClick: () => this.handleShowResults()}} placeholder='Search' 
              onChange={this.handleInputChange} style={{width: '70vw', paddingTop: '80px'}} />
          </div>

          {(this.state.showResults)? 
          <Segment style={{margin: '30px', padding: '10px'}}>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>

          <Button floated='right' color='blue' onClick={this.handleShowResults}>Submit</Button>

          </Segment>
          :''}

          <Segment>
            <p align='center'>
              Graph
            </p>
          </Segment>

        </header>
      </div>
    );
  }
}

export default App;
