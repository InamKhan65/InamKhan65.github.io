/* ================================================================
   EDIT THIS FILE TO PERSONALIZE THE ENTIRE WEBSITE.
   Replace example text, links, dates, and cards with your own data.
   For a profile photo: put profile.jpg in assets/ then set photo.
   Don't remove quotation marks or commas when editing.
   ================================================================ */
window.SITE = {
  name: "Inam Khan", // EDIT: your displayed name
  title: "Researcher | Software Engineer | Developer",
  tagline: "Developing practical solutions through research, engineering, and thoughtful software design.",
  photo: "assets/Profile.jpg", // e.g. "assets/profile.jpg"
  email: "your.email@example.com", // EDIT
  phone: "", // Optional; leave empty to hide
  location: "Your City, Your Country",
  cv: "assets/your-cv.pdf", // Upload your CV to this path; link stays disabled until you set cvAvailable below
  cvAvailable: false,
  github: "https://github.com/InamKhan65",
  linkedin: "", googleScholar: "", orcid: "", researchGate: "",
  // ABOUT
  about: [
    "Hello! I am Inam Khan. Welcome to my personal homepage. I am interested in research, software development, and creating technology that solves real-world problems.",
    "This portfolio brings together my academic background, professional experience, publications, and selected technical projects. I enjoy collaborating across disciplines and continuously expanding my technical expertise.",
    "All content on this starter website is editable. Replace these example paragraphs with your real biography and research statement."
  ],
  highlights: [
    { icon: "code", title: "Software Development", description: "Building useful, maintainable applications and tools." },
    { icon: "brain", title: "Research & Innovation", description: "Exploring new ideas and evaluating practical solutions." },
    { icon: "chart", title: "Data & Analysis", description: "Turning data and experiments into actionable insights." },
    { icon: "users", title: "Collaboration", description: "Working with diverse teams on meaningful problems." }
  ],
  languages: [ {name:"English",level:"Add proficiency"}, {name:"Your Language",level:"Add proficiency"} ],
  interests: ["Machine Learning", "Computer Vision", "Software Engineering", "Data Analysis", "Intelligent Systems"],
  // RESUME
  education: [
    {period:"20XX – 20XX", title:"Your highest degree", place:"University Name, Country", details:"Major, specialization, dissertation topic, or academic achievement."},
    {period:"20XX – 20XX", title:"Previous degree", place:"University Name, Country", details:"Major or selected coursework."}
  ],
  experience: [
    {period:"20XX – Present", title:"Your current position", place:"Institution or Company, Location", details:"Brief description of work, responsibilities, and measurable contributions."},
    {period:"20XX – 20XX", title:"Previous role", place:"Institution or Company, Location", details:"Summarize your principal responsibilities and results."}
  ],
  skills: [ {name:"Python",percent:85}, {name:"C / C++",percent:75}, {name:"Machine Learning",percent:70}, {name:"Web Development",percent:65} ],
  // RESEARCH
  researchIntro: "Describe your research vision here: the problems you investigate, why they matter, and how your work contributes to the field.",
  researchAreas: [
    {icon:"brain",title:"Machine Learning",description:"Explain a specific research question, approach, and application you work on."},
    {icon:"eye",title:"Computer Vision",description:"Describe visual understanding, image processing, or related projects."},
    {icon:"layers",title:"Intelligent Systems",description:"Summarize modeling, optimization, sensing, or decision-making interests."}
  ],
  researchStatement: "Write a short research statement describing your long-term goals, current research questions, collaborations, and areas in which you welcome new opportunities.",
  // PUBLICATIONS - DEMONSTRATION ENTRIES; REPLACE WITH REAL CITATIONS
  publications: [
    {type:"Journal",year:"20XX",title:"Example journal article — replace with your actual publication",authors:"Your Name, Coauthor A, Coauthor B",venue:"Journal Name",doi:"",pdf:"",bibtex:""},
    {type:"Conference",year:"20XX",title:"Example conference paper — replace with your actual publication",authors:"Your Name, Coauthor C",venue:"Conference Name",doi:"",pdf:"",bibtex:""}
  ],
  // PROJECTS - DEMONSTRATION ENTRIES
  projects: [
    {title:"Computer Vision Application",category:"Software",icon:"eye",description:"Example project: describe the problem, the solution, your contribution, and the measurable result.",tools:["Python","OpenCV"],image:"",url:"",code:""},
    {title:"Machine Learning Research",category:"Research",icon:"brain",description:"Example project: provide methodology, dataset, evaluation, and findings.",tools:["PyTorch","Python"],image:"",url:"",code:""},
    {title:"Data Analysis Dashboard",category:"Software",icon:"chart",description:"Example project: an end-to-end analytical dashboard or visualization system.",tools:["JavaScript","Data"],image:"",url:"",code:""},
    {title:"Selected Academic Project",category:"Academic",icon:"layers",description:"Example project: highlight a capstone, research collaboration, or academic system.",tools:["Research","Engineering"],image:"",url:"",code:""}
  ],
  // AWARDS / OTHER
  awards: [ {year:"20XX",title:"Award or Scholarship",source:"Organization",description:"Replace with a verified award or accomplishment."} ],
  additional: [ {title:"Teaching & Mentorship",description:"Add courses, supervised projects, tutorials, invited talks, or mentorship experience."}, {title:"Professional Activities",description:"Add memberships, reviewing, conference service, volunteering, or academic outreach."} ]
};
