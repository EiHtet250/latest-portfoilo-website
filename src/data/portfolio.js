// All site content lives here, so updating the portfolio never means touching components.

// Site folder from `base` in vite.config.js (e.g. '/portfolio'), so file links follow the repo name.
const SITE = import.meta.env.BASE_URL.replace(/\/$/, '');
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

export const profile = {
  name: 'Ei Htet Htet Tun',
  shortName: 'Ei Htet',
  initials: 'EH',
  role: 'FullStack Developer. Web & Mobile App Developer. UI/UX Designer.',
  school: 'Republic Polytechnic',
  // Shown in the "A little about me" polaroid. Files in /public/images are served from `${SITE}/images/`.
  photo: `${SITE}/images/ei_Profile.jpg`,
  // TODO: a PDF opens in the browser; a .docx only downloads. Save your CV as PDF and update this name.
  cv: `${SITE}/assets/Ei_Htet_Htet_Tun_Resume_.docx`,
  availability: 'Looking for a software development internship from 15 Mar 2027 (44 weeks)',
  greeting: "Hi, I'm Ei Htet Htet Tun",
  headline: 'Bringing ideas to life through design and code.',
  intro: [
    "I’m an Information Technology student at Republic Polytechnic with an interest in Software Development and UI/UX Design. ",
    "I enjoy building practical applications and designing interfaces that are clear and easy to use." ],
  stats: [
    { value: '4', label: 'Team projects' },
    { value: '3', label: 'Competitions' },
    { value: '3.4', label: 'Current GPA' },
  ],
};

export const about = {
  title: 'A little about me',
  notes: [
    {
      heading: 'My background',
      text: 'Diploma in IT at Republic Polytechnic, Apr 2025 – May 2028.',
      side: 'left',
    },
    {
      heading: 'My Hobbies',
      text: 'Swimming, Playing Chess,Playing badminton, and exploring new tech.',
      side: 'left',
    },
    {
      heading: 'How I work',
      text: 'Curious, hands-on, and the teammate who tests the form one more time.',
      side: 'right',
    },
    {
      heading: 'Languages',
      text: 'Burmese (native), English (conversational), Chinese (basic).',
      side: 'right',
    },
    {
      heading: 'Fun fact',
      text: 'I 3D-printed parts for an underwater robot, and it floated on the first try.',
      side: 'center',
    },
  ],
  tags: ['Software Development', 'UI/UX Design'],
  footnote: 'Currently exploring React.',
};

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'design', label: 'UI/UX' },
  { id: 'robotics', label: 'Robotics' },
];

// Every project uses the same fields:
// - images: files in /public/images. The first one is the card thumbnail (shown at 16:10);
//   all of them appear in the gallery on the project's own page. A missing file shows a placeholder.
// - demo / code: full URLs, or null while you don't have one yet (the button shows "coming soon").
export const projects = [
  {
    id: 'minth',
    title: 'MINTH Adventure Guide',
    role: 'Chatbot & UI/UX developer',
    categories: ['web', 'design'],
    period: 'Sep – Oct 2026 · IdeateComm',
    images: [`${SITE}/images/minth-login.png`, `${SITE}/images/minth-home.png`, `${SITE}/images/minth-settings.png`],
    summary: 'A museum guide that helps visitors find their way, learn as they go and get help when they need it.',
    contribution: [
      'Built the visitor chatbot using n8n workflows and AI tools',
      'Made the Contact page, accessibility settings and footer',
      'Helped shape the UI/UX across the whole guide',
    ],
    tags: ['n8n', 'AI', 'UI/UX', 'Accessibility', 'Render'],
    outcome: 'Live on Render with larger text, dark mode, high contrast and reduced motion. Earned a Certificate of Participation (Oct 2026).',
    demo: 'https://mint-museum.onrender.com',
    code: 'https://github.com/EiHtet250/ideatecomm',
  },
  {
    id: 'marlin',
    title: 'MARLIN Trident-X',
    role: '3D design & Python controls',
    categories: ['robotics'],
    period: 'Oct 2026 – Present · Robotics',
    images: [`${SITE}/images/marlin-cad.png`],
    summary: 'Our team designed, printed and programmed an underwater robot for the MARLIN Trident-X Challenge.',
    contribution: [
      'Used design thinking to model robot parts in Onshape, then printed them with Bambu Studio',
      'Wrote about half the Python code: joystick thruster controls, IMU and radio beacon readings',
    ],
    tags: ['Python', 'Onshape', 'IMU', 'Robotics'],
    outcome: 'The robot ran smoothly in our pool tests.',
    demo: null,
    code: null, // TODO: add the GitHub link for the robot code
  },
  {
    id: 'wellness',
    title: 'Wellness Collective',
    role: 'UI/UX & database',
    categories: ['web', 'design'],
    period: 'Jun – Jul 2026 · School project',
    images: [`${SITE}/images/wellness.png`], // TODO: add public/images/wellness.png
    summary: 'A team wellness web app built around UN SDG 3: good health and well-being.',
    contribution: [
      'Designed the UI/UX layouts and promo materials',
      'Connected the app to a MySQL database',
      'Tested forms, layouts and database connections by hand',
    ],
    tags: ['MySQL', 'UI/UX', 'Testing'],
    outcome: null, // TODO: add a result, e.g. grade or user feedback
    demo: null,
    code: 'https://github.com/Thiha256/Ai-Essential-and-innovation',
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Career Planner',
    role: 'Research & UI/UX',
    categories: ['design'],
    period: 'Nov 2025 – Mar 2026 · IDARETHON',
    images: [`${SITE}/images/digital-twin.png`], // TODO: add public/images/digital-twin.png
    summary: 'A planner that helps students map out their studies and the career they want after.',
    contribution: [
      'Talked to students to understand what they actually needed',
      'Designed the prototype UI/UX',
      'Tested the prototype together with the team',
    ],
    tags: ['Research', 'UI/UX', 'Testing'],
    outcome: 'A team prototype with a 3D academic timeline and course recommendations.',
    demo: null,
    code: null, // TODO: add the GitHub link
  },
];

// `icon` is a devicon path; skills without one fall back to their initials.
export const skills = [
  { name: 'Python', group: 'Programming', color: '#4b8bbe', icon: `${DEVICON}/python/python-original.svg`, note: 'Wrote the thruster controls and sensor readings for our MARLIN robot.' },
  { name: 'JavaScript', group: 'Programming', color: '#f0db4f', icon: `${DEVICON}/javascript/javascript-original.svg`, note: 'Adds the interactive bits to the web apps I build.' },
  { name: 'HTML', group: 'Web', color: '#e34f26', icon: `${DEVICON}/html5/html5-original.svg`, note: 'The structure behind every page I make, written with accessibility in mind.' },
  { name: 'CSS', group: 'Web', color: '#2965f1', icon: `${DEVICON}/css3/css3-original.svg`, note: 'Layouts, themes, dark mode and high-contrast settings.' },
  { name: 'React', group: 'Web', color: '#61dafb', icon: `${DEVICON}/react/react-original.svg`, note: "What this site is built with. I'm still learning and loving it." },
  { name: 'Node.js', group: 'Web', color: '#68a063', icon: `${DEVICON}/nodejs/nodejs-original.svg`, note: 'Running small back-ends and tools for school projects.' },
  { name: 'MySQL', group: 'Databases', color: '#00758f', icon: `${DEVICON}/mysql/mysql-original.svg`, note: 'Connected Wellness Collective to its database and tested every query.' },
  { name: 'MongoDB', group: 'Databases', color: '#4db33d', icon: `${DEVICON}/mongodb/mongodb-original.svg`, note: 'Storing flexible, document-style data.' },
  { name: 'Figma', group: 'Design', color: '#a259ff', icon: `${DEVICON}/figma/figma-original.svg`, note: 'Where every project starts, including this site.' },
  { name: 'Illustrator', group: 'Design', color: '#ff9a00', icon: `${DEVICON}/illustrator/illustrator-plain.svg`, note: 'Icons, logos and promo graphics.' },
  { name: 'Photoshop', group: 'Design', color: '#31a8ff', icon: `${DEVICON}/photoshop/photoshop-original.svg`, note: 'Editing images and mockups for presentations.' },
  { name: 'VS Code', group: 'Tools', color: '#23a9f2', icon: `${DEVICON}/vscode/vscode-original.svg`, note: 'My everyday editor.' },
  { name: 'n8n', group: 'Tools', color: '#ea4b71', icon: null, note: 'Built the MINTH visitor chatbot with n8n workflows.' },
  { name: 'Copilot', group: 'AI Assistance', color: '#c89ae3', icon: `${DEVICON}/githubcopilot/githubcopilot-original.svg`, note: 'A second pair of eyes while I code.' },
  { name: 'ChatGPT', group: 'AI Assistance', color: '#10a37f', icon: null, note: 'Brainstorming ideas and explaining tricky concepts.' },
  { name: 'Claude', group: 'AI Assistance', color: '#d97757', icon: null, note: 'Reviewing code and talking through how to structure it.' },
];

// Listed under the skills arc, grouped. Arc skills are added to their group automatically.
export const practices = { group: 'Practices', items: ['UI/UX layout', 'User research', 'Manual testing', 'DB connection testing', 'Design thinking', '3D modelling'] };

export const experience = {
  work: [
    { role: 'Service Crew', place: 'YY Circle', period: 'Aug 2026 – Present', text: 'Serving guests at Novotel Orchard and Marina Bay Sands, and quickly adapting to how each venue runs.' },
    { role: 'Part-time Service Crew', place: 'PAUL', period: 'Aug 2025 – Present', text: 'Taking orders, handling payments and keeping the floor running smoothly with the team.' },
    { role: 'Cashier', place: "Ei Pont's Mini Mart", period: 'Oct 2025 – Aug 2026', text: 'Processed payments, helped shoppers and kept the shelves tidy.' },
  ],
  leadership: [
    { role: 'Student Leader', place: 'DETECH Bonding, RP', period: 'Jun 2026', text: 'Planned and led bonding games for new students.' },
    { role: 'Volunteer', place: 'RP Service-Learning Club', period: 'May 2025 – Present', text: 'Led park clean-ups and taught seniors how to use tech through AI-mazing for Seniors.' },
    { role: 'Volunteer', place: 'Make A Difference, RP', period: 'May 2025', text: 'Game Master, and joined sessions on public speaking, budgeting and leadership.' },
  ],
  competitions: [
    { name: 'IdeateCOMM', period: '2025 & 2026', text: 'Built MINTH with team 404 Culture.' },
    { name: 'BrainHack', period: 'May 2026', text: 'Research, testing and UI/UX.' },
    { name: 'MARLIN Trident-X', period: '2026 · ongoing', text: 'Programming robot controls in Python.' },
  ],
};

// Certificates section: 4 per row, sorted newest first automatically, so add them in any order.
// To add one: put the PDF in /public/certificates, copy a block below and change it.
//   date:  'YYYY-MM-DD' (the date on the certificate; the card shows it as e.g. "Nov 2026")
//   file:  the PDF's exact file name inside /public/certificates
//   image: thumb('same file name.pdf') shows its picture from /public/certificates/thumbs (a .jpg with the same name);
//          use null to show a drawn certificate instead
const cert = (fileName) => `${SITE}/certificates/${encodeURIComponent(fileName)}`;
// Picture of the certificate's first page, made from the PDF and saved in /public/certificates/thumbs.
const thumb = (fileName) => `${SITE}/certificates/thumbs/${encodeURIComponent(fileName.replace(/\.pdf$/i, '.jpg'))}`;

export const certificates = [
  {
    title: 'Software Testing Foundations: Test Techniques',
    issuer: 'LinkedIn Learning',
    date: '2026-11-06',
    file: cert('software-testing-foundations.pdf'),
    image: thumb('software-testing-foundations.pdf'),
  },
  {
    title: 'IdeateCOMM 2026: Certificate of Participation (404 Culture)',
    issuer: 'Toa Payoh East & Marymount Youth Network',
    date: '2026-10-03',
    file: cert('Ei Htet Htet Tun.pdf'),
    image: thumb('Ei Htet Htet Tun.pdf'),
  },
  {
    title: 'Building a Website with Node.js and Express.js',
    issuer: 'LinkedIn Learning',
    date: '2026-08-12',
    file: cert('CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf'),
    image: thumb('CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf'),
  },
  {
    title: 'Programming Foundations: APIs and Web Services',
    issuer: 'LinkedIn Learning',
    date: '2026-08-10',
    file: cert('CertificateOfCompletion_Programming Foundations APIs and Web Services 2019.pdf'),
    image: thumb('CertificateOfCompletion_Programming Foundations APIs and Web Services 2019.pdf'),
  },
  {
    title: 'BrainHack CODE_EXP: Participant (Beginner)',
    issuer: 'BrainHack · DSTA',
    date: '2026-06-16',
    file: cert('brainhack_participant_certificate.pdf'),
    image: thumb('brainhack_participant_certificate.pdf'),
  },
  {
    title: 'Connecting to a MongoDB Database Using the MongoDB Shell',
    issuer: 'MongoDB',
    date: '2025-12-30',
    file: cert('ei-htet-htet-tunmongo db-certificate.pdf'),
    image: thumb('ei-htet-htet-tunmongo db-certificate.pdf'),
  },
  {
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB',
    date: '2025-12-29',
    file: cert('ei-htet-htet-tun_mongoDB_certificate.pdf'),
    image: thumb('ei-htet-htet-tun_mongoDB_certificate.pdf'),
  },
  {
    title: 'Python for Data Visualization',
    issuer: 'LinkedIn Learning',
    date: '2025-12-04',
    file: cert('CertificateOfCompletion_Python for Data Visualization.pdf'),
    image: thumb('CertificateOfCompletion_Python for Data Visualization.pdf'),
  },
  {
    title: 'What Is Scrum?',
    issuer: 'LinkedIn Learning',
    date: '2025-11-25',
    file: cert('CertificateOfCompletion_What Is Scrum.pdf'),
    image: thumb('CertificateOfCompletion_What Is Scrum.pdf'),
  },
  {
    title: 'Project Management Foundations: Requirements',
    issuer: 'LinkedIn Learning',
    date: '2025-10-27',
    file: cert('CertificateOfCompletion_Project Management Foundations Requirements (1).pdf'),
    image: thumb('CertificateOfCompletion_Project Management Foundations Requirements (1).pdf'),
  },
  {
    title: 'IdeateCOMM Challenge 2025: Ideathon Participation',
    issuer: 'Toa Payoh East & Marymount Youth Network',
    date: '2025-10-04',
    file: cert('Htet Htet Tun.pdf'),
    image: thumb('Htet Htet Tun.pdf'),
  },
];

// Empty "coming soon" cards fill the grid up to this number (e.g. 16 = 4 rows of 4). 0 = no placeholders.
export const certificateSlots = 0;

export const contact = {
  eyebrow: "Let's connect",
  heading: 'Get in touch',
  text: "Have a question or an idea? I'd love to hear from you. I'm free from 15 March 2027 for a 44-week internship.",
  email: 'eihtet4015@gmail.com',
  // Optional: paste a Formspree endpoint (https://formspree.io → New form), e.g. 'https://formspree.io/f/abcdwxyz'.
  // While it's null, "Send message" opens the visitor's email app with the message filled in.
  formEndpoint: null,
  // Optional: put your own rose picture in /public/images and set e.g. `${SITE}/images/rose.png`.
  // While it's null, a drawn rose is shown instead.
  roseImage: `${SITE}/images/rose.png`,
  links: [
    // `copy: true` adds a copy-to-clipboard button to the card.
    { icon: 'mail', label: 'Email', value: 'eihtet4015@gmail.com', href: 'mailto:eihtet4015@gmail.com', copy: true },
    { icon: 'phone', label: 'Phone', value: '+65 8089 2152', href: 'tel:+6580892152', copy: true },
    { icon: 'github', label: 'GitHub', value: 'github.com/EiHtet250', href: 'https://github.com/EiHtet250' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'in/ei-htet-htet-tun', href: 'https://www.linkedin.com/in/ei-htet-htet-tun-aa46aa372/' },
  ],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];
