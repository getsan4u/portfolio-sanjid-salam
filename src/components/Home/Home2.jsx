import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a DevOps Engineer who transforms complex infrastructure challenges into elegant, automated solutions. 🚀
              <br />
              <br />
              My technical arsenal includes
              <i>
                <b className="purple"> AWS, Azure, Kubernetes, and Docker</b>
              </i>
              , powered by automation tools like
              <i>
                <b className="purple"> Terraform, Ansible, and GitLab CI/CD.</b>
              </i>
              <br />
              <br />
              I'm proficient in scripting with &nbsp;
              <i>
                <b className="purple">Python and Bash</b>
              </i>
              , which I use to build intelligent automation workflows, monitoring solutions, and infrastructure provisioning tools.
              <br />
              <br />
              My recent achievements include
              <i>
                <b className="purple"> reducing cloud costs by 25%</b>
              </i>
              , achieving
              <i>
                <b className="purple"> 90%+ security compliance</b>
              </i>
              , and cutting deployment times by
              <i>
                <b className="purple"> 75% through Infrastructure as Code.</b>
              </i>
              <br />
              <br />
              Whether it's containerizing applications, setting up CI/CD pipelines, or implementing security best practices, I focus on delivering solutions that are <b className="purple">scalable, secure, and maintainable</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/getsan4u"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanjid-salam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/getsan4u/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
