import React from "react";
import "./signUp.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  NavLink,
  CardFooter,
} from "reactstrap";

const SignUp = () => {
  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} md={6} lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="text-center card-title-large">
                  Create an Account
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </FormGroup>
                  <Button color="primary" block>
                    Create my account
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-start align-items-center">
                <p className="signin-text mb-0 me-3">
                  Already have an account?{" "}
                </p>
                <NavLink href="/sign-in">Sign in</NavLink>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
