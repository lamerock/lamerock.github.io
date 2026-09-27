export const profile = {
  name: 'Gerard James Paglingayen',
  role: 'Cybersecurity & Full-Stack Technology Professional',
  eyebrow: 'Technology Professional · Cybersecurity · Software Development',
  lead:
    'I build and secure software and connected systems across web development, machine learning, IoT, data privacy, and institutional IT.',
  summary:
    'Technology professional with 15 years of higher-education experience across software development, cybersecurity, data privacy, IT operations, technical training, and institutional technology leadership. My work combines hands-on development of web, mobile, machine-learning, and IoT systems with experience in application security, technology project delivery, compliance, planning, and stakeholder coordination.',
  location: 'Antique, Philippines',
  email: 'gjpaglingayen@gmail.com',
  github: 'https://github.com/lamerock',
  linkedin: 'https://www.linkedin.com/in/gjpaglingayen',
  availability:
    'Open to software development, cybersecurity, IT, and technology project opportunities.',
} as const;

export const highlights = [
  '15 years in higher-education technology',
  'Full-stack development & application security',
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
      'Developed and delivered instruction in programming, software engineering, web development, embedded systems, and cybersecurity.',
      'Guided capstone and engineering-design projects through requirements analysis, development, testing, and deployment.',
      'Applied Python, C++, C#, PHP, WordPress, and web technologies across laboratories, assessments, and hands-on technical projects.',
      'Designed practical activities and real-world projects to strengthen technical problem-solving and industry-readiness skills.',
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
      'Monitored institutional compliance with the Philippine Data Privacy Act, implementing regulations, National Privacy Commission issuances, and related requirements.',
      'Maintained records of personal-data processing operations and reviewed processing activities and compliance controls.',
      'Reviewed third-party providers, security clearances, certifications, and requirements for Data Sharing Agreements.',
      'Ensured Privacy Impact Assessments were conducted for relevant projects, systems, programs, and processing activities.',
      'Coordinated breach and security-incident management, including regulatory reports and documentation.',
      'Supported privacy-by-design through awareness activities and development and review of policies, guidelines, projects, and programs.',
    ],
    tags: ['Data Privacy', 'Risk Assessment', 'Incident Response', 'Privacy Impact Assessment', 'Compliance'],
  },
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'Director / OIC-Director, Management Information Systems',
    dates: 'August 2017 – February 2019',
    kind: 'Concurrent leadership appointment',
    bullets: [
      'Developed institutional plans and policies for effective use of information and communications technology.',
      'Prepared ICT project proposals for executive approval and coordinated implementation schedules.',
      'Organized and coordinated the MIS unit in delivering institutional ICT programs and projects.',
      'Worked with colleges, departments, and campuses to identify and address ICT requirements and project needs.',
      'Monitored ICT program and project implementation and prepared reports for university leadership.',
    ],
    tags: ['MIS', 'ICT Planning', 'Project Delivery', 'Stakeholder Coordination', 'Reporting'],
  },
  {
    organization: 'University of Antique',
    location: 'Sibalom, Antique, Philippines',
    role: 'Director, Institutional Planning and Development',
    dates: 'May 2018 – February 2019',
    kind: 'Concurrent leadership appointment',
    bullets: [
      'Supported university leadership in institutional policy-making and planning.',
      'Coordinated planning activities across colleges, campuses, departments, and institutional committees.',
      'Coordinated monitoring and evaluation of university programs and projects.',
      'Consolidated institutional plans, reports, programs, projects, and activities to support reporting and information retrieval.',
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
      'Delivered hands-on training in Government Web Template implementation, accessibility, website planning, content organization, menu creation, plugins, and template customization.',
      'Conducted workshops covering hosting, cPanel, deployment, backups, website security practices, and SEO fundamentals.',
      'Supported government digital-capability development around secure, accessible, citizen-centered websites.',
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
      'Delivered intensive Python workshops covering development environments, debugging, data structures, clean code, and application development.',
      'Introduced object-oriented programming and guided participants in designing modular applications through hands-on exercises.',
      'Supported ICT capacity-building initiatives through practical Python training.',
    ],
    tags: ['Python', 'Object-Oriented Programming', 'Clean Code', 'Technical Training'],
  },
] as const;

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C++', 'C#', 'PHP', 'Java', 'Kotlin', 'JavaScript', 'PowerShell'],
  },
  {
    title: 'Web & Full-Stack',
    items: ['PHP', 'Laravel', 'React', 'Next.js', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'WordPress'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Cybersecurity & Data Privacy',
    items: [
      'Application Security',
      'Information Security',
      'Data Privacy',
      'Data Protection',
      'Risk Assessment',
      'Incident Response',
      'CSRF Protection',
      'Request Validation',
      'Authentication & Session Management',
      'ISO/IEC 27001',
    ],
  },
  {
    title: 'Mobile, AI & Computer Vision',
    items: ['Android SDK', 'Kotlin', 'TensorFlow', 'Keras', 'TensorFlow Lite', 'OkHttp', 'YOLOv5', 'YOLOv8', 'CNN', 'Computer Vision'],
  },
  {
    title: 'Embedded Systems & IoT',
    items: ['Arduino', 'Raspberry Pi', 'Embedded Systems', 'Sensor Integration', 'HTTP Device Integration', 'Relay Control', 'Process Automation'],
  },
  {
    title: 'Development & Collaboration',
    items: ['Git', 'GitHub', 'GitHub Projects', 'Kanban', 'Task Tracking'],
  },
  {
    title: 'IT & Technology Delivery',
    items: ['Information Systems', 'IT Operations', 'Systems Management', 'Digital Governance', 'Strategic Planning', 'Process Improvement', 'Stakeholder Coordination', 'Technology Project Delivery'],
  },
] as const;

export const projects = [
  {
    title: 'Faculty Document Submission & Requirements Management System',
    year: '2025',
    role: 'Developer / Programmer · Full-Stack PHP Developer / Application Security',
    description:
      'A PHP/MySQL web application for faculty document submission, requirements tracking, user profiles, notifications, and administrative approvals. I developed and maintained the application while strengthening its security through standardized CSRF protection, centralized request validation, secure session workflows, and protection of state-changing operations.',
    contribution:
      'Security and functional testing included PHP linting, PowerShell-based HTTP requests, authenticated-session testing, and verification of CSRF enforcement.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'PowerShell', 'Application Security'],
    image: '/images/projects/faculty-system-placeholder.svg',
    imageAlt: 'Placeholder preview for the Faculty Document Submission and Requirements Management System',
    outcome: 'Verified deployment, usage, and measurable impact details to be added.',
    repositoryUrl: null as string | null,
    demoUrl: null as string | null,
    videoUrl: null as string | null,
  },
  {
    title: 'AI-Powered Rice Leaf Nutrient Assessment & Smart Irrigation System',
    year: '2024',
    role: 'Developer / Programmer · Mobile / Machine Learning / IoT Developer',
    description:
      'An AI-assisted mobile and IoT system that classifies rice-leaf nutrient deficiency and uses the classification result to control irrigation hardware. I developed a TensorFlow/Keras CNN for four nutrient-deficiency levels, deployed the model to Android using TensorFlow Lite, and integrated the Kotlin application with an Arduino Uno R4 WiFi for automated relay-controlled irrigation.',
    contribution:
      'The implementation connected on-device image classification with HTTP-based control of relay-connected irrigation pumps.',
    technologies: ['Kotlin', 'Android SDK', 'Python', 'TensorFlow', 'TensorFlow Lite', 'Arduino', 'IoT'],
    image: '/images/projects/rice-irrigation-placeholder.svg',
    imageAlt: 'Placeholder preview for the AI-powered rice leaf nutrient assessment and smart irrigation project',
    outcome: 'Verified model evaluation, deployment, and operational metrics to be added.',
    repositoryUrl: null as string | null,
    demoUrl: null as string | null,
    videoUrl: null as string | null,
  },
  {
    title: 'Automated Agricultural Drying & Monitoring System',
    year: '2025',
    role: 'Developer / Programmer · Embedded Systems / IoT Developer',
    description:
      'An embedded agricultural process-automation system combining environmental sensing, load-cell weight measurement, real-time monitoring, relay-controlled ventilation, and GSM communication. I implemented humidity-based fan control, moisture-content calculations, and a state-based workflow that detects target moisture levels, completes a timed final drying cycle, shuts the system down, and sends process information by SMS.',
    contribution:
      'The system integrated dual temperature/humidity sensors, load-cell measurement, a real-time clock, LCD interface, GSM communications, and relay-controlled ventilation.',
    technologies: ['Arduino', 'C++', 'DHT22', 'HX711', 'DS3231 RTC', 'GSM', 'I2C', 'Process Automation'],
    image: '/images/projects/drying-system-placeholder.svg',
    imageAlt: 'Placeholder preview for the automated agricultural drying and monitoring system',
    outcome: 'Verified deployment context and measured operational results to be added.',
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
    publication: 'Institute of Electrical and Electronics Engineers (IEEE)',
    date: 'December 28, 2021',
    detail: 'Publication listed in the CV; additional public abstract or project details are not provided there.',
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
    qualification: 'Programming in C++ – 36-hour Short Course',
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
  'Laravel Fundamentals & Beyond — Ground Gurus · 2025',
  'Web Fundamentals & Front-End Essentials: PHP Core & Object-Oriented Programming — Ground Gurus · 2025',
  'Internal Auditor Training on ISO/IEC 27001:2013 — QRC Assurance and Solutions · 2022',
  'Digital Transformation ICT Project Management (Training of Trainers) — DICT · 2021',
  'Foundations of Computer Emergency Response Team Operations (Training for Trainers) — DICT · 2021',
  'Digital Governance and Management — DICT · 2021',
] as const;
