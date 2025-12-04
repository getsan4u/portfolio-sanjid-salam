import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{
      background: "var(--light-navy)",
      borderTop: "1px solid var(--lightest-navy)",
      padding: "30px 0"
    }}>
      <Row>
        <Col md="12" className="footer-copywright" style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3 style={{ 
            fontSize: "1.2rem", 
            color: "var(--soft-grey)",
            fontWeight: "400"
          }}>
            © {year} Sanjid Salam – <span className="aqua">Cloud & DevSecOps Engineer</span>
          </h3>
          <div style={{ 
            marginTop: "15px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "var(--dark-navy)",
            borderRadius: "20px",
            border: "1px solid var(--aqua-accent)",
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.85rem"
          }}>
            <BsCheckCircleFill style={{ color: "var(--aqua-accent)" }} />
            <span style={{ color: "var(--aqua-accent)" }}>Build Passing</span>
          </div>
        </Col>
        <Col md="12" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px",
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            <li className="social-icons">
              <a
                href="https://github.com/getsan4u"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: "var(--aqua-accent)",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease"
                }}
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
                style={{ 
                  color: "var(--aqua-accent)",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease"
                }}
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
                style={{ 
                  color: "var(--aqua-accent)",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease"
                }}
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
                style={{ 
                  color: "var(--aqua-accent)",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease"
                }}
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
