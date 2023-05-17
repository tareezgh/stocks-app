import React from "react";
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
import "./register.css"; // Custom CSS file for additional styling

const Register = () => {
  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} md={6} lg={4}>
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
              <CardFooter className="d-flex justify-content-between align-items-center">
                <p className="signup-text mb-3 mt-2">
                  Already have an account?{" "}
                </p>
                <NavLink href="/signin">Sign in</NavLink>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
