import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights and predictive analytics',
    longDescription: 'A comprehensive analytics dashboard built with Python and React that processes real-time data streams, applies machine learning algorithms for predictive analytics, and presents insights through interactive visualizations. Features include automated report generation, anomaly detection, and custom KPI tracking with advanced filtering capabilities.',
    category: 'AI Tools',
    technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'Docker', 'Redis'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    featured: true
  },
  {
    id: '2',
    title: 'DeepFake Detection Tool',
    description: 'Enterprise-grade AI-powered deepfake detection and response platform for real-time media integrity and threat mitigation.',
    longDescription: 'Cutting-edge media integrity solution that automatically detects, analyzes, and responds to deepfake threats in real-time. Seamlessly integrates with existing security and content verification systems, offers intelligent alerting, and features automated response workflows powered by machine learning-based deepfake classification.',
    category: 'Cybersecurity',
    technologies: ['Python', 'Deepsearch', 'InceptionV3', 'ML', 'Azure', 'OpenCV'],
    image: '/my-portfolio-blog/images/deepfake.jpeg',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'Intelligent Business Intelligence Suite',
    description: 'Complete BI solution with AI-driven insights and interactive dashboards',
    longDescription: 'Full-featured business intelligence platform that connects to multiple data sources, transforms data through advanced ETL pipelines, and delivers actionable insights through interactive dashboards and automated reports. Built with modern data stack technologies and AI-powered recommendations.',
    category: 'Web Apps',
    technologies: ['Power BI', 'SQL Server', 'Python', 'Azure', 'DAX', 'Tableau'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: 'https://demo.example.com',
    featured: true
  },
  {
    id: '4',
    title: 'Smart Workflow Automation Platform',
    description: 'n8n-based intelligent automation for complex business processes',
    longDescription: 'Advanced workflow automation platform built on n8n that streamlines complex business processes, integrates with 200+ SaaS tools, and provides visual workflow building with AI-assisted optimization. Features custom nodes, advanced scheduling, and intelligent error handling.',
    category: 'Automation',
    technologies: ['n8n', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '5',
    title: 'AI-Resume Analyzer',
    description: 'AI-powered resume analysis and optimization for better job matching and candidate screening.',
    longDescription: 'An advanced AI-based resume analysis platform designed to extract, evaluate, and score resumes using natural language processing and machine learning. Offers real-time insights on candidate fit, skill gaps, and keyword optimization. Includes dynamic dashboards, customizable job role matching, and automated reports to streamline recruitment and enhance hiring efficiency.',
    category: 'AI Tools',
    technologies: ['React', 'Python', 'Node.js ', 'Resumey.Py', 'Chart.js', 'PDFMiner '],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    featured: false
  },
  {
    id: '6',
    title: 'Advanced Penetration Testing Toolkit',
    description: 'Custom security assessment tools with automated vulnerability analysis',
    longDescription: 'Comprehensive penetration testing toolkit with custom-built tools for security assessment, automated vulnerability scanning, and intelligent reporting. Includes modules for web application testing, network analysis, and social engineering assessments with AI-powered threat modeling.',
    category: 'Cybersecurity',
    technologies: ['Python', 'Bash', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux'],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '7',
    title: 'Cyber Attack Dashboard',
    description: 'Enterprise-grade AI-powered deepfake detection and cyber attack response platform with real-time media integrity monitoring and dynamic threat visualization dashboard.',
    longDescription: 'A cutting-edge media integrity and cybersecurity platform that automatically detects, analyzes, and responds to deepfake threats and broader cyber attacks in real-time. Features a powerful dashboard for visualizing attack vectors, threat patterns, and deepfake incidents. Seamlessly integrates with existing security and content verification systems, offers intelligent alerting, and enables automated incident response through machine learning-based threat classification and anomaly detection.',
    category: 'Cybersecurity',
    technologies: ['Node.js', 'Python ', 'React.js', 'ML', 'Chart.js', 'WebSockets'],
    image: 'src/components/images/cyberattack.jpeg',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '8',
    title: 'Social Media Bot Detection',
    description: 'Enterprise-grade AI-powered platform for detecting and mitigating social media bots in real-time.',
    longDescription: 'A cutting-edge AI-driven platform that automatically detects, analyzes, and mitigates malicious bots on social media platforms in real-time. Leverages machine learning, behavior analysis, and network intelligence to identify inauthentic activity, fake engagements, and coordinated manipulation. Integrates seamlessly with social media monitoring tools and includes intelligent alerting, real-time dashboards, and automated incident response workflows for enterprise-grade media integrity and threat defense.',
    category: 'Cybersecurity',
    technologies: ['Python', 'BeautifulSoup', 'TensorFlow', 'scikit-learn', 'Leaflet.js', 'spaCy'],
    image: 'src/components/images/botimg.webp',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '9',
    title: 'AI Interview Helper',
    description: 'AI-powered interview assistant for real-time candidate evaluation, question generation, and behavioral analysis.',
    longDescription: 'An intelligent interview support platform that leverages natural language processing and machine learning to assist interviewers in real-time. Features include dynamic question generation, candidate sentiment analysis, automated scoring, and detailed feedback reports. Built with Python and React, the system provides live behavioral insights, response quality tracking, and smart recommendations to streamline and enhance the interview process.',
    category: 'AI Tools',
    technologies: ['Python', 'spaCy', 'TensorFlow', 'scikit-learn', 'WebSockets', 'PyTorch', 'OpenAI GPT'],
    image: 'src/components/images/aiinterview.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    featured: true
  }
];