import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

class Login extends React.Component {

  render() {  
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20%'}}>
        <Button primary size='massive' href={`/#/dashboard`}>Login</Button>
      </div>  
    );
  }
}

export default Login;
