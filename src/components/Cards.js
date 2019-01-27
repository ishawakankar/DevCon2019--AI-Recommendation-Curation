import React from 'react';
import { Card, Button, Icon,Image, Header, Rating, Dimmer, Loader, Segment } from 'semantic-ui-react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    //Make fetch call to search api
    console.log('Search api');
    console.log('query in cards =>', this.props.query)
    console.log('filters in cards =>', this.props.filters)
  }

  handleRate = (e, { rating }, id) => {
    localStorage.setItem(id,rating)
    // console.log('CardID=>',id,"Rating=>", localStorage.getItem(id));
  }

  render() {
    return (
      <div style={{margin: '10px'}}>
        <Header as= 'h3' textAlign='center' dividing style={{marginTop: '40px'}}>
        <Icon name='tags' />
          Recommended Tags:
        </Header>
        {(this.props.tags.length==0)? 
        <Segment style={{height: 200}}><Dimmer active inverted >
            <Loader size='massive'>Loading Search Results</Loader>
          </Dimmer></Segment> :
        <Card.Group style={{marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          {this.props.tags.map((x, i) =>
            <Card key={i}>
                <Image src={x.appicon} alt="Image not available" style={{width: '100%', height: 200}} />
              <Card.Content>
                <Card.Header>{x.name}</Card.Header>
                {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
                {/* <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmusVyHLSxuIdiEyhcIKOM5qJ_VsMnMwx3VTwcf6j2QV5YGrpzMg' style={{width: '100%'}}/> */}
                <Card.Description>
                  {x.explanation}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Rating maxRating={5} icon='star' size='large' onRate={(e,{rating}) => this.handleRate(e,{rating},x.identifier)} />
              </Card.Content>
            </Card>
          )}
        </Card.Group>}
        <br />
        <Button positive floated="right"onClick={this.props.handleSubmit}> Submit </Button>
        <br />
      </div>
    );
  }
}

export default Cards;
