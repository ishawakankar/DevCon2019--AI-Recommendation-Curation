import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router'

class Login extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      redirect: false,
    }
  }

  onSignIn(response){
    console.log(response.profileObj);
    this.setState({
      redirect: true,
    })
    }
  render() {  
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20%'}}>
        {/* <Button primary size='massive' href={`/#/dashboard`}>Login</Button> */}
        {(this.state.redirect)? <Redirect to="/home" />:
        <GoogleLogin
                clientId="186061262302-ugf07t4fm3iihgnk6cnnltllrvahthku.apps.googleusercontent.com"
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
