import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
import clientID from '../../config/keys';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  onSignIn(response) {
    console.log(response);
    sessionStorage.setItem("userName", response.profileObj.name);
    sessionStorage.setItem("userProfileImage", response.profileObj.imageUrl);
    this.setState({
      redirect: true,
    })
  }

  onFailure(response) {
    console.log("Login Failed");
    this.setState({
      redirect: false,
    })

  }


  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20%' }}>
        {/* <Button primary size='massive' href={`/#/dashboard`}>Login</Button> */}
        {(this.state.redirect)? <Redirect to="/home" />:
        <GoogleLogin
                clientId={clientID}
                buttonText="Sign in with Google"
                onSuccess={this.onSignIn.bind(this)}
                onFailure={this.onSignIn.bind(this)}
                style={{ width: 100 }}
              />}
      </div>  
    );
  }
}

export default Login;
