// Edit everything about the site here. Replace the placeholder links before publishing.

export const profile = {
  name: "Kamal Vasvani",
  role: "IT Security Engineer & Information Security Officer",
  location: "Surat, India",
  intro:
    "I secure cloud-first companies end to end: the AWS and Kubernetes they run on, the identities and devices their people use, the network in the office, and the compliance program that proves it all to auditors.",
  about: [
    "As the security function of a SaaS company, I own everything from firewall policy and endpoint management to cloud hardening and audit readiness. I like turning security work into systems that keep running without me: automation, clear runbooks, and controls that hold up under audit.",
    "Outside work, I build tools that make security understandable for people who aren't security experts, and I keep sharpening my DevOps skills through hands-on cloud projects.",
  ],
  email: "hello@kamalvasvani.com",           // TODO: your real email
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  github: "https://github.com/your-handle",           // TODO
};

export const now = {
  title: "SiteKavach",
  text: "A free website security checkup that explains email, SSL, browser and DNS issues in plain language, with copy-paste fixes.",
  link: "https://scan.kamalvasvani.com",
  linkLabel: "Try SiteKavach",
};

export const skills = [
  {
    area: "Cloud & DevOps",
    items: ["AWS (EKS, EC2, S3, Lambda, CloudWatch, SNS)", "Kubernetes & Helm", "Terraform & Ansible", "Jenkins CI/CD", "Docker & ECR"],
  },
  {
    area: "Security & compliance",
    items: ["ISO 27001 & SOC 2 programs", "ISMS policies and risk management", "Cloud posture with Prowler & ScoutSuite", "Vulnerability assessment coordination", "Compliance automation"],
  },
  {
    area: "Identity & endpoints",
    items: ["Microsoft 365 & Entra ID", "Conditional Access", "Intune MDM for desktop and mobile", "Remote management & patching", "Password management"],
  },
  {
    area: "Network & infrastructure",
    items: ["FortiGate firewalls", "Site-to-site and IKEv2 VPNs", "Dual-ISP failover", "VLAN segmentation & Wi-Fi", "Logging & observability"],
  },
];

export const projects = [
  {
    title: "SiteKavach",
    kind: "Product",
    text: "Website security checkup with an A–F grade, plain-language findings and copy-paste fixes. FastAPI backend with SSRF protection and rate limiting, React frontend, self-hosted behind Cloudflare Tunnel.",
    tags: ["Python", "FastAPI", "React", "Cloudflare"],
    link: "https://scan.kamalvasvani.com",
  },
  {
    title: "Container image vulnerability scanner",
    kind: "Tool",
    text: "Scans container images for known vulnerabilities and turns the results into readable reports.",
    tags: ["Docker", "Security", "Reporting"],
    link: null,
  },
  {
    title: "StreamingApp on EKS",
    kind: "DevOps",
    text: "MERN streaming app containerised to ECR, built with Jenkins, deployed to EKS with Helm, monitored in CloudWatch, with SNS alerts to chat.",
    tags: ["EKS", "Helm", "Jenkins", "CloudWatch"],
    link: null,
  },
  {
    title: "TravelMemory with Terraform & Ansible",
    kind: "DevOps",
    text: "Infrastructure as code for a MERN app on AWS: Terraform provisions the network and servers, Ansible configures and deploys them.",
    tags: ["Terraform", "Ansible", "AWS"],
    link: null,
  },
  {
    title: "AWS automation with Lambda & Boto3",
    kind: "Automation",
    text: "Serverless functions that automate routine AWS operations and housekeeping.",
    tags: ["Lambda", "Python", "Boto3"],
    link: null,
  },
];

export const highlights = [
  "Driving a combined SOC 2 and ISO 27001 certification effort",
  "Rolled out Intune device management across Android, iOS, macOS and Linux",
  "Remediated cloud and Microsoft 365 posture findings and enforced Conditional Access",
  "Set up dual-ISP failover and VPN connectivity for a new office",
];
