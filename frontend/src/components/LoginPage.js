import React, { useState,  } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthConext";
import { useThemeContext } from "../contexts/ThemeContext";

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  // const [loading, setLoading] = useState(false);
  const { userLogin } = useAuthContext();
  const { showAlert } = useThemeContext();

  const history = useHistory();
  // console.log(currentUser);
  // const {cred} = useSignup(emailRef.current.value, passwordRef.current.value)

  const handleLoginSubmit = async () => {
    try {
      // setLoading(true);
      const res = await userLogin(emailInput, passwordInput);
      console.log(res);
      // console.log(userCred);

      //route based on role
      history.push("/");
    } catch (err) {
      console.log(err.message);
      // showAlert(err.message, "error");
    }
    // setLoading(false);
  };

  // const createNewAdmin = async () => {
  //   try {
  //     const cred = await adminRegister(emailInput, passwordInput);

  //   } catch (err) {
  //     console.log(err.message);
  //   }

  // }

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column  style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            {/* <Image src="/logo.png" />  */}
            Login
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                value={emailInput}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                }}
                value={passwordInput}
              />

              <Button
                color="blue"
                fluid
                size="large"
                onClick={handleLoginSubmit}
                // disabled={loading}
              >
                Login
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            Forgot Password?{" "}
            <span>
              <Link to="forgot-password">Click here</Link>
            </span>
          </Message> */}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginPage;
