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
    sessionStorage.setItem("userName",response.profileObj.name);
    sessionStorage.setItem("userProfileImage",response.profileObj.imageUrl);
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
                clientId="325576232110-serqa7m98or6dvaej7g2i6h8b2ur6ql3.apps.googleusercontent.com"
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
