import React from 'react';
import { Card, Button, Divider } from 'semantic-ui-react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ['dummy1', 'dummy2', 'dummy3', 'dummy4']
    };
  }

  componentDidMount() {
    //Make fetch call to search api
    console.log('Search api')
  }

  submitFeedback() {
    //Make fetch call to feedback api
    console.log('Submit feedback')
  }

  render() {
    return (
      <div>
        {console.log('query in cards', this.props.query)}
        <Card.Group>
          {this.state.results.map((x, i) =>
            <Card key={i}>
              <Card.Content>
                <Card.Header>{x}</Card.Header>
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
          )}
        </Card.Group>
        <Button style={{marginTop: '10px'}} onClick={this.submitFeedback}> Submit </Button>
        <Divider />
      </div>
    );
  }
}

export default Cards;
