import React from 'react';
import { Card, Button, Image, Header } from 'semantic-ui-react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ['Title1', 'Title2', 'Title3', 'Title4', 'Title5'],
      countApproval: 0,
      countDenail: 0,
    };
  }

  componentDidMount = () => {
    //Make fetch call to search api
    console.log('Search api');

    console.log('query in cards =>', this.props.query)
    console.log('number of response in cards =>', this.props.numResponse)
    console.log('filters in cards =>', this.props.filters)
  }

  countOfApprovals = () => {}

  countOfDenials = () => {}

  render() {
    return (
      <div style={{margin: '10px'}}>
        <Header style={{paddingTop: '20px', paddingLeft: '20px'}}>  
          Recommended:
        </Header>
        <Card.Group style={{marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          {this.state.results.map((x, i) =>
            <Card key={i}>
              <Card.Content>
                <Card.Header>{x}</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmusVyHLSxuIdiEyhcIKOM5qJ_VsMnMwx3VTwcf6j2QV5YGrpzMg' style={{width: '100%'}}/>
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
        <br />
        <Button primary floated='right' onClick={this.props.handleSubmit}> Submit </Button>
        <br /> 
      </div>
    );
  }
}

export default Cards;
