import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { Helmet } from "react-helmet-async";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:sanjid.salam.p@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setValidated(false);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Container fluid className="contact-section">
      <Helmet>
        <title>Contact | Sanjid Salam</title>
        <meta
          name="description"
          content="Get in touch with Sanjid Salam. Let's discuss your project or collaboration opportunities."
        />
      </Helmet>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Feel free to reach out to me for any questions or opportunities!
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            {showSuccess && (
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                Your email client should open shortly. If not, please email me directly.
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="contact-submit-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/getsan4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/getsan4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanjid-salam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/getsan4u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sanjid.salam.p@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
