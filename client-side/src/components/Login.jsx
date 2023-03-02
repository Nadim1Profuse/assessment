import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Axios from "axios";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(loginInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", loginInfo);
    console.log(loginInfo);
    window.location.href = "/list";
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Pokémon</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form action="/list" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          required
                          onChange={handleChange}
                          name="userName"
                          value={loginInfo.userName}
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          onChange={handleChange}
                          name="password"
                          value={loginInfo.password}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3"></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
