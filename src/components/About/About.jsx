import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Particle from "../Particle";
import { SiAmazonaws, SiMicrosoftazure } from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>About | Sanjid Salam - Cloud & DevSecOps Engineer</title>
        <meta
          name="description"
          content="Learn about Sanjid Salam - Cloud & DevSecOps Engineer with hands-on experience in AWS, Kubernetes, Terraform, and secure CI/CD workflows."
        />
      </Helmet>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px 0" }}>
          <Col md={10}>
            <h1 style={{ 
              fontSize: "2.5em", 
              paddingBottom: "30px",
              color: "var(--light-grey)",
              textAlign: "center"
            }}>
              About <span className="aqua">Me</span>
            </h1>
            
            <Card style={{
              background: "var(--light-navy)",
              border: "1px solid var(--lightest-navy)",
              borderRadius: "10px",
              padding: "40px",
              marginBottom: "50px"
            }}>
              <Card.Body>
                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  color: "var(--soft-grey)",
                  textAlign: "justify"
                }}>
                  I'm a <span className="aqua">Cloud & DevSecOps Engineer</span> with hands-on experience 
                  designing <span className="aqua">AWS infrastructure</span>, automating deployments, 
                  building <span className="aqua">secure CI/CD workflows</span>, and optimising cloud workloads.
                </p>
                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  color: "var(--soft-grey)",
                  textAlign: "justify",
                  marginTop: "20px"
                }}>
                  I enjoy transforming manual processes into <span className="aqua">reliable, automated systems</span> using 
                  Terraform, Kubernetes, and GitHub Actions. My work blends cloud engineering, 
                  cybersecurity principles, and DevOps culture.
                </p>
                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.9",
                  color: "var(--soft-grey)",
                  textAlign: "justify",
                  marginTop: "20px"
                }}>
                  Based in <span className="aqua">Manchester, UK</span> (open to relocate), I bring{" "}
                  <span className="aqua">5+ years of experience</span> helping organizations build{" "}
                  <span className="aqua">secure, scalable, and highly available systems</span>.
                </p>
              </Card.Body>
            </Card>

            {/* Certifications */}
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "40px",
              color: "var(--light-grey)",
              textAlign: "center"
            }}>
              Professional <span className="aqua">Certifications</span>
            </h2>

            <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
              <Col md={5} style={{ marginBottom: "30px" }}>
                <Card style={{
                  background: "var(--light-navy)",
                  border: "2px solid var(--aqua-accent)",
                  borderRadius: "10px",
                  padding: "30px",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease"
                }} className="glow-button">
                  <SiAmazonaws size={60} style={{ color: "var(--aqua-accent)", marginBottom: "20px" }} />
                  <h3 style={{ color: "var(--light-grey)", fontSize: "1.4rem", marginBottom: "10px" }}>
                    AWS Certified
                  </h3>
                  <h4 style={{ color: "var(--aqua-accent)", fontSize: "1.2rem", marginBottom: "15px" }}>
                    Solutions Architect Associate
                  </h4>
                  <p style={{ color: "var(--soft-grey)", fontSize: "0.95rem" }}>
                    Validates expertise in designing distributed systems on AWS
                  </p>
                </Card>
              </Col>

              <Col md={5} style={{ marginBottom: "30px" }}>
                <Card style={{
                  background: "var(--light-navy)",
                  border: "2px solid var(--aqua-accent)",
                  borderRadius: "10px",
                  padding: "30px",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease"
                }} className="glow-button">
                  <SiMicrosoftazure size={60} style={{ color: "var(--aqua-accent)", marginBottom: "20px" }} />
                  <h3 style={{ color: "var(--light-grey)", fontSize: "1.4rem", marginBottom: "10px" }}>
                    Microsoft Certified
                  </h3>
                  <h4 style={{ color: "var(--aqua-accent)", fontSize: "1.2rem", marginBottom: "15px" }}>
                    Azure Fundamentals (AZ-900)
                  </h4>
                  <p style={{ color: "var(--soft-grey)", fontSize: "0.95rem" }}>
                    Demonstrates foundational knowledge of cloud services
                  </p>
                </Card>
              </Col>
            </Row>

            {/* Contact Info */}
            <div style={{
              textAlign: "center",
              padding: "40px",
              background: "var(--light-navy)",
              borderRadius: "10px",
              border: "1px solid var(--lightest-navy)"
            }}>
              <h3 style={{ color: "var(--light-grey)", marginBottom: "20px", fontSize: "1.8rem" }}>
                Let's <span className="aqua">Connect</span>
              </h3>
              <p style={{ color: "var(--soft-grey)", fontSize: "1.1rem", marginBottom: "30px" }}>
                If you'd like to discuss opportunities, projects, or DevSecOps strategy — feel free to reach out.
              </p>
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "30px",
                flexWrap: "wrap",
                fontFamily: "'Fira Code', monospace"
              }}>
                <a 
                  href="mailto:sanjid.salam.p@gmail.com"
                  style={{
                    color: "var(--aqua-accent)",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                >
                  📧 Email
                </a>
                <a 
                  href="https://linkedin.com/in/sanjid-salam"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--aqua-accent)",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                >
                  💼 LinkedIn
                </a>
                <a 
                  href="https://github.com/getsan4u"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--aqua-accent)",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                >
                  🔗 GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
