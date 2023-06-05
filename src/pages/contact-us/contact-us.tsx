import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { LocationOn, Phone, Email } from "@material-ui/icons";
import emailjs from "emailjs-com";
import "./contact-us.css";
import { toast } from "react-toastify";
emailjs.init("KnvuHmCPhQg0PD8G7");

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSendEmail = (event: any) => {
    event.preventDefault();
    const emailParams = {
      to_email: formData.email,
      to_name: formData.name,
      from_name: "Stock-app",
      from_email: "tareezghandour15@gmail.com",
      subject: "Stock-app Service",
      message: `Thank you for contacting Stock-app service support, we happy to help in your ${formData.subject} problem, it will take some time 😁`,
    };

    emailjs
      .send(
        "service_ap7gc3l",
        "template_v4qsmvc",
        emailParams,
        "KnvuHmCPhQg0PD8G7"
      )
      .then(() => {
        toast.success("Email sent successfully", {
          position: "bottom-center",
          hideProgressBar: true,
        });
      })
      .catch((error: any) => {
        toast.error("Error sending email, try again", {
          position: "bottom-center",
          hideProgressBar: true,
        });
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="mb-5 text-center">Contact Us</h1>
        <Row>
          <Col md={8}>
            <div className="contact-form-container">
              <Form id="contact-form" onSubmit={handleSendEmail}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select a subject --</option>
                    <option value="General">General</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
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
                    href="mailto:tareezgh15@gmail.com"
                    variant="primary"
                    className="ms-4"
                  >
                    Contact Support
                  </Button>
                </Card.Body>
              </Card>

              <Card className="mt-5">
                <Card.Body className="contact-info">
                  <h2 className="mb-4">Contact Information</h2>
                  <p className="mb-4">
                    <LocationOn className="me-2" />
                    Karmiel, Israel
                    <br />
                    <Phone className="me-2" />
                    052-483-7648
                    <br />
                    <Email className="me-2" />
                    <a
                      href="mailto:tareezgh15@gmail.com"
                      className="email-link"
                    >
                      tareezgh15@gmail.com
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
};

export default ContactUs;
