import React from 'react';
import { Button } from 'semantic-ui-react';

class Login extends React.Component {

  render() {  
    return (
        <Button href={`/dashboard`}>Login</Button>
    );
  }
}

export default Login;
