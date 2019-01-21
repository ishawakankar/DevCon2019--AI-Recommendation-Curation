import React from 'react';
import { Segment } from 'semantic-ui-react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performance: [],
    };
  }

  componentDidMount() {
    //Fetch Graph Stats
  }

  render() {  
    return (
        <div style={{marginTop: '30px'}}>
          <Segment style={{margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
            <h3>
                Performance:
            </h3>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdHuTr4a-jrZJxMEUMaa4L7IR4etN_c5glgbsxBd50NHze9iG' style={{height:'30%',width: '70%', marginTop: '20px'}}/>
            </Segment>
        </div>
    );
  }
}

export default Navbar;
