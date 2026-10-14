/* EDITABLE PERSONAL INFORMATION — based on Inam Ullah's CV (October 2026).
   Edit strings inside quotation marks; keep JavaScript punctuation intact.
   Profile photo is already in your existing GitHub repository: Pictures/Profile.jpg.
   Sports and travel are intentionally left blank until you supply real information.
*/
window.SITE = {
  name: "Inam Ullah",
  title: "Computer Science Researcher | Computer Vision & AI",
  tagline: "Human-centered computer vision, deep learning, intelligent systems, and applied AI.",
  photo: "Pictures/Profile.jpg",
  email: "inamkhan@bit.edu.cn",
  alternateEmail: "191265@icp.edu.pk",
  phone: "+86 18813035892", // To hide this publicly, set phone: ""
  location: "Beijing, China | Originally from Swat, Pakistan",
  cv: "assets/Inam_Ullah_CV.pdf",
  cvAvailable: true,
  github: "https://github.com/InamKhan65",
  linkedin: "https://www.linkedin.com/in/inam-khan-170445272/",
  googleScholar: "", orcid: "", researchGate: "",

  about: [
    "Hello! I am Inam Ullah, a computer science researcher with an MS in Computer Science and Technology from Beijing Institute of Technology, China. My work focuses on deep learning, computer vision, and intelligent AI systems.",
    "I have researched and developed systems for real-time human detection and tracking, visual recognition, retail video analytics, and AI-based customer support. My work includes building and evaluating YOLO-based detection systems and large language model applications using retrieval-augmented generation (RAG).",
    "I am particularly interested in human-centered computer vision, understanding pedestrian behavior, visual perception, and intelligent autonomous systems. I enjoy translating research ideas into practical, reliable applications and evaluating how well they perform in real-world conditions."
  ],
  highlights: [
    {icon:"eye", title:"Computer Vision",description:"Human detection, object tracking, aerial video analysis, and visual recognition."},
    {icon:"brain",title:"Deep Learning & AI",description:"CNNs, YOLOv11, transformer-based models, and model evaluation."},
    {icon:"code",title:"LLM & RAG Systems",description:"Conversational agents using large language models and domain-specific knowledge bases."},
    {icon:"chart",title:"Applied Research",description:"Experimental design, data analysis, model robustness, and real-time system integration."}
  ],
  languages: [
    {name:"English",level:"IELTS overall band 7.0"},
    {name:"Chinese",level:"Intermediate"},
    {name:"Urdu",level:"National language"}
  ],
  interests: ["Computer Vision","Deep Learning","Human Detection & Tracking","Pedestrian Behavior Understanding","Visual Perception","Machine Learning","Autonomous Systems","Natural Language Processing","Large Language Models","Augmented Reality"],

  education: [
    {period:"Sep 2024 – Jul 2026",title:"MS, Computer Science and Technology",place:"Beijing Institute of Technology · Beijing, China",details:"GPA: 3.70/4.00. Thesis: Design and Evaluation of an AI-Based Real-Time Customer Support Agent. Supervisor: Professor Zhao Fengnian. Chinese Government Scholarship (CSC), fully funded. Coursework included machine learning, deep learning, computer vision, NLP, neural networks, and research methodology."},
    {period:"Aug 2019 – Sep 2023",title:"BS, Computer Science",place:"Islamia College University Peshawar · Peshawar, Pakistan",details:"GPA: 3.75/4.00. Thesis: Development of an Augmented Reality-Based Educational System with Interactive Visualization. Supervisor: Associate Professor Atif Khan. Ehsaas Government Scholarship. Silver medalist, batch 2019–2023."}
  ],
  experience: [
    {period:"Sep 2024 – Present (as listed on CV)",title:"Research Associate",place:"Beijing Institute of Technology · Beijing, China",details:"Developed a YOLOv11-based real-time customer detection and tracking system for retail video analytics. Built and evaluated LLM-based conversational agents with retrieval-augmented generation and domain-specific knowledge. Assessed model accuracy, inference efficiency, and reliability, integrating AI models into end-to-end systems."},
    {period:"Nov 2023 – Jun 2024",title:"Computer Vision & Deep Learning Intern",place:"MK Techsol (Private) Limited · Islamabad, Pakistan",details:"Worked on drone-based human detection for aerial video analysis. Developed and tested CNN-based models for detection and recognition. Performed data preprocessing, training, evaluation, robustness analysis, and real-time optimization."},
    {period:"Jan 2023 – Nov 2023",title:"Research Assistant",place:"Smart Technology Lab, Islamia College University Peshawar · Pakistan",details:"Worked on CNN-based facial emotion recognition and developed EasyMath, an augmented reality application for interactive mathematics learning. Tested recognition accuracy, system reliability, and interactive AI/AR applications."}
  ],
  skillGroups: [
    {title:"Programming",items:["Python","C++","Java","C#"]},
    {title:"Deep Learning",items:["PyTorch","TensorFlow","Keras","Scikit-learn","CNNs","YOLOv11","Transformers"]},
    {title:"Computer Vision & NLP",items:["OpenCV","Hugging Face Transformers","LangChain","OpenAI API","RAG"]},
    {title:"Data & Experimentation",items:["NumPy","Pandas","Matplotlib","SciPy","Data preprocessing","Model evaluation"]},
    {title:"Developer Tools",items:["Git","GitHub","Jupyter Notebook","Linux","Visual Studio Code","ONNX (basic exposure)"]}
  ],

  // All six research projects from the CV are shown in the PROJECTS navigation tab.
  projects: [
    {title:"Weibo Social Network Interaction Prediction",category:"Machine Learning",icon:"chart",description:"Built an end-to-end predictive pipeline using more than 1.2 million Weibo records. Engineered content, temporal, and user features and evaluated supervised learning models. Ranked 38th of 6,758 teams (top 0.5%).",tools:["Python","Machine Learning","Feature Engineering","Data Analysis"],image:"",url:"",code:""},
    {title:"Real-Time Customer Detection and Tracking Using YOLOv11",category:"Computer Vision",icon:"eye",description:"Designed a deep-learning computer vision system to detect and track customers in retail footage, evaluating detection accuracy, tracking performance, and real-time processing.",tools:["YOLOv11","Computer Vision","Object Tracking","Python"],image:"",url:"",code:""},
    {title:"AI-Based Real-Time Customer Support System (MS Thesis)",category:"AI & NLP",icon:"brain",description:"Developed an LLM-based customer support agent using retrieval-augmented generation and a domain-specific knowledge base. Evaluated response quality, retrieval effectiveness, and real-time performance.",tools:["LLMs","RAG","NLP","Python"],image:"",url:"",code:""},
    {title:"Drone-Based Human Detection for Aerial Video Analysis",category:"Computer Vision",icon:"eye",description:"Explored human detection from drone imagery using CNN-based models; performed data preprocessing, training, testing, and analysis of detection robustness and computational efficiency.",tools:["CNN","Computer Vision","Deep Learning"],image:"",url:"",code:""},
    {title:"Real-Time Facial Emotion Recognition",category:"Computer Vision",icon:"eye",description:"Researched a CNN-based system for facial expression recognition, with experimental evaluation of recognition accuracy and system reliability.",tools:["CNN","Facial Expression Recognition","Deep Learning"],image:"",url:"",code:""},
    {title:"EasyMath: Augmented Reality Mathematics Learning",category:"Augmented Reality",icon:"layers",description:"Developed an interactive augmented reality educational application for early mathematics learning, using visualization to make mathematical concepts more engaging.",tools:["Augmented Reality","Educational Technology","Interactive Visualization"],image:"",url:"",code:""}
  ],
  publications: [
    {type:"Journal",year:"2026",status:"Under Review",title:"EasyMath: A Fun and Interactive Augmented Reality Math Learning Application for Kids",authors:"Inam Ullah, Faiz Ullah, Sufyan Danish, Hilal Muhammad, Zuo Cong, Shafiullah Khan, L. Minh Dang",venue:"Entertainment Computing · Manuscript ENTCOM-D-25-00534",doi:"",pdf:"",bibtex:""},
    {type:"Journal",year:"2026",status:"Under Review",title:"Design and Evaluation of an LLM-Based Conversational Agent for Real-Time Customer Support",authors:"Inam Ullah, Sufyan Danish, Hilal Muhammad, Zhao Fengnian, Shafiullah Khan, L. Minh Dang",venue:"Computers in Human Behavior · Manuscript under review",doi:"",pdf:"",bibtex:""}
  ],
  awards: [
    {year:"2024–2026",title:"Chinese Government Scholarship (CSC)",source:"China",description:"Fully funded scholarship for master's studies at Beijing Institute of Technology."},
    {year:"2019–2023",title:"Ehsaas Scholarship",source:"Pakistan",description:"Fully funded undergraduate scholarship."},
    {year:"2023",title:"Silver Medalist",source:"Islamia College University Peshawar",description:"Bachelor's cohort 2019–2023."},
    {year:"2023",title:"BS Final Year Project Funding",source:"IGNITE, Pakistan",description:"Final-year project received support through IGNITE."},
    {year:"",title:"Prime Minister's Laptop Scheme",source:"Pakistan",description:"Awarded a laptop under the national scheme."},
    {year:"",title:"Weibo Interaction Prediction — Top 0.5%",source:"Machine-learning competition",description:"Ranked 38th among 6,758 teams."}
  ],
  additional: [
    {title:"Zhongguancun Forum (ZGC Forum)",description:"New Quality Productive Forces and Global Science and Technology Cooperation Conference · Beijing, China · March 7–31, 2025."},
    {title:"International Conference on UAV Application",description:"Beijing National Convention Center, China · July 5–7, 2025."}
  ],

  // Fill these sections with your REAL sports and travel memories; no entries are invented.
  sportsIntro:"My sports interests and activities. I will add personal photographs, favorite sports, and achievements here.",
  sports: [
    // Example: {title:"Cricket",description:"I enjoy playing cricket...",image:"Pictures/cricket.jpg",location:"",date:""}
  ],
  travelIntro:"Places I have visited, memorable experiences, and travel photography.",
  travel: [
    // Example: {title:"Trip to ...",description:"A few words about the trip...",image:"Pictures/trip.jpg",location:"City, Country",date:"2026"}
  ]
};
