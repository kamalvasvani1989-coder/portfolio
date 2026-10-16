// All site content lives here. Edit, save, then git add / commit / push.

export const profile = {
  name: "Kamal Vasvani",
  title: "Cloud & Security Architect",
  tagline: "Hybrid cloud · BCDR · Security remediation · Compliance",
  location: "Surat, India",
  summary:
    "I design and secure enterprise infrastructure across Microsoft Azure, AWS and on-premises environments. Over 16 years I've built highly available hybrid platforms, disaster recovery that works when it's needed, and vulnerability programs that close critical risk fast, while keeping environments audit-ready for SOC 2, ISO 27001 and FedRAMP-aligned controls.",
  email: "vasvanikamal@outlook.com",
  linkedin: "https://www.linkedin.com/in/kamal-vasvani-50b366a9",
  github: "https://github.com/kamalvasvani1989-coder",
  // To offer a résumé download: put the PDF in the "public" folder and set the
  // file name here, e.g. "/Kamal-Vasvani-Resume.pdf". Leave null to hide the button.
  resume: null,
};

export const metrics = [
  { value: "16+", label: "Years in infrastructure and security" },
  { value: "2,500+", label: "Users protected with Zero Trust and RBAC" },
  { value: "350+", label: "Cloud assets under vulnerability management" },
  { value: "90%", label: "Critical risks remediated within 30 days" },
];

export const experience = [
  {
    role: "IT Security Engineer & Information Security Officer",
    company: "Gainserv Infotech",
    period: "2026 – Present",
    points: [
      "Lead the security function for a SaaS platform, covering cloud, identity, endpoints and network.",
      "Driving a combined SOC 2 and ISO 27001 certification program, including ISMS policies and risk management.",
      "Hardened AWS workloads (EKS, EC2, S3) by remediating cloud posture findings, and enforced Conditional Access in Microsoft Entra ID.",
      "Rolled out Intune device management across Android, iOS, macOS and Linux, and built resilient office networking with firewall policy, VPNs and dual-ISP failover.",
    ],
  },
  {
    role: "Cloud Architect",
    company: "Casepoint",
    period: "Jun 2019 – Mar 2026",
    points: [
      "Architected secure Azure IaaS and hybrid environments across Availability Zones, removing single points of failure and meeting strict operational SLAs.",
      "Designed disaster recovery and BCDR frameworks with Azure Site Recovery and Veeam, including automated backup and recovery.",
      "Ran the vulnerability lifecycle for 350+ Azure assets with Tenable Nessus and PowerShell automation, eliminating 90% of critical risks within 30 days.",
      "Established Zero Trust controls and strict RBAC for 2,500+ users, cutting unauthorized access incidents by 85%.",
      "Built observability with Grafana, Datadog, Graylog and Azure Monitor; led major incident response and authored runbooks and RCAs.",
      "Presented cloud security roadmaps and BCDR strategy to executive stakeholders, balancing risk against budget.",
    ],
  },
  {
    role: "Server Administrator",
    company: "SSM InfoTech",
    period: "Aug 2016 – Jun 2019",
    points: [
      "Administered VMware ESXi and Hyper-V environments for 2,000+ users at 99.9% uptime, reducing infrastructure costs by 20%.",
      "Directed WSUS patch management across 500+ servers, reducing vulnerabilities by 90% in six months with 98% policy compliance.",
      "Managed database disaster recovery with Symantec NetBackup and custom scripting.",
    ],
  },
  {
    role: "Network Administrator",
    company: "Creative Infotech",
    period: "Aug 2015 – Aug 2016",
    points: [
      "Engineered a Hyper-V cluster with 99.99% uptime and DR planning that reduced incidents by 70%.",
      "Coordinated 12+ vendors, reducing ticket resolution time by 30%.",
    ],
  },
  {
    role: "System Administrator",
    company: "Innovative Telecom & Softwares",
    period: "Jul 2010 – Aug 2015",
    points: [
      "Supported 500+ Lenovo/IBM enterprise systems, reducing incidents by 50% over 12 months.",
      "Delivered network infrastructure for 25+ clients on one-month deployment cycles.",
    ],
  },
];

export const expertise = [
  {
    area: "Cloud & virtualization",
    items: ["Microsoft Azure (IaaS, Site Recovery, Monitor)", "AWS (EKS, EC2, S3, Lambda)", "VMware ESXi & Hyper-V", "Cisco UCS"],
  },
  {
    area: "Security & compliance",
    items: ["SOC 2, ISO 27001, FedRAMP-aligned controls", "CIS Benchmark hardening", "Tenable Nessus, Palo Alto Cortex XDR", "Zero Trust & RBAC"],
  },
  {
    area: "Resilience & BCDR",
    items: ["Disaster recovery architecture", "Veeam & Symantec NetBackup", "Pure Storage", "High availability design"],
  },
  {
    area: "Observability",
    items: ["Datadog", "Grafana & Prometheus", "Graylog", "Azure Monitor"],
  },
  {
    area: "Identity & endpoints",
    items: ["Active Directory & Entra ID", "Conditional Access", "Intune & SCCM", "Microsoft Defender, ESET"],
  },
  {
    area: "Automation & DevOps",
    items: ["PowerShell & Python", "Terraform & Ansible", "Kubernetes & Helm", "Jenkins CI/CD"],
  },
];

export const projects = [
  {
    title: "SiteKavach",
    text: "A website security assessment tool that grades email authentication, TLS, security headers and DNS, and explains each fix in plain language. FastAPI and React, with SSRF protection and rate limiting.",
    tags: ["Python", "FastAPI", "React"],
    link: null, // set to "https://scan.kamalvasvani.com" once it's live
  },
  {
    title: "Container image vulnerability scanner",
    text: "Scans container images for known vulnerabilities and produces readable remediation reports.",
    tags: ["Docker", "Vulnerability management"],
    link: null,
  },
  {
    title: "Kubernetes delivery pipeline on AWS EKS",
    text: "Containerised application built with Jenkins, deployed to EKS with Helm, monitored in CloudWatch with SNS alerting.",
    tags: ["EKS", "Helm", "Jenkins"],
    link: null,
  },
  {
    title: "Infrastructure as code on AWS",
    text: "Terraform provisions network and compute; Ansible configures and deploys the application stack.",
    tags: ["Terraform", "Ansible"],
    link: null,
  },
];

export const education = [
  { degree: "Bachelor of Computer Applications", school: "Indira Gandhi National Open University", period: "2012 – 2016" },
];
