const jobListings = [
  {
    companyName: "Tech Innovators Inc.",
    companyType: "Software Development",
    role: "Full-Stack Developer",
    jobType: "Freelancer",
    companyDescription:
      "A leading software company specializing in AI-driven applications.",
    requirements: ["JavaScript", "React.js", "Node.js"],
    publishedDate: "2025-02-21",
    imageUrl:
      "https://i.guim.co.uk/img/media/231cf25e242ae4afbab1c465d5bbfb45623def16/0_0_5472_3283/master/5472.jpg?width=465&dpr=1&s=none&crop=none",
  },
  {
    companyName: "Cloud Solutions Ltd.",
    companyType: "Cloud Computing",
    role: "Cloud Engineer",
    jobType: "Freelancer",
    companyDescription:
      "Providing top-tier cloud solutions for enterprises worldwide.",
    requirements: ["AWS", "Docker", "Kubernetes"],
    publishedDate: "2025-02-20",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2tqZHleYp3h1sDXCF2qDBMcK1vkFpcv-wg&s",
  },
  {
    companyName: "CyberSecure Inc.",
    companyType: "Cybersecurity",
    role: "Security Analyst",
    jobType: "Freelancer",
    companyDescription:
      "Enhancing cybersecurity for businesses with innovative security solutions.",
    requirements: ["Penetration Testing", "SIEM", "Python"],
    publishedDate: "2025-02-19",
    imageUrl:
      "https://www.roberthalf.com/content/dam/roberthalf/images/blogs/us/en/migrated-blogs/hr1/shutterstock_412257712-2.jpg",
  },
  {
    companyName: "AI Revolution Co.",
    companyType: "Artificial Intelligence",
    role: "AI/ML Engineer",
    jobType: "Freelancer",
    companyDescription:
      "Pioneering artificial intelligence solutions for various industries.",
    requirements: ["Python", "TensorFlow", "Deep Learning"],
    publishedDate: "2025-02-18",
    imageUrl: "https://example.com/images/ai.jpg",
  },
  {
    companyName: "Data Insights LLC",
    companyType: "Data Analytics",
    role: "Data Scientist",
    jobType: "Freelancer",
    companyDescription:
      "Helping businesses make data-driven decisions through advanced analytics.",
    requirements: ["SQL", "Machine Learning", "Power BI"],
    publishedDate: "2025-02-17",
    imageUrl: "https://example.com/images/data.jpg",
  },
  {
    companyName: "DevOps Masters",
    companyType: "IT Services",
    role: "DevOps Engineer",
    jobType: "Freelancer",
    companyDescription:
      "Bridging the gap between development and operations for seamless deployments.",
    requirements: ["CI/CD", "Terraform", "Jenkins"],
    publishedDate: "2025-02-16",
    imageUrl: "https://example.com/images/devops.jpg",
  },
  {
    companyName: "UI/UX Pro",
    companyType: "Design Studio",
    role: "UI/UX Designer",
    jobType: "Freelancer",
    companyDescription:
      "Crafting intuitive and aesthetically pleasing user experiences.",
    requirements: ["Figma", "Adobe XD", "User Research"],
    publishedDate: "2025-02-15",
    imageUrl: "https://example.com/images/uiux.jpg",
  },
  {
    companyName: "Mobile First Co.",
    companyType: "Mobile App Development",
    role: "Mobile App Developer",
    jobType: "Freelancer",
    companyDescription:
      "Building cutting-edge mobile applications for various industries.",
    requirements: ["Flutter", "React Native", "Swift"],
    publishedDate: "2025-02-14",
    imageUrl: "https://example.com/images/mobile.jpg",
  },
  {
    companyName: "Blockchain Innovators",
    companyType: "Blockchain Solutions",
    role: "Blockchain Developer",
    jobType: "Freelancer",
    companyDescription:
      "Developing secure and scalable blockchain applications.",
    requirements: ["Solidity", "Ethereum", "Hyperledger"],
    publishedDate: "2025-02-13",
    imageUrl: "https://example.com/images/blockchain.jpg",
  },
  {
    companyName: "SEO Experts Ltd.",
    companyType: "Digital Marketing",
    role: "SEO Specialist",
    jobType: "Freelancer",
    companyDescription: "Optimizing websites to rank higher in search engines.",
    requirements: ["Google Analytics", "SEO Auditing", "Keyword Research"],
    publishedDate: "2025-02-12",
    imageUrl: "https://example.com/images/seo.jpg",
  },
  {
    companyName: "Content Creators Hub",
    companyType: "Content Marketing",
    role: "Content Writer",
    jobType: "Freelancer",
    companyDescription:
      "Creating engaging and high-quality content for businesses.",
    requirements: ["Copywriting", "SEO Writing", "Content Strategy"],
    publishedDate: "2025-02-11",
    imageUrl: "https://example.com/images/writer.jpg",
  },
  {
    companyName: "E-Commerce Builders",
    companyType: "E-Commerce Solutions",
    role: "Shopify Developer",
    jobType: "Freelancer",
    companyDescription:
      "Building and customizing Shopify stores for online businesses.",
    requirements: ["Shopify Liquid", "JavaScript", "E-Commerce Development"],
    publishedDate: "2025-02-10",
    imageUrl: "https://example.com/images/shopify.jpg",
  },
  {
    companyName: "Blockchain Innovators",
    companyType: "Blockchain Solutions",
    role: "Blockchain Developer",
    jobType: "Freelancer",
    companyDescription:
      "Developing secure and scalable blockchain applications.",
    requirements: ["Solidity", "Ethereum", "Hyperledger"],
    publishedDate: "2025-02-13",
    imageUrl: "https://example.com/images/blockchain.jpg",
  },
  {
    companyName: "SEO Experts Ltd.",
    companyType: "Digital Marketing",
    role: "SEO Specialist",
    jobType: "Freelancer",
    companyDescription: "Optimizing websites to rank higher in search engines.",
    requirements: ["Google Analytics", "SEO Auditing", "Keyword Research"],
    publishedDate: "2025-02-12",
    imageUrl: "https://example.com/images/seo.jpg",
  },
  {
    companyName: "Software Giants",
    companyType: "Enterprise Solutions",
    role: "Software Engineer",
    jobType: "Job Seeker",
    companyDescription:
      "Delivering enterprise software solutions for global businesses.",
    requirements: ["Java", "Spring Boot", "Microservices"],
    publishedDate: "2025-02-11",
    imageUrl: "https://example.com/images/software.jpg",
  },
  {
    companyName: "E-Commerce Solutions",
    companyType: "E-Commerce",
    role: "Shopify Developer",
    jobType: "Freelancer",
    companyDescription: "Building custom Shopify stores for online retailers.",
    requirements: ["Shopify", "Liquid", "JavaScript"],
    publishedDate: "2025-02-10",
    imageUrl: "https://example.com/images/shopify.jpg",
  },
];

export default jobListings;
