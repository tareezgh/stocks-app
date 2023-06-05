import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { loginUser } from "../../fetchData";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const args = {
    username,
    password,
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("username");
    if (currentUser) navigate("/dashboard");
  }, []);

  const validInputs = (username: string, password: string) => {
    if (username && password) return true;
    return false;
  };

  const onLoginClick = () => {
    if (validInputs(username, password)) {
      loginUser(args).then((res) => {
        if (rememberMe) localStorage.setItem("username", username);
        if (res) navigate("/dashboard");
      });
    } else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
    }
  };

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
                    <Label for="username">Username or Email*</Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Enter your username or email"
                      onChange={(text) =>
                        setUsername(text.target.value.toLowerCase())
                      }
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
                  <FormGroup check className="mb-4">
                    <Label check className="remember-me">
                      <Input
                        type="checkbox"
                        className="checkbox-remember-me"
                        onChange={(event) =>
                          setRememberMe(event.target.checked)
                        }
                      />
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button color="primary" block onClick={onLoginClick}>
                    Login
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-start align-items-center">
                <p className="sign-up-text mb-0 me-3">
                  Don't have an account?{" "}
                </p>
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
