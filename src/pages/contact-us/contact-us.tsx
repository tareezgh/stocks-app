import "./contact-us.css";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { LocationOn, Phone, Email } from "@material-ui/icons";

function ContactUs() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="mb-5 text-center">Contact Us</h1>
        <Row>
          <Col md={8}>
            <div className="contact-form-container">
              <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Select name="subject">
                    <option value="">-- Select a subject --</option>
                    <option value="General">General</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} name="message" />
                </Form.Group>
                <Button
                  type="submit"
                  variant="primary"
                  style={{ borderRadius: "4px" }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

          <Col md={4}>
            <div className="info-container">
              <Card className="mb-5 contactSupportSection">
                <Card.Body className="myCard">
                  <Card.Title>NEED 24/7 SUPPORT</Card.Title>
                  <Button
                    href="mailto:support@example.com"
                    variant="primary"
                    className="ms-4"
                  >
                    Contact Support
                  </Button>
                </Card.Body>
              </Card>

              <Card className="mt-5 ">
                <Card.Body className="contact-info">
                  <h2 className="mb-4">Contact Information</h2>
                  <p className="mb-4">
                    <LocationOn className="me-2" />
                    123 Main Street
                    <br />
                    <Phone className="me-2" />
                    555-123-4567
                    <br />
                    <Email className="me-2" />
                    <a
                      href="mailto:support@example.com"
                      className="email-link "
                    >
                      support@example.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContactUs;
