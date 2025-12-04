import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Particle from "../Particle";
import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  const projects = [
    {
      title: "FSx to S3 Backup Automation (with SNS Alerts)",
      description: "Automated nightly enterprise backups with logging, error notifications, and monthly archival workflows. Implemented robust error handling and monitoring using AWS Lambda, EventBridge, and SNS.",
      tags: ["AWS", "Automation", "Bash", "Reliability", "Lambda", "S3"],
      github: "https://github.com/getsan4u",
      demo: null,
      image: null
    },
    {
      title: "Docker Compose → EKS Migration with Kompose, Helm, and ArgoCD",
      description: "End-to-end migration workflow from EC2 Docker Compose to Kubernetes, including GitOps deployment. Reduced deployment time by 40% and improved scalability with automated rollbacks.",
      tags: ["Kubernetes", "EKS", "ArgoCD", "Helm", "GitOps", "Docker"],
      github: "https://github.com/getsan4u",
      demo: null,
      image: null
    },
    {
      title: "Reusable GitHub Actions DevSecOps Pipeline",
      description: "A modular CI pipeline for Trivy, tfsec, gitleaks, and dependency scanning. Integrated security checks reduced vulnerabilities by 40% and caught issues before deployment.",
      tags: ["DevSecOps", "GitHub Actions", "Security", "Trivy", "tfsec", "CI/CD"],
      github: "https://github.com/getsan4u",
      demo: null,
      image: null
    }
  ];

  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Projects | Sanjid Salam - Cloud & DevSecOps Engineer</title>
        <meta
          name="description"
          content="Explore DevOps and cloud infrastructure projects by Sanjid Salam, featuring AWS automation, Kubernetes migrations, and DevSecOps pipelines."
        />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "var(--light-grey)"
        }}>
          Featured <span className="aqua">Projects</span>
        </h1>
        <p style={{ 
          color: "var(--soft-grey)", 
          fontSize: "1.1rem",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          Real-world DevOps solutions showcasing infrastructure automation, cloud security, and scalable architectures.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="project-card" key={index} style={{ marginBottom: "30px" }}>
              <Card className="project-card-view" style={{
                background: "var(--light-navy)",
                border: "1px solid var(--lightest-navy)",
                borderRadius: "10px",
                padding: "30px",
                height: "100%",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
              }}>
                <Card.Body style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  padding: 0
                }}>
                  <Card.Title style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "var(--light-grey)",
                    marginBottom: "20px"
                  }}>
                    {project.title}
                  </Card.Title>
                  
                  <Card.Text style={{
                    textAlign: "justify",
                    color: "var(--soft-grey)",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                    flex: 1
                  }}>
                    {project.description}
                  </Card.Text>

                  <div style={{ marginBottom: "20px" }}>
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        style={{
                          display: "inline-block",
                          padding: "5px 12px",
                          margin: "5px 5px 5px 0",
                          background: "var(--lightest-navy)",
                          border: "1px solid var(--aqua-accent)",
                          borderRadius: "15px",
                          color: "var(--aqua-accent)",
                          fontSize: "0.85rem",
                          fontFamily: "'Fira Code', monospace"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ 
                    display: "flex", 
                    gap: "15px",
                    marginTop: "auto"
                  }}>
                    <Button
                      variant="primary"
                      href={project.github}
                      target="_blank"
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "transparent",
                        border: "2px solid var(--aqua-accent)",
                        color: "var(--aqua-accent)",
                        borderRadius: "5px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px"
                      }}
                      className="glow-button"
                    >
                      <AiOutlineGithub /> GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        variant="primary"
                        href={project.demo}
                        target="_blank"
                        style={{
                          flex: 1,
                          padding: "10px",
                          backgroundColor: "var(--aqua-accent)",
                          border: "2px solid var(--aqua-accent)",
                          color: "var(--dark-navy)",
                          borderRadius: "5px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px"
                        }}
                      >
                        <CgWebsite /> Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Architecture Section */}
        <div style={{
          marginTop: "80px",
          padding: "60px 40px",
          background: "var(--light-navy)",
          borderRadius: "10px",
          border: "1px solid var(--lightest-navy)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            marginBottom: "30px",
            color: "var(--light-grey)",
            textAlign: "center"
          }}>
            Portfolio <span className="aqua">Architecture</span>
          </h2>
          
          <div style={{
            background: "var(--dark-navy)",
            padding: "40px",
            borderRadius: "8px",
            border: "1px solid var(--aqua-accent)",
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.95rem",
            color: "var(--soft-grey)",
            lineHeight: "2"
          }}>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>S3 Static Hosting</strong> - Scalable object storage for website files
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>CloudFront CDN</strong> - Global content delivery with edge caching
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>Route 53 DNS</strong> - Managed DNS with health checks
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>AWS ACM TLS</strong> - Free SSL/TLS certificates
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>Terraform IaC</strong> - Infrastructure as Code for reproducibility
            </div>
            <div>
              <span style={{ color: "var(--aqua-accent)" }}>→</span> <strong style={{ color: "var(--light-grey)" }}>GitHub Actions CI/CD</strong> - Automated deployment pipeline
            </div>
          </div>

          <p style={{
            marginTop: "30px",
            textAlign: "center",
            color: "var(--soft-grey)",
            fontSize: "1rem",
            fontStyle: "italic"
          }}>
            Hosted on AWS using Terraform, secured with CloudFront + ACM, deployed via GitHub Actions.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
