import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Particle from "../Particle";
import { BiBookReader } from "react-icons/bi";

function Blog() {
  const blogPosts = [
    {
      title: "How I migrate Docker Compose apps to Kubernetes using Kompose + Helm",
      excerpt: "A step-by-step guide to migrating legacy Docker Compose applications to Kubernetes with minimal downtime. Learn how to use Kompose for initial conversion and Helm for production-ready deployments.",
      date: "Coming Soon",
      readTime: "8 min read",
      tags: ["Kubernetes", "Docker", "Migration", "Helm"]
    },
    {
      title: "Designing a reusable DevSecOps GitHub Actions workflow for security scanning",
      excerpt: "Build a modular CI/CD pipeline that integrates Trivy, tfsec, gitleaks, and dependency scanning. Catch vulnerabilities early and automate security checks across all your repositories.",
      date: "Coming Soon",
      readTime: "10 min read",
      tags: ["DevSecOps", "GitHub Actions", "Security", "CI/CD"]
    },
    {
      title: "AWS cost optimisation: gp2 → gp3 automated upgrades and shutdown schedules",
      excerpt: "Reduce AWS costs by 25% with automated EBS volume upgrades and intelligent resource scheduling. Practical Terraform and Lambda examples included.",
      date: "Coming Soon",
      readTime: "6 min read",
      tags: ["AWS", "Cost Optimization", "Terraform", "Automation"]
    }
  ];

  return (
    <Container fluid className="blog-section">
      <Helmet>
        <title>Blog | Sanjid Salam - Cloud & DevSecOps Engineer</title>
        <meta
          name="description"
          content="Technical articles and insights on DevOps, cloud infrastructure, Kubernetes, and security automation by Sanjid Salam."
        />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "var(--light-grey)"
        }}>
          Technical <span className="aqua">Blog</span>
        </h1>
        <p style={{ 
          color: "var(--soft-grey)", 
          fontSize: "1.1rem",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          Insights, tutorials, and lessons learned from real-world DevOps challenges.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {blogPosts.map((post, index) => (
            <Col md={10} lg={8} key={index} style={{ marginBottom: "30px" }}>
              <Card style={{
                background: "var(--light-navy)",
                border: "1px solid var(--lightest-navy)",
                borderRadius: "10px",
                padding: "35px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
              }} className="blog-card-view">
                <Card.Body style={{ padding: 0 }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "15px",
                    marginBottom: "20px"
                  }}>
                    <BiBookReader size={30} style={{ color: "var(--aqua-accent)" }} />
                    <div>
                      <span style={{
                        color: "var(--soft-grey)",
                        fontSize: "0.9rem",
                        fontFamily: "'Fira Code', monospace"
                      }}>
                        {post.date} • {post.readTime}
                      </span>
                    </div>
                  </div>

                  <Card.Title style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "var(--light-grey)",
                    marginBottom: "20px",
                    lineHeight: "1.4"
                  }}>
                    {post.title}
                  </Card.Title>
                  
                  <Card.Text style={{
                    color: "var(--soft-grey)",
                    fontSize: "1.05rem",
                    lineHeight: "1.7",
                    marginBottom: "25px"
                  }}>
                    {post.excerpt}
                  </Card.Text>

                  <div style={{ marginBottom: "25px" }}>
                    {post.tags.map((tag, i) => (
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

                  <Button
                    variant="primary"
                    disabled
                    style={{
                      padding: "10px 25px",
                      backgroundColor: "transparent",
                      border: "2px solid var(--aqua-accent)",
                      color: "var(--aqua-accent)",
                      borderRadius: "5px",
                      fontWeight: "600",
                      opacity: 0.6,
                      cursor: "not-allowed"
                    }}
                  >
                    Coming Soon
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{
          textAlign: "center",
          padding: "40px",
          background: "var(--light-navy)",
          borderRadius: "10px",
          border: "1px solid var(--lightest-navy)"
        }}>
          <p style={{
            color: "var(--soft-grey)",
            fontSize: "1.1rem",
            marginBottom: "0"
          }}>
            More articles coming soon! Follow me on{" "}
            <a 
              href="https://github.com/getsan4u" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: "var(--aqua-accent)", textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
            for updates.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Blog;
