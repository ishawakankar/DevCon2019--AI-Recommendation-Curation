import React from 'react';
import { Divider } from 'semantic-ui-react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performance: [],
    };
  }

  render() {  
    return (
        <div>
            <h3>
                Performance:
            </h3>
        </div>
    );
  }
}

export default Navbar;
