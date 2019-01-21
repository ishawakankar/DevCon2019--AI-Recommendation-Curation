import React from 'react';
import { Input, Button, Dropdown, Segment, Grid, Header } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' },
          { text: '4', value: '4' },
          { text: '5', value: '5' }
        ],
        filters: [
            {text: 'Most relevant', value: 'Most relevant'},
            {text: 'Highly Approved', value: 'Highly Approved'},
            {text: 'All', value: 'All'}
         ]
    };
  }

  render() {
    return (
        <Segment style={{margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
            <Header>
                Search
            </Header>
            <Grid columns='2'>
                <Grid.Row >
                    <Input focus placeholder='Search' style={{width: '100%'}} onChange={this.props.handleInputChange} />
                </Grid.Row>
                <Grid.Row style={{display : 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Dropdown placeholder='Number of responses' selection options={this.state.num} style={{ border: '1px solid #51A7E8', margin: '5px', width: '40%'}} onChange={this.props.handleNumberOfResponses}/>
                    <Dropdown placeholder='Filters' multiple selection options={this.state.filters} style={{ border: '1px solid #51A7E8', margin: '5px', width: '40%'}} onChange={this.props.handleFilters} />
                </Grid.Row>
                <Grid.Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button positive onClick={this.props.handleSearch}>Search</Button>
                </Grid.Row>
            </Grid>
        </Segment>
    );
  }
}

export default Search;
