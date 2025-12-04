import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import homeLogo from "../../Assets/sanju.png";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";
import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiGithubactions, SiPython, SiLinux } from "react-icons/si";
import { BiShieldAlt2 } from "react-icons/bi";
import pdf from "../../Assets/Sanjid-Salam.pdf";

function Home() {
  const [buildTime, setBuildTime] = useState("");

  useEffect(() => {
    // Get build timestamp (you can replace this with actual build time from CI/CD)
    const now = new Date();
    setBuildTime(now.toLocaleString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  return (
    <section>
      <Helmet>
        <title>Sanjid Salam | Cloud & DevSecOps Engineer</title>
        <meta
          name="description"
          content="Cloud & DevSecOps Engineer specializing in secure, automated AWS platforms using Terraform, Kubernetes, Docker, and GitHub Actions."
        />
      </Helmet>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi, I'm <span className="aqua glow-text">Sanjid Salam</span> 👋
              </h1>

              <h2 className="heading-subtext" style={{ 
                fontSize: "1.8rem", 
                color: "var(--light-grey)",
                marginTop: "20px",
                marginBottom: "30px",
                fontWeight: "500"
              }}>
                Cloud & DevSecOps Engineer
              </h2>

              <div style={{ padding: "30px 0", textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ 
                fontSize: "1.1rem", 
                lineHeight: "1.8",
                color: "var(--soft-grey)",
                marginBottom: "40px",
                maxWidth: "600px"
              }}>
                I design <span className="aqua">scalable AWS architectures</span> using{" "}
                <span className="aqua">Terraform</span>, <span className="aqua">Kubernetes</span>,{" "}
                <span className="aqua">Docker</span>, and <span className="aqua">GitHub Actions</span> — 
                with a strong focus on <span className="aqua">cloud security</span>, automation, 
                and cost optimisation.
              </p>

              <Row style={{ marginBottom: "30px" }}>
                <Col md={6} className="d-grid gap-2">
                  <Button
                    variant="primary"
                    href="#projects"
                    className="glow-button"
                    style={{
                      padding: "12px 30px",
                      fontSize: "1.1rem",
                      backgroundColor: "transparent",
                      border: "2px solid var(--aqua-accent)",
                      color: "var(--aqua-accent)",
                      borderRadius: "5px",
                      fontWeight: "600"
                    }}
                  >
                    View Projects
                  </Button>
                </Col>
                <Col md={6} className="d-grid gap-2">
                  <Button
                    variant="outline-primary"
                    href={pdf}
                    target="_blank"
                    style={{
                      padding: "12px 30px",
                      fontSize: "1.1rem",
                      backgroundColor: "var(--aqua-accent)",
                      border: "2px solid var(--aqua-accent)",
                      color: "var(--dark-navy)",
                      borderRadius: "5px",
                      fontWeight: "600"
                    }}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                </Col>
              </Row>

              <a 
                href="https://github.com/getsan4u" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  color: "var(--aqua-accent)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease"
                }}
                className="github-link"
              >
                <AiOutlineGithub size={20} />
                GitHub →
              </a>

              <div style={{
                marginTop: "40px",
                padding: "15px 20px",
                background: "var(--light-navy)",
                border: "1px solid var(--lightest-navy)",
                borderRadius: "5px",
                display: "inline-block",
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.9rem"
              }}>
                <span style={{ color: "var(--soft-grey)" }}>Last Deployed:</span>{" "}
                <span style={{ color: "var(--aqua-accent)" }}>{buildTime}</span>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}>
                <div style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid var(--aqua-accent)",
                  boxShadow: "0 0 40px rgba(100, 255, 218, 0.3)",
                  background: "var(--light-navy)"
                }}>
                  <img
                    src={homeLogo}
                    alt="Sanjid Salam"
                    className="img-fluid"
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover" 
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Tech Stack Section */}
      <Container fluid className="tech-stack-section" style={{
        padding: "80px 0",
        background: "var(--light-navy)"
      }}>
        <Container>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "var(--light-grey)"
          }}>
            Tech Stack & <span className="aqua">Expertise</span>
          </h2>
          
          <Row style={{ justifyContent: "center", textAlign: "center" }}>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <FaAws size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>AWS</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <SiTerraform size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>Terraform</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <SiKubernetes size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>Kubernetes</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <FaDocker size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>Docker</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <SiLinux size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>Linux</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <SiGithubactions size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>GitHub Actions</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <SiPython size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>Python/Bash</p>
              </div>
            </Col>
            <Col xs={6} md={3} className="tech-icon-col" style={{ marginBottom: "40px" }}>
              <div className="tech-icon-wrapper">
                <BiShieldAlt2 size={60} style={{ color: "var(--aqua-accent)", marginBottom: "15px" }} />
                <p style={{ color: "var(--soft-grey)", fontSize: "1rem", fontWeight: "500" }}>DevSecOps</p>
              </div>
            </Col>
          </Row>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <span className="tech-pill">Trivy</span>
            <span className="tech-pill">tfsec</span>
            <span className="tech-pill">gitleaks</span>
            <span className="tech-pill">Snyk</span>
            <span className="tech-pill">AWS Security Hub</span>
            <span className="tech-pill">Prometheus</span>
            <span className="tech-pill">Grafana</span>
          </div>
        </Container>
      </Container>

      {/* About Me Introduction Section */}
      <Home2 />
    </section>
  );
}

export default Home;
