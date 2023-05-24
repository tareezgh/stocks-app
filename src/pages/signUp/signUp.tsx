import { useState } from "react";
import PasswordValidator from "password-validator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../fetchData";
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
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const args = {
    username,
    password,
  };

  const validInputs = (username: string, password: string) => {
    if (username && password) return true;
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
    }
    return false;
  };

  const onSignUpClick = async () => {
    if (password !== confirmedPassword) return false;
    if (!validInputs(username, password)) return false;

    const schema = new PasswordValidator();
    schema
      .is()
      .min(6)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(2)
      .has()
      .not()
      .spaces();

    if (!schema.validate(password)) {
      toast.error("Password is too weak!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
      return schema.validate(password, { details: true });
    }
    try {
      if (await registerUser(args)) navigate("/sign-in");
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="sign-up-page">
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
                    <Label for="username">Username or Email*</Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      onChange={(text) => setUsername(text.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password*</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(text) => setPassword(text.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password*</Label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      onChange={(text) =>
                        setConfirmedPassword(text.target.value)
                      }
                    />
                  </FormGroup>
                  <Button color="primary" block onClick={onSignUpClick}>
                    Create my account
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-start align-items-center">
                <p className="sign-in-text mb-0 me-3">
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
