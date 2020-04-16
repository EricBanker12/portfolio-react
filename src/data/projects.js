import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'
import Image4 from './../assets/images/Image4.jpg'
import Image5 from './../assets/images/Image5.jpg'
import Video5 from './../assets/videos/StorySquad_final_presentation.mp4'
import Image6 from './../assets/images/Image6.jpg'

const data = [
  {
    title: 'Wunderlist 2.0',
    image: Image1,
    paragraphs: [`An online to-do list, Wunderlist 2.0 is a web app for
    creating and updating your tasks.`],
    bullets: [
      'Constructed a fully responsive marketing site for desktop and mobile devices.',
      'Designed pages in coordinatation with a UX Designer over a 4 day period.',
      'Built using HTML and LESS.',
      {
        link: 'https://github.com/Wunderlist-bw/User-Interface/tree/eric-banker',
        text: 'GitHub Repository',
      },
    ],
    website: 'https://brave-goldwasser-c0f535.netlify.com/',
  },
  {
    title: 'My Top Nine',
    image: Image2,
    paragraphs: [`An online favorites list, My Top Nine allows users to create
    accounts and form categorized lists of up to 9 items.`],
    bullets: [
      `Performed as a front-end developer on a remote team of 5 consisting of 1 UI developer,
      3 front-end developers, and 1 back-end developer.`,
      'Constructed a themed and responsive single page application with customized Bootstrap 4.0 styling.',
      'Programmed functional, state managed forms for creation and editing of categorized list entries.',
      'Built using Axios, Bootstrap, and React.js.',
      {
        link: 'https://github.com/bw-my-top-nine/front-end',
        text: 'GitHub Repository',
      },
    ],
    website: 'https://my-top-nine-app.netlify.com/',
  },
  {
    title: 'Gigapet',
    image: Image3,
    paragraphs: [`Gigapet is a web app for parents to track the eating habits of their children
    while motivating the kids by giving their digital pet energy with every meal.`],
    bullets: [
      `Performed as a front-end developer on a remote team of 6 consisting of 1 UI developer,
      3 front-end developers, 1 back-end developer, and 1 UX Designer.`,
      'Programmed modal popups, meal selection, meal history, and pet CSS animation.',
      'Incorporated Redux for state management and worked with both functional and classical React components',
      'Built using Axios, React.js, Redux.js, and styled-components.',
      {
        link: 'https://github.com/BW-Gigapet/Frontend',
        text: 'GitHub Repository',
      },
    ],
    website: 'https://giga-pet.netlify.com/',
  },
  {
    title: 'Empowerd Conversations',
    image: Image4,
    paragraphs: [`Empowerd Conversations is a web app that acts as an ice-breaker for
    sensitive discussions by preparing the recipient with conversational advice prior
    to starting the interpersonal communication.`],
    bullets: [
      `Performed as the sole back-end developer on a remote team of 4 consisting of 1 UI developer,
      2 front-end developers, 1 back-end developer.`,
      'Implemented secure authentication through JSON web tokens and hashed passwords with many salt rounds.',
      `Wrote a complete REST-ful API with detailed documentation and testing, and communicted with a
      PostgreSQL database and a 3rd party Twilio API for text messaging.`,
      'Built using bcrypt, Express.js, Jest, JSON Web Token (JWT), Knex.js, Markdown, Node,js, SuperTest, and Twilio.',
      {
        link: 'https://github.com/BW-EmpoweredConversations/Back-End',
        text: 'GitHub Repository',
      },
    ],
    website: 'https://romantic-shannon-065344.netlify.com/Start',
  },
  {
    title: 'Story Squad',
    image: Image5,
    video: Video5,
    paragraphs: [
      `Story Squad is a progressive web app for encouraging young children to sharpen
      their language, drawing, teamwork, and critical thinking skills through weekly competition.`,
      `In the video above (on supported browsers), I present the project and team details
      (0:00-1:50) and showcase the web application (1:50-5:08) following my team's 2 months of work.`,
    ],
    bullets: [
      `Built to the specifications of our not-for-profit stakeholder, Story Squad, LLC., on a remote, crossfunctional
      team of 1 UX designer, 5 full-stack developers, and later, 3 data scientists, over a 2 month period.`,
      `Designed and implemented the back-end API and front-end interface for admin user management
      and child user reception of the weekly competition prompts.`,
      `Coded the API and interface for COPPA-compliant, child user submissions in coordination with
      data scientists for scanned handwriting to text conversion.`,
      `Documented components, pages, middleware, utils, and database schema and migration details on our GitHub wiki
      with markdown text styling.`,
      'Built using Axios, bcrypt, Express.js, Jest, Markdown, Material-UI, Node.js, React.js, SuperTest, TypeORM, and TypeScript.',
      {
        link: 'https://github.com/Lambda-School-Labs/story-squad-be',
        text: 'Back-End GitHub Repository',
      },
      {
        link: 'https://github.com/Lambda-School-Labs/story-squad-fe',
        text: 'Front-End GitHub Repository',
      },
    ],
    website: 'https://story-squad.netlify.com/',
  },
  {
    title: 'Tower Maze',
    image: Image6,
    paragraphs: [`Tower Maze is a real-time, multiplayer maze exploration game
    utilizing WebSocket and depth-first traversal maze generation.`],
    bullets: [
      `Performed as a full-stack developer on a remote team of 5 full-stack developers.`,
      `Programmed back-end maze creation algorithm and optimized database usage to multiply generation
      speed to over 1000 times faster.`,
      `Constructed sprites and canvas draw calls to display the mazes, adjusted styling for desktop and
      mobile devices, and programmed keyboard input for the AngularJS front-end.`,
      'Built using AngularJS, Django, Material-UI, Python, and TypeScript.',
      {
        link: 'https://github.com/tower-maze',
        text: 'GitHub Repositories',
      },
    ],
    website: 'https://tower-maze.netlify.com/',
  },
]

export default data
