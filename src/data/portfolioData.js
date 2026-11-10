export const portfolioData = {
  siteMetadata: {
    title: 'Ayon Roy | Ph.D. Candidate & AI Researcher',
    siteUrl: 'https://www.ayonroy.com',
    description:
      'Ayon Roy is a Ph.D. candidate in Computer Science at UT Arlington specializing in machine learning, multimodal data analysis, and agentic AI systems.',
    siteKeywords:
      'Ayon Roy, royayon, Ph.D. candidate, UT Arlington, UTA, machine learning, deep learning, AI researcher, multi-modal, agentic AI, computer science, software engineer',
    name: 'Ayon Roy',
    location: 'Arlington, TX, USA',
    email: 'royshouhag@gmail.com',
    phone: '682-405-5280',
    github: 'https://github.com/royayon',
    linkedin: 'https://www.linkedin.com/in/royayon',
    scholar: 'https://scholar.google.com/citations?user=EXovW5IAAAAJ&hl=en',
    twitterHandle: '@helloAyon',
  },

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/royayon',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/royayon',
      icon: 'linkedin',
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=EXovW5IAAAAJ&hl=en',
      icon: 'scholar',
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/royayon',
      icon: 'codepen',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shouhag',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/helloAyon',
      icon: 'twitter',
    },
  ],

  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Publications', url: '/#publications' },
    { name: 'Contact', url: '/#contact' },
  ],

  hero: {
    overline: 'Hi, my name is',
    name: 'Ayon Roy.',
    subtitle: 'I build intelligent & agentic AI systems.',
    description:
      'I am a Ph.D. candidate in Computer Science at the University of Texas at Arlington with 3+ years of research experience in machine learning and multi-modal data analysis, and 2+ years in full-stack software development. Passionate about advancing Generative AI, human-computer interaction, and intelligent systems to address real-world challenges.',
    ctaText: 'Check out my work!',
  },

  about: {
    title: 'About Me',
    paragraphs: [
      "Hello! I'm Ayon, a Ph.D. Candidate in Computer Science at the University of Texas at Arlington. My research centers around machine learning, self-supervised representation learning from multi-modal vision data (images, EEG, EDA, LiDAR), and cognitive state assessment.",
      'Before starting my doctoral journey at UTA, I earned my B.Sc. in Computer Science and Engineering from the Military Institute of Science and Technology (MIST) in 2020. I also gained strong industry experience as a Data Analytics Intern at Trinity Industries, a Full Stack Developer at Techzu, and a Machine Learning Engineer at NetraDigital, building predictive ML pipelines, scalable full-stack backends, and intelligent automated workflows.',
      "Today, I'm passionate about developing Generative AI, agentic workflows, and assistive technologies that bridge the gap between human cognition and intelligent machines. Here are some of the technologies I've been working with recently:",
    ],
    skills: [
      'Python & PyTorch',
      'Databricks & MLflow',
      'LLMs, Ollama & Agentic AI (n8n)',
      'CatBoost & Ensemble Learning',
      'TensorFlow & Scikit-learn',
      'Next.js, React & TypeScript',
      'Multi-modal Vision (EEG, EDA, LiDAR)',
      'Node.js & Django',
      'PostgreSQL, MongoDB & DynamoDB',
      'Docker, Kubernetes & Git',
    ],
    image: '/images/headshot.png',
  },

  jobs: [
    {
      title: 'Graduate Research & Teaching Assistant',
      company: 'UT Arlington',
      location: 'Arlington, TX, USA',
      range: 'Aug 2023 – Present',
      url: 'https://www.uta.edu/',
      duties: [
        'Conducting research on self-supervised representation learning from multi-modal vision data including images, EEG, EDA, and LiDAR.',
        'Developed a Residual Graph Convolutional Network (ResGCN) to detect cognitive fatigue levels from human gait cycle data reflecting walking patterns.',
        'Graduate Teaching Assistant for intermediate C, Java, and Object-Oriented Programming (OOP) courses.',
      ],
    },
    {
      title: 'Data Analytics Intern',
      company: 'Trinity Industries',
      location: 'Dallas, TX, USA',
      range: 'May 2026 – July 2026',
      url: 'https://www.trin.net/',
      duties: [
        'Built and deployed an end-to-end LLM + ML system that automated multi-output repair-cost classification, pairing Claude Sonnet clause extraction over 1,292 OCR-parsed lease contracts with a CatBoost ensemble trained on 4M+ records, deployed to a Databricks/MLflow serving endpoint that scored 62,715 line items and replaced manual analyst review.',
        'Built and optimized a 4-model ensemble forecasting railcar out-dates on Databricks, engineering 60+ features and combining KMeans segmentation (automated k via knee detection), CatBoost classifiers, and per-cluster random forests that return prediction intervals, routing each car to its best-fit sub-model for daily confidence-bounded forecasts used by shop operations.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Techzu',
      location: 'Singapore',
      range: 'Oct 2021 – July 2023',
      url: 'https://www.techzu.co/',
      duties: [
        'Built data-driven solutions with React and React Native apps along with MongoDB, helping users access cross-platform responsive features.',
        'Developed full-stack projects using Django and PostgreSQL, making it easier to manage and store user data securely.',
      ],
    },
    {
      title: 'Machine Learning Engineer (Part-Time)',
      company: 'NetraDigital',
      location: 'Toronto, Canada',
      range: 'Sep 2021 – Feb 2022',
      url: 'https://netradigital.com/',
      duties: [
        'Developed ML and RL based models to determine risk factors in projects, which helped the team catch potential issues early and plan better.',
        'Built an automated workload management pipeline, making task assignments faster and helping the team stay on top of priorities.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Grameenphone',
      location: 'Dhaka, Bangladesh',
      range: 'Dec 2019 – Jan 2020',
      url: 'https://www.grameenphone.com/',
      duties: [
        'Gained hands-on development experience on GP consumer applications (Bioscope, MyGP App).',
        'Worked with enterprise server infrastructure, Docker containers, automated application testing, and unit testing.',
      ],
    },
  ],

  featuredProjects: [
    {
      title: 'NoteBookAwesome',
      label: 'Featured Project',
      description:
        'Numbered & nameable cell headers, a color-coded cell navigator, and custom run sequences for Jupyter notebooks. Jump, search, color-tag, and run cells in any order. Designed for VS Code, Cursor, Windsurf, and all VS Code-compatible editors.',
      tech: ['TypeScript', 'VS Code API', 'Jupyter', 'Node.js', 'Extension'],
      github: 'https://github.com/royayon/NoteBookAwesome',
      external: 'https://github.com/royayon/NoteBookAwesome',
      image: '/images/notebookawesome.png',
    },
    {
      title: 'CurFi: Automated Curve-Fitting Library',
      label: 'Featured Project',
      description:
        'An automated, minimalist npm library and regression analysis engine that discovers the optimal curve and mathematical model (linear, polynomial, exponential, power) for arbitrary datasets. Published in Engineering Reports (Wiley).',
      tech: ['Node.js', 'JavaScript', 'Regression Analysis', 'npm Package', 'Algorithms'],
      github: 'https://github.com/royayon',
      external: 'https://www.npmjs.com/package/curfi',
      image: '/images/demo.png',
    },
    {
      title: 'Cognitive Fatigue Detection via Gait & Biosensors',
      label: 'Featured Project',
      description:
        'Deep learning architecture utilizing Residual Graph Convolutional Networks (ResGCN) to classify cognitive fatigue levels from human gait cycles, complemented by semi-supervised models predicting fatigue from EEG and EDA biosensors with 86% accuracy.',
      tech: ['PyTorch', 'ResGCN', 'Multimodal Vision', 'EEG / EDA Biosignals', 'Python'],
      github: 'https://github.com/royayon',
      external: 'https://doi.org/10.3390/technologies12030038',
      image: '/images/digits.png',
    },
    {
      title: 'AI Study Planner',
      label: 'Featured Project',
      description:
        'An AI-powered academic planning web application for students and educators. Utilizes machine learning to predict academic performance, generate adaptive study schedules, and integrate voice assistance.',
      tech: ['Node.js', 'Express', 'TensorFlow.js', 'Deep Learning', 'Python'],
      github: 'https://github.com/royayon',
      external: 'https://github.com/royayon',
      image: '/images/mistai.png',
    },
  ],

  otherProjects: [
    {
      title: 'Contract Clause Extraction & Repair-Cost Classifier',
      description:
        'An enterprise LLM + ML serving pipeline pairing Claude Sonnet clause extraction over 1,292 OCR-parsed lease contracts with a CatBoost ensemble trained on 4M+ records on Databricks/MLflow.',
      tech: ['Databricks', 'MLflow', 'Claude Sonnet', 'CatBoost', 'Python'],
      github: '',
      external: 'https://www.trin.net/',
      year: '2026',
      company: 'Trinity Industries',
    },
    {
      title: 'Custom VCS (AynHUB)',
      description:
        'A custom version control system (VCS) for project management, branch controlling, and commit history tracking in Java using Longest Common Subsequence (LCS) and Diff algorithms.',
      tech: ['Java', 'Algorithms', 'Data Structures', 'VCS'],
      github: 'https://github.com/royayon',
      external: '',
      year: '2021',
      company: 'MIST',
    },
    {
      title: 'ChatGPT vs. Bard Comparative Study',
      description:
        'A comprehensive survey and empirical evaluation of conversational AI technologies, evaluating hallucination rates, transformer architectures, and domain reasoning tasks (Wiley 2024).',
      tech: ['Generative AI', 'LLMs', 'NLP', 'Research'],
      github: '',
      external: 'https://doi.org/10.1002/eng2.12890',
      year: '2024',
      company: 'UTA',
    },
    {
      title: 'TaskTimer',
      description:
        'Desktop task timing and productivity utility with background timers, category metrics, and customizable work intervals.',
      tech: ['JavaScript', 'Electron / Node.js', 'CSS'],
      github: 'https://github.com/royayon/TaskTimer',
      external: '',
      year: '2023',
      company: 'Personal',
    },
    {
      title: 'Digits Recognizer',
      description:
        'Interactive handwritten digit recognition using an HTML Canvas drawing interface and an in-browser deep learning model trained on the MNIST dataset.',
      tech: ['HTML5 Canvas', 'JavaScript', 'TensorFlow.js', 'MNIST'],
      github: 'https://github.com/royayon/digits',
      external: 'https://royayon.github.io/digits/',
      year: '2020',
      company: 'MIST',
    },
    {
      title: 'AlienVasion Game',
      description:
        'Microprogrammed retro arcade space-shooter embedded game designed for ATmega32 with custom pixel rendering and controller inputs.',
      tech: ['ATmega 32', 'Microprogramming', 'C', 'Assembly'],
      github: 'https://github.com/royayon/AlienVasion-Game',
      external: '',
      year: '2019',
      company: 'MIST',
    },
    {
      title: 'AynCalculator',
      description:
        'Android scientific calculator and engineering converter application with real-time cloud data backup and cross-device sync via Firebase.',
      tech: ['Android', 'Java', 'Firebase', 'Mobile'],
      github: 'https://github.com/royayon/AynCalculator',
      external: '',
      year: '2019',
      company: 'MIST',
    },
    {
      title: 'NavDrawerSensor',
      description:
        'Android sensor application integrating hardware proximity, accelerometer, and gyroscope sensors for shake detection and gesture interaction.',
      tech: ['Android', 'Java', 'Hardware Sensors'],
      github: 'https://github.com/royayon/NavDrawerSensor',
      external: '',
      year: '2019',
      company: 'MIST',
    },
    {
      title: 'Wheremi',
      description:
        'Real-time GPS routing and geolocation Android app integrating the Google Maps SDK and Firebase backend for friends location sharing.',
      tech: ['Android', 'Google Maps API', 'Firebase'],
      github: 'https://github.com/royayon/Wheremi',
      external: '',
      year: '2019',
      company: 'MIST',
    },
    {
      title: 'Ayon-Modern-Tutorial-Links',
      description:
        'A widely shared curated repository of modern programming, machine learning, and computer science tutorial links to help aspiring engineers.',
      tech: ['Markdown', 'Open Source', 'Tutorials'],
      github: 'https://github.com/royayon/Ayon-Modern-Tutorial-Links',
      external: '',
      year: '2020',
      company: 'Open Source',
    },
  ],

  publications: [
    {
      title: "ChatGPT versus Bard: A comparative study",
      venue: "Engineering Reports (Wiley), vol. 6, no. 11, e12890",
      year: 2024,
      citations: 139,
      doi: "https://doi.org/10.1002/eng2.12890",
      pdf: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/eng2.12890",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:qjMakFHDy7sC",
      authors: "Imtiaz Ahmed, Mashrafi Alam Kajol, Uzma Hasan, Partha Protim Datta, Ayon Roy, Md. Rokonuzzaman Reza",
      description:
        "An empirical survey comparing ChatGPT and Google Bard (Gemini) architectures, attention mechanisms, evaluation benchmarks, limitations, and ethical considerations.",
    },
    {
      title: "Examining the Landscape of Cognitive Fatigue Detection: A Comprehensive Survey",
      venue: "Technologies (MDPI), vol. 12, no. 3, p. 38",
      year: 2024,
      citations: 88,
      doi: "https://doi.org/10.3390/technologies12030038",
      pdf: "https://www.mdpi.com/2227-7080/12/3/38/pdf",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:2osOgNQ5qMEC",
      authors: "Enamul Karim, Hamza Reza Pavel, Sama Nikanfar, Aref Hebri, Ayon Roy, Harish Ram Nambiappan, Ashish Jaiswal, Glenn R. Wylie, Fillia Makedon",
      description:
        "A comprehensive review classifying multimodal cognitive fatigue detection methods spanning EEG, EDA, eye tracking, and gait analysis in critical human-robot environments.",
    },
    {
      title: "Sentiment Analysis of Bangladesh-specific COVID-19 Tweets using Deep Neural Network",
      venue: "2021 62nd International Scientific Conference on Information Technology and Management Science of Riga Technical University (ITMS), IEEE",
      year: 2021,
      citations: 13,
      doi: "https://doi.org/10.1109/itms52826.2021.9615331",
      pdf: "https://ieeexplore.ieee.org/document/9615331",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:u-x6o8ySG0sC",
      authors: "Muhammad Nazrul Islam, Nazmul Islam Khan, Ayon Roy, Md. Dur-e-Maknun Rahman, Sazzad Hossain Mukta, A. K. M. Najmul Islam",
      description:
        "Investigates public sentiment trends across Bangladesh during the COVID-19 pandemic using deep neural network architectures on location-filtered Twitter datasets.",
    },
    {
      title: "ChatGPT as an Assistive Technology: Enhancing Human-Computer Interaction for People with Speech Impairments",
      venue: "Proceedings of the 17th International Conference on PErvasive Technologies Related to Assistive Environments (PETRA '24), ACM, pp. 314\u2013318",
      year: 2024,
      citations: 11,
      doi: "https://doi.org/10.1145/3652037.3663956",
      pdf: "https://dl.acm.org/doi/pdf/10.1145/3652037.3663956",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:zYLM7Y9cAGgC",
      authors: "Ayon Roy, Enamul Karim, Md Bin Farukee, Fillia Makedon",
      description:
        "Designs and evaluates an intelligent generative conversational framework leveraging LLMs as assistive communication tools for individuals with severe speech impairments.",
    },
    {
      title: "CurFi: An automated tool to find the best regression analysis model using curve fitting",
      venue: "Engineering Reports (Wiley), vol. 4, no. 12, e12522",
      year: 2022,
      citations: 11,
      doi: "https://doi.org/10.1002/eng2.12522",
      pdf: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/eng2.12522",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:d1gkVwhDpl0C",
      authors: "Ayon Roy, Tausif Al Zubayer, Nafisa Tabassum, Muhammad Nazrul Islam, Md. Abdus Sattar",
      description:
        "An automated algorithmic tool evaluating and deploying the best-fit regression model on multidimensional datasets without requiring manual script training.",
    },
    {
      title: "A Deep Learning Approach to Predict Academic Result and Recommend Study Plan for Improving Student\u2019s Academic Performance",
      venue: "Ubiquitous Intelligent Systems (Springer), pp. 253\u2013266",
      year: 2021,
      citations: 10,
      doi: "https://doi.org/10.1007/978-981-16-3675-2_19",
      pdf: "https://link.springer.com/chapter/10.1007/978-981-16-3675-2_19",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:u5HHmVD_uO8C",
      authors: "Ayon Roy, Md. Raqibur Rahman, Muhammad Nazrul Islam, Nafiz Imtiaz Saimon, MAqib Alfaz, Abdullah-Al-Sheak Jaber",
      description:
        "Deep learning framework modeling historical student academic performance to provide personalized study schedules and predictive grade insights.",
    },
    {
      title: "An Adaptive Robotic Framework for Assisting People with Paralysis in Daily Living Activities",
      venue: "Proceedings of the 18th ACM International Conference on PErvasive Technologies Related to Assistive Environments (PETRA '25), ACM",
      year: 2025,
      citations: 2,
      doi: "https://doi.org/10.1145/3733155.3736604",
      pdf: "https://dl.acm.org/doi/10.1145/3733155.3736604",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:b0M2c_1WBrUC",
      authors: "Enamul Karim, Maimuna Maimuna, Ayon Roy, Md Bin Farukee, George Nale, Fillia Makedon",
      description:
        "Presents an adaptive autonomous robotic manipulation framework tailored to facilitate independent daily living tasks for quadriplegic and paralyzed individuals.",
    },
    {
      title: "Human-Robot Interactive System for Warehouses using Speech SLAM and Deep Learning-based Barcode Recognition",
      venue: "Proceedings of the 17th International Conference on PErvasive Technologies Related to Assistive Environments (PETRA '24), ACM, pp. 277\u2013282",
      year: 2024,
      citations: 2,
      doi: "https://doi.org/10.1145/3652037.3652061",
      pdf: "https://dl.acm.org/doi/pdf/10.1145/3652037.3652061",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:IjCSPb-OGe4C",
      authors: "Harish Ram Nambiappan, Sama Nikanfar, Ayon Roy, Junaid Hussain, Dhruva Shinglot, Suhas Acharya, Fillia Makedon",
      description:
        "A multimodal warehouse robotics system integrating voice-directed SLAM navigation and real-time deep learning barcode identification.",
    },
    {
      title: "NavVI: A Telerobotic Simulation with Multimodal Feedback for Visually Impaired Navigation in Warehouse Environments",
      venue: "arXiv preprint arXiv:2507.15072",
      year: 2025,
      citations: 1,
      doi: "https://arxiv.org/abs/2507.15072",
      pdf: "https://arxiv.org/pdf/2507.15072",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:abG-DnoFyZgC",
      authors: "Maimuna Maimuna, Md Bin Farukee, Sama Nikanfar, Musarrat Siddiqua, Ayon Roy, Fillia Makedon",
      description:
        "Explores telerobotic navigation simulations incorporating spatial audio and haptic feedback to enable visually impaired workers to navigate warehouse obstacles.",
    },
    {
      title: "Residual Graph Network for Assessing Cognitive Fatigue from Gait Cycle Analysis",
      venue: "Proceedings of the 17th International Conference on PErvasive Technologies Related to Assistive Environments (PETRA '24), ACM, pp. 319\u2013324",
      year: 2024,
      citations: 1,
      doi: "https://doi.org/10.1145/3652037.3652065",
      pdf: "https://dl.acm.org/doi/pdf/10.1145/3652037.3652065",
      scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EXovW5IAAAAJ&pagesize=100&citation_for_view=EXovW5IAAAAJ:UeHWp8X0CEIC",
      authors: "Qisheng An, Hamza Reza Pavel, Ayon Roy, Fillia Makedon",
      description:
        "Constructs a residual graph convolutional network to detect cognitive exhaustion and gait anomalies from kinematic sensor data during continuous movement.",
    },
  ],

  honorsAwards: [
    {
      title: "Dean's Research Award in 2024",
      issuer: 'UTA CSE Department',
      year: '2024',
      description: 'Recognized by the Department of Computer Science & Engineering for distinguished research achievements and contributions.',
    },
    {
      title: 'Doctoral Consortium Award',
      issuer: 'PETRA 2025 & PETRA 2024, Greece',
      year: '2024 & 2025',
      description: 'Awarded doctoral consortium grant and recognition at the International Conference on PErvasive Technologies Related to Assistive Environments.',
    },
    {
      title: 'First Prize Winner for Poster Presentation',
      issuer: 'UTA Innovation Day 2024',
      year: '2024',
      description: 'Awarded 1st place in poster competition for pioneering multimodal cognitive fatigue detection research.',
    },
  ],
};
