import React from 'react';
import { Image, Menu } from 'semantic-ui-react';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: 0,
    };
  }

  render() {  
    return (
        <Menu inverted>
          <Menu.Item >
            <Image size="mini" src={sessionStorage.getItem("userProfileImage")} avatar />
          </Menu.Item>
          <Menu.Item position='right'>
            <Image size="mini" 
              src="https://cdn2.iconfinder.com/data/icons/world-currencies-gold/512/indian_rupee_sign_currency_gold_symbol-512.png" 
              verticalAlign='middle' />
            <span>{this.state.credits}</span>
          </Menu.Item>
        </Menu>
    );
  }
}

export default Navbar;
