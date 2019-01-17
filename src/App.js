import React, { Component } from 'react';
import { Input, Image, Button, Card, Menu, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {  
    return (
      <div className="App" style={{height: '150vh'}}>
        <Menu inverted widths={3} fixed="top">
          <Menu.Item >
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item />
          <Menu.Item name='Credits' />
        </Menu>
        <header>
          <Input action='Search' placeholder='Search' style={{width: '50vw'}}/>

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

          <Button floated='right' color='blue'>Submit</Button>

          </Segment>

        </header>
      </div>
    );
  }
}

export default App;
