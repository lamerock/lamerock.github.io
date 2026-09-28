import facultySystemImage from '../assets/projects/faculty-system-placeholder.svg';
import riceIrrigationImage from '../assets/projects/rice-irrigation-placeholder.svg';
import dryingSystemImage from '../assets/projects/drying-system-placeholder.svg';

export const profile = {
  name: 'Gerard James Paglingayen',
  role: 'Cybersecurity · Full-Stack & Software Development · IT Project Delivery',
  valueProposition: 'Building secure software, connected systems, and practical technology solutions.',
  eyebrow: 'Cybersecurity · Full-Stack & Software Development · IT Project Delivery',
  lead:
    'I work across cybersecurity, data privacy, full-stack and software development, information systems, IT operations, and technology project delivery.',
  summary:
    'Technology professional with extensive higher-education experience and hands-on work across cybersecurity, data privacy, full-stack and software development, information systems, IT operations, technical training, and institutional technology leadership. Recent commissioned work includes a PHP/MySQL requirements-management platform with application-security hardening, Android/TensorFlow Lite mobile machine learning, and Arduino-based IoT automation. Former Data Protection Officer and Management Information Systems Director with experience in privacy compliance, incident coordination, risk assessment, ICT planning, stakeholder management, and technology project delivery. Continues technical development through commissioned projects, research, certifications, and 2025–2026 training in cybersecurity and modern web development.',
  location: 'Antique, Philippines',
  email: 'gjpaglingayen@gmail.com',
  github: 'https://github.com/lamerock',
  linkedin: 'https://www.linkedin.com/in/gjpaglingayen',
  availability:
    'Open to software development, cybersecurity, IT, and technology project opportunities.',
} as const;

export const highlights = [
  'Extensive higher-education technology experience',
  'Recent commissioned full-stack, AI/ML & IoT work',
  'Former Data Protection Officer & MIS Director',
] as const;

export const experience = [
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'Instructor, Computer Engineering',
    dates: 'July 2009 – June 2025',
    kind: 'Primary role',
    bullets: [
      'Developed and delivered courses in programming, software engineering, web development, embedded systems, and cybersecurity.',
      'Mentored capstone and design projects from requirements analysis through development, testing, and deployment.',
      'Integrated Python, C++, C#, PHP, WordPress, and web technologies into instruction, laboratories, assessments, and applied projects.',
      'Implemented hands-on activities and real-world projects to strengthen technical, problem-solving, and industry-readiness skills.',
      'Contributed to curriculum development and faculty initiatives aligned with current computing and IT practices.',
    ],
    tags: ['Programming', 'Software Engineering', 'Web Development', 'Embedded Systems', 'Cybersecurity'],
  },
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'Data Protection Officer',
    dates: 'June 2019 – February 2022',
    kind: 'Concurrent leadership appointment',
    bullets: [
      'Monitored institutional compliance with the Philippine Data Privacy Act of 2012, its Implementing Rules and Regulations, National Privacy Commission issuances, and other applicable privacy requirements.',
      'Maintained records of personal-data processing operations, reviewed processing activities and compliance measures, and provided privacy and data-protection recommendations.',
      'Reviewed third-party service-provider compliance, security clearances, relevant accreditations or certifications, and Data Sharing Agreement requirements where applicable.',
      'Ensured Privacy Impact Assessments were conducted for relevant activities, projects, programs, systems, and personal-data processing operations.',
      'Coordinated data-breach and security-incident management, including required reports and documentation to the National Privacy Commission within prescribed periods.',
      'Promoted privacy awareness and supported policies, guidelines, projects, and programs using a privacy-by-design approach; served as institutional contact for data subjects and authorities.',
    ],
    tags: ['Data Privacy', 'Risk Assessment', 'Incident Response', 'Privacy Impact Assessment', 'Compliance'],
  },
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'OIC-Director / Director, Management Information Systems',
    dates: 'August 2017 – February 2019',
    kind: 'Concurrent leadership appointment',
    bullets: [
      'Formulated plans and policies for effective and efficient use of information and communications technology across the University.',
      'Prepared ICT project proposals for top-management approval and coordinated scheduled implementation.',
      'Organized and coordinated the MIS unit in implementing institutional ICT programs and projects; worked with colleges, departments, and campuses on technology requirements and concerns.',
      'Monitored and evaluated ICT program and project implementation and prepared reports for the University President.',
    ],
    tags: ['MIS', 'ICT Planning', 'Technology Project Delivery', 'Stakeholder Coordination', 'Reporting'],
  },
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'Director, Institutional Planning and Development',
    dates: 'May 2018 – February 2019',
    kind: 'Concurrent leadership appointment',
    bullets: [
      'Assisted the University President in institutional policy-making and planning and coordinated committees across colleges, campuses, and departments on plans and development initiatives.',
      'Coordinated monitoring and evaluation of University programs and projects and consolidated institutional plans and reports for reporting and information retrieval.',
    ],
    tags: ['Strategic Planning', 'Monitoring & Evaluation', 'Stakeholder Coordination'],
  },
  {
    organization: 'Department of Information and Communications Technology (DICT)',
    location: 'Philippines · Remote',
    role: 'Trainer – Government Web Template',
    dates: 'August 2021 – September 2021',
    kind: 'Contract engagement',
    bullets: [
      'Delivered hands-on training on Government Web Template implementation, web accessibility, website planning, content structuring, menu creation, plugin installation, and template customization.',
      'Conducted workshops on hosting, cPanel, website deployment, backups, security practices, and SEO fundamentals, supporting secure and accessible government websites.',
    ],
    tags: ['Web Accessibility', 'Deployment', 'Security', 'SEO', 'Technical Training'],
  },
  {
    organization: 'Department of Information and Communications Technology (DICT)',
    location: 'Philippines · Remote',
    role: 'Resource Person – Python Programming Essentials',
    dates: 'July 2021',
    kind: 'Contract engagement',
    bullets: [
      'Conducted intensive Python workshops covering environment setup, debugging, data structures, clean code, application development, and object-oriented programming.',
      'Guided participants in designing modular applications through hands-on exercises and mentoring aligned with digital-transformation initiatives.',
    ],
    tags: ['Python', 'Object-Oriented Programming', 'Clean Code', 'Technical Training'],
  },
] as const;

export const skillGroups = [
  {
    title: 'Programming & Scripting',
    items: ['Python', 'C++', 'C#', 'PHP', 'Java', 'Kotlin', 'JavaScript', 'PowerShell'],
  },
  {
    title: 'Full-Stack & Web',
    items: ['PHP', 'MySQL', 'Laravel', 'React', 'Next.js', 'Flask', 'Bootstrap', 'WordPress', 'HTML', 'CSS'],
  },
  {
    title: 'Cybersecurity & Application Security',
    items: [
      'Application Security',
      'Data Privacy',
      'Information Security',
      'Risk Assessment',
      'Incident Response',
      'CSRF Protection',
      'Request Validation',
      'Authentication & Session Management',
      'ISO/IEC 27001',
    ],
  },
  {
    title: 'Development Workflow',
    items: ['Git', 'GitHub', 'GitHub Projects', 'Kanban Workflow', 'Task Tracking'],
  },
  {
    title: 'Mobile, ML & IoT',
    items: ['Android SDK', 'TensorFlow', 'Keras', 'TensorFlow Lite', 'OkHttp', 'Arduino', 'Raspberry Pi', 'MongoDB', 'YOLOv5', 'YOLOv8'],
  },
  {
    title: 'IT & Project Delivery',
    items: [
      'Information Systems',
      'IT Operations',
      'Systems Management',
      'Digital Governance',
      'Strategic Planning',
      'Process Improvement',
      'Stakeholder Coordination',
      'IT Project Management',
      'Technology Project Delivery',
    ],
  },
] as const;

export const projects = [
  {
    title: 'Faculty Document Submission & Requirements Management System',
    year: '2025',
    role: 'Developer / Programmer · Full-Stack PHP Developer / Application Security',
    description:
      'A PHP/MySQL web application for faculty document submission, requirements tracking, profiles, notifications, and administrative approvals. I developed and maintained the application and hardened it through standardized CSRF protection, centralized request validation, secure session workflows, and protection of state-changing POST operations.',
    contribution:
      'Security auditing and functional testing used PHP linting, PowerShell HTTP requests, authenticated-session testing, and CSRF enforcement verification.',
    focus: ['Requirements management', 'Application-security hardening', 'Authenticated-session testing'],
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'PowerShell', 'Application Security'],
    image: facultySystemImage,
    imageAlt: 'Placeholder preview for the Faculty Document Submission and Requirements Management System',
    outcome: 'Verified deployment, usage, and measurable impact details to be added.',
    repositoryUrl: null as string | null,
    demoUrl: null as string | null,
    videoUrl: null as string | null,
  },
  {
    title: 'Automated Agricultural Drying & Monitoring System',
    year: '2025',
    role: 'Developer / Programmer · Embedded Systems / IoT Developer',
    description:
      'An embedded automation system integrating temperature/humidity sensing, load-cell weight measurement, real-time clock, LCD, GSM communications, and relay-controlled ventilation. I implemented humidity-based fan control, moisture-content calculations, state-based process control, automatic shutdown, and SMS reporting.',
    contribution:
      'The implementation combined sensing, process control, automatic shutdown, and GSM-based status reporting in an Arduino/C++ automation workflow.',
    focus: ['Sensor integration', 'State-based process control', 'Automatic shutdown & SMS reporting'],
    technologies: ['Arduino', 'C++', 'DHT22', 'HX711', 'Load Cell', 'DS3231 RTC', 'GSM', 'I2C', 'Relay Control'],
    image: dryingSystemImage,
    imageAlt: 'Placeholder preview for the automated agricultural drying and monitoring system',
    outcome: 'Verified deployment context and measured operational results to be added.',
    repositoryUrl: null as string | null,
    demoUrl: null as string | null,
    videoUrl: null as string | null,
  },
  {
    title: 'AI-Powered Rice Leaf Nutrient Assessment & Smart Irrigation System',
    year: '2024',
    role: 'Developer / Programmer · Mobile / Machine Learning / IoT Developer',
    description:
      'A mobile machine-learning and IoT system using a TensorFlow/Keras CNN to identify four rice leaf nutrient-deficiency levels. I deployed the trained model to Android with TensorFlow Lite for on-device classification and integrated the Kotlin app with an Arduino Uno R4 WiFi over HTTP for automated irrigation control.',
    contribution:
      'The implementation connected image preprocessing, CNN training and validation, on-device inference, and HTTP-based irrigation control.',
    focus: ['CNN image classification', 'TensorFlow Lite on-device inference', 'HTTP-based irrigation control'],
    technologies: ['Kotlin', 'Android SDK', 'Python', 'TensorFlow', 'Keras', 'TensorFlow Lite', 'OkHttp', 'Arduino', 'IoT'],
    image: riceIrrigationImage,
    imageAlt: 'Placeholder preview for the AI-powered rice leaf nutrient assessment and smart irrigation project',
    outcome: 'Verified model evaluation, deployment, and operational metrics to be added.',
    repositoryUrl: null as string | null,
    demoUrl: null as string | null,
    videoUrl: null as string | null,
  },
] as const;

export const research = [
  {
    title: 'Real-Time Automated Hand-Vote Counting System',
    publication: 'InnoCon Publishing',
    date: 'July 19, 2025',
    detail:
      'Computer-vision research using Raspberry Pi and YOLOv5/YOLOv8 nano models for automated raised-hand detection and real-time vote counting; reported 82.6% mean average precision at IoU 0.50:0.95.',
    reference: 'DOI: 10.69478/BEST2025v1n2a031',
    url: null as string | null,
  },
  {
    title: 'AIDeM: Artificial Intelligence-based Dengue Mosquito Catching Device',
    publication: 'InnoCon Publishing',
    date: 'July 19, 2025',
    detail:
      'Applied YOLOv8 on Raspberry Pi with MongoDB-based data storage in an AI-assisted mosquito-catching and monitoring device.',
    reference: 'DOI: 10.69478/BEST2025v1n2a032',
    url: null as string | null,
  },
  {
    title: 'Deep Learning Application of Automated Facemask Classification and Physical-Distancing Detection',
    publication: 'IEEE',
    date: 'December 28, 2021',
    detail: 'Publication is part of the professional record; additional public abstract or project details are not provided in the CV.',
    reference: 'Publication link pending',
    url: null as string | null,
  },
  {
    title: 'Real-Time Flood Water Level Monitoring and Warning System',
    publication: 'Patent',
    date: 'Issued March 28, 2020',
    detail: 'Patent No. 1/2020/050326.',
    reference: 'Public patent record link pending',
    url: null as string | null,
  },
] as const;

export const education = [
  {
    qualification: 'Master of Engineering, Major in Computer Engineering',
    status: 'Academic Requirements Completed',
    institution: 'Western Institute of Technology',
    location: 'Iloilo City, Iloilo, Philippines',
    dates: '2015–2018',
  },
  {
    qualification: 'Bachelor of Science in Computer Engineering',
    status: null,
    institution: "St. Anthony's College",
    location: 'San Jose, Antique, Philippines',
    dates: '2004–2009',
  },
  {
    qualification: 'Programming in C++ — 36-hour Short Course',
    status: null,
    institution: 'MFI Technological Institute',
    location: 'Pasig City, Philippines',
    dates: '2007',
  },
] as const;

export const certifications = [
  { name: 'Computer Security Incident Handling Level 1', issuer: 'TESDA', year: '2025' },
  { name: 'Programming (Java) NC III', issuer: 'TESDA', year: '2024' },
  { name: 'Certified Data Protection Officer – DPO ACE Level 1', issuer: 'National Privacy Commission', year: '2019' },
  { name: 'Certified Secure Computer User v2', issuer: 'EC-Council', year: '2017' },
  { name: 'Civil Service Professional', issuer: 'Civil Service Commission', year: '2009' },
] as const;

export const professionalDevelopment = [
  'Data Privacy Awareness — DICT · 2026',
  'Next.js App Router Fundamentals — Vercel · 2026',
  'Python Web Development with Flask Framework — Ground Gurus · 2025',
  'Build Modern Web Applications with Laravel and React — Ground Gurus · 2025',
  'Laravel Fundamentals & Beyond: Laravel Developer’s Core Skills — Ground Gurus · 2025',
  'Web Fundamentals & Front-End Essentials: PHP Core & Object-Oriented Programming — Ground Gurus · 2025',
  'Back-End Web Development 101 — Bayan Academy · 2023',
  'Internal Auditor Training on ISO/IEC 27001:2013 — QRC Assurance and Solutions · 2022',
  'Training of Trainers on Web Development of Web Developers Course — DICT · 2022',
  'Network Planning, Design and Optimization for Outdoor and Indoor Networks — DICT · 2022',
  'Training for Trainers: Foundations of Computer Emergency Response Team Operations — DICT · 2021',
  'Integrated Cybersecurity Management and System — DICT · 2021',
  'Digital Transformation ICT Project Management (Training of Trainers) — DICT · 2021',
  'Digital Governance and Management — DICT · 2021',
  'Cybersecurity Competency Framework — DICT · 2020',
  'Data Driven Governance Workshop — DICT · 2020',
  'Government Web Template Training for Trainers — DICT · 2019',
] as const;
