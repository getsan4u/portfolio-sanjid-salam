import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { Helmet } from "react-helmet-async";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Sanjid-Salam.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  // Uncomment and use if you want to fetch ranks from backend
  // const [spojRank, updateSpojRank] = useState(0);
  // const [hackerrank, updateHackerrank] = useState(0);
  // const [cgpa, updateCgpa] = useState(0);

  // useEffect(() => {
  //   const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       updateSpojRank(res.data.message[0].spojRank);
  //       updateHackerrank(res.data.message[1].hackerrank);
  //       updateCgpa(res.data.message[2].cgpa);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching ranks:", err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      <Helmet>
        <title>Resume | Sanjid Salam - DevOps Engineer</title>
        <meta
          name="description"
          content="View and download the resume of Sanjid Salam - DevOps Engineer with 5+ years experience. AWS Certified Solutions Architect, Azure certified."
        />
      </Helmet>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" rel="noopener noreferrer">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            
            <Resumecontent
              title="DevOps Engineer - Silicon Grid, Manchester"
              date="February 2025 - Present"
              content={[
                "Automated EC2 usage monitoring using Python and AWS Lambda, reducing cloud spending by 25%",
                "Improved AWS security using IAM roles, VPC restrictions, and AWS Security Hub, achieving 90%+ CIS v3 compliance",
                "Led Infrastructure as Code adoption with Terraform and Ansible, reducing deployment time by 75%",
                "Integrated Trivy into GitHub Actions, reducing container vulnerabilities by 40%",
                "Developed SSO integrations for AWS Identity Center, GitHub, Terraform Cloud using Azure AD",
              ]}
            />

            <Resumecontent
              title="Cloud Engineer (Freelance) - Fiverr, Remote"
              date="August 2022 - January 2025"
              content={[
                "Designed and automated AWS Lambda serverless applications using Terraform and GitHub Actions",
                "Deployed containerized applications to EKS with blue-green deployments, improving release speed by 20%",
                "Automated provisioning of ECS, ECR, RDS, VPC, and IAM using Terraform for enhanced security and consistency",
              ]}
            />

            <Resumecontent
              title="DevOps Engineer - Torry Harris Integration Solutions, London"
              date="July 2021 - August 2022"
              content={[
                "Implemented CI/CD pipelines using GitLab, reducing deployment time by 30%",
                "Integrated GitOps workflow for EKS clusters using ArgoCD, reducing deployment time by 40%",
                "Automated security checks with OWASP ZAP, SonarQube, and Snyk, cutting security testing time by 50%",
                "Reduced system downtime by 25% through automated monitoring with Prometheus and Grafana",
                "Authored 50+ process documentation articles, improving knowledge sharing by 25%",
              ]}
            />

            <Resumecontent
              title="Cloud Engineer - Active Lobby Information Systems"
              date="May 2019 - July 2021"
              content={[
                "Managed AWS infrastructure (EC2, EBS, IAM, RDS, Route 53) ensuring 99.9% uptime",
                "Leveraged GitOps and Terraform for cloud automation, reducing manual interventions by 40%",
                "Implemented automated backup using S3 and AWS Backups, reducing data loss by 75%",
                "Integrated GitHub webhooks with Jenkins, improving deployment speed by 50%",
                "Led migration of legacy applications to AWS, reducing system downtime by 50%",
              ]}
            />

            <Resumecontent
              title="Cloud Support Engineer - Spectrum Soft tech Solutions"
              date="October 2018 - March 2019"
              content={[
                "Administered 30+ AWS services achieving zero downtime during peak traffic",
                "Optimized LAMP-based servers achieving 99.5% uptime and 40% better query performance",
                "Implemented SSL/TLS certificates and firewall configurations for enhanced security",
                "Maintained 95% customer satisfaction rate through efficient technical support",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Science - Cyber Security"
              date="September 2022 - September 2023"
              content={["University of Hertfordshire", "Overall: Merit"]}
            />
            <Resumecontent
              title="Bachelor of Technology - Computer Science and Engineering"
              date="August 2014 - May 2018"
              content={["University of Calicut", "Overall: 2.1"]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                "AWS Certified Solutions Architect Associate",
                "Microsoft Certified: Azure Fundamentals (AZ-900)",
              ]}
            />

            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title="Cloud & DevOps"
              content={[
                "AWS (EC2, ECS, EKS, Lambda, RDS, S3, IAM, CloudWatch)",
                "Azure (Active Directory, Fundamentals)",
                "Docker, Kubernetes, Helm",
                "Terraform, CloudFormation, Pulumi, Ansible",
                "GitLab CI/CD, GitHub Actions, Jenkins, ArgoCD",
              ]}
            />
            <Resumecontent
              title="Security & Monitoring"
              content={[
                "AWS Security Hub, AWS Inspector, AWS Config",
                "Trivy, Snyk, OWASP ZAP, SonarQube",
                "HashiCorp Vault, Tenable",
                "Prometheus, Grafana, CloudWatch",
              ]}
            />
            <Resumecontent
              title="Programming & Scripting"
              content={[
                "Python, Bash, PowerShell",
                "Linux (RedHat, Ubuntu, CentOS)",
                "Windows Server, MacOS",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" rel="noopener noreferrer">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
