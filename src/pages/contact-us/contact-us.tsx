import React from "react";
import "./contact-us.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function ContactUs() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-form-container">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <select className="form-select" id="subject" name="subject">
                  <option value="">-- Select a subject --</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing">Billing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="info-container">
            <div className="card mb-5 contactSupportSection">
              <div className="card-body myCard">
                <h5 className="card-title">NEED 24/7 SUPPORT</h5>
                <a
                  href="mailto:support@example.com"
                  className="btn btn-secondary"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="card mt-5">
              <div className="card-body">
                <h2 className="mb-4">Contact Information</h2>
                <p className="mb-4">
                  <LocationOnIcon className="me-2" />
                  123 Main Street
                  <br />
                  <PhoneIcon className="me-2" />
                  555-123-4567
                  <br />
                  <EmailIcon className="me-2" />
                  <a href="mailto:support@example.com">support@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
