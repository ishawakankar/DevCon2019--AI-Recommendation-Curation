import React from "react";
import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router";
import clientID from "../../config/keys";
import "../css/style.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  onSignIn(response) {
    console.log(response);
    sessionStorage.setItem("userName", response.profileObj.name);
    sessionStorage.setItem("userProfileImage", response.profileObj.imageUrl);
    this.setState({
      redirect: true
    });
  }

  onFailure(response) {
    console.log("Login Failed");
    this.setState({
      redirect: false
    });
  }

  render() {
    return (
      <Container verticalAlign="middle">
        <Segment verticalAlign="middle" style={{ minHeight: '100vh', padding: '1em 0em' }}>
          <Image
            src="./images/buzzinga.png"
            size="big"
            className="m-b"
            centered
          />
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column verticalAlign='middle' style={{ maxWidth: 450 }}>
              <Segment raised className="red-bg">
                <Header as="h2" textAlign="center">
                  Log-in
                </Header>
                <Form size="large">
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="User Id"
                    />
                    <Button  color="black" fluid size="large">
                      Login
                    </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Login;
