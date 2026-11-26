/* EDITABLE PERSONAL INFORMATION — based on Inam Ullah's CV (October 2026).
   Edit strings inside quotation marks; keep JavaScript punctuation intact.
   Profile photo is already in your existing GitHub repository: Pictures/Profile.jpg.
   Sports and travel are intentionally left blank until you supply real information.
*/
window.SITE = {
  name: "Inam Ullah",
  title: "AI Agents | Educational Technology | Computer Vision & ML",
  tagline: "AI agents, educational technology, computer vision, and machine learning.",
  photo: "Pictures/Profile.jpg",
  email: "inamkhan@bit.edu.cn",
  alternateEmail: "191265@icp.edu.pk",
  phone: "+86 188 1303 5892", // To hide this publicly, set phone: ""
  location: "Beijing, China",
  cv: "assets/Inam_Ullah_CV.pdf",
  cvAvailable: true,
  github: "https://github.com/InamKhan65",
  linkedin: "https://www.linkedin.com/in/inam-khan-170445272/",
  googleScholar: "", orcid: "", researchGate: "",

  about: [
    "Hello! I am Inam Ullah, a computer science researcher with an MS in Computer Science and Technology from Beijing Institute of Technology, China. My primary research interests are AI agents, agentic AI, and multi-agent systems, with a particular interest in building intelligent systems that can retrieve information, interact with users, and support complex tasks.",
    "My experience includes developing LLM-based conversational applications using retrieval-augmented generation (RAG), computer vision systems for human detection and tracking, and an augmented reality application for interactive mathematics learning. I am interested in extending this work toward more capable AI agents and exploring how agentic AI can support education and personalized learning.",
    "My broader interests also include computer vision and machine learning, including object detection, visual recognition, deep learning models, and the evaluation of practical AI systems. I aim to connect research with useful, reliable, and human-centered applications."
  ],
  highlights: [
    {icon:"brain",title:"AI Agents & Multi-Agent Systems",description:"LLM-based conversational applications, retrieval-augmented generation (RAG), intelligent assistants, and emerging agentic and multi-agent architectures."},
    {icon:"book",title:"Educational Technology & AI in Education",description:"AI-supported learning, intelligent tutoring, personalized education, augmented reality, and interactive learning applications."},
    {icon:"eye",title:"Computer Vision",description:"Human detection, object tracking, facial expression recognition, visual recognition, and video analytics."},
    {icon:"chart",title:"Machine Learning & Deep Learning",description:"CNNs, YOLO-based models, feature engineering, model development, training, and performance evaluation."}
  ],
  languages: [
    {name:"English",level:"Fluent"},
    {name:"Chinese",level:"Intermediate level"},
    {name:"Urdu",level:"National language"},
     {name:"Pashto",level:"native language"}
  ],
  interests: ["AI Agents","Agentic AI","Multi-Agent Systems","Large Language Models (LLMs)","Retrieval-Augmented Generation (RAG)","Intelligent Autonomous Systems","AI in Education","Educational Technology","Intelligent Tutoring Systems","Personalized Learning","Augmented Reality (AR)","Computer Vision","Machine Learning","Deep Learning","Human-Centered AI","Human-Computer Interaction"],

education: [
  {
    period: "Sep 2024 – Jul 2026",
    title: "MS, Computer Science and Technology",
    place: "Beijing Institute of Technology · Beijing, China",
    gpa: "3.70/4.00",
    thesis: "Design and Evaluation of an AI-Based Real-Time Customer Support Agent",
    supervisorName: "Professor Zhao Fengnian",
    supervisorUrl: "https://cs.bit.edu.cn/szdw/jsml/sssds/441430e4ba2248e1b7ecd43d8a2d9214.htm",
    funding: "Chinese Government Scholarship (CSC), fully funded."
  },
  {
    period: "Aug 2019 – Sep 2023",
    title: "BS, Computer Science",
    place: "Islamia College University Peshawar · Peshawar, Pakistan",
    gpa: "3.75/4.00",
    thesis: "Development of an Augmented Reality-Based Educational System with Interactive Visualization",
    supervisorName: "Associate Professor Atif Khan",
    supervisorUrl: "https://www.icp.edu.pk/icp/staff_detail.php?cat_id=82",
    funding: "Ehsaas Government Scholarship.",
    honors: "Silver medalist, batch 2019–2023."
  }
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
