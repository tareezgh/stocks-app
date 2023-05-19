import React from "react";
import "./signIn.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  NavLink,
} from "reactstrap";

const SignIn = () => {
  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col sm={8} md={6} lg={6}>
            <Card>
              <CardBody>
                <h3 className="text-center card-title-large">Log In</h3>
                <Form>
                  <FormGroup>
                    <Label for="username">User name</Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                    />
                    <NavLink className="forgot-password" href="#">
                      Forgot password?
                    </NavLink>
                  </FormGroup>
                  <Button color="primary" block>
                    Login
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-start align-items-center">
                <p className="signup-text mb-0 me-3">Don't have an account? </p>
                <NavLink href="/sign-up">Sign up</NavLink>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
