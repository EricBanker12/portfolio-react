const data = [
  {
    Technology: 'JavaScript',
    Website: 'https://en.wikipedia.org/wiki/JavaScript',
    Description: [
      'The standard programming language of the web.',
      'Used for client-side web page interaction and behavior.',
      'Also used for servers (Node.js), desktop applications (Electron.js), and mobile apps (React Native).',
    ]
  },
  {
    Technology: 'HTML',
    Website: 'https://en.wikipedia.org/wiki/HTML',
    Description: [
      'Hypertext Markup Language is the standard markup language web for pages.',
      'Used to create skeletal structure of a web page and add meta information for search engine optimization (SEO) and social media embedding.',
      'Used with CSS for styling and JavaScript for events and actions.',
    ],
  },
  {
    Technology: 'CSS',
    Website: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
    Description: [
      'Cascading Style Sheets is a style sheet language used for the presentation of HTML web pages.',
      'Used for color, layout, animation, device responsiveness, and more.',
    ],
  },
  {
    Technology: 'React.js',
    Website: 'https://reactjs.org',
    Description: [
      'A library developed by Facebook which moves document creation from HTML to JavaScript with added simplicity and performance optimizations.',
      'Used as the base for many frameworks for developing web applications (GatsbyJS, Next.js, etc), JavaScript modules (NPM), and native applications (React Native).',
    ],
  },
  {
    Technology: 'Node.js',
    Website: 'https://nodejs.org/en/about',
    Description: [
      'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.',
      'Used to run JavaScript outside of a web browser, for running servers or building native applications.',
    ],
  },
  {
    Technology: 'Jest',
    Website: 'https://jestjs.io',
    Description: [
      'A highly compatible JavaScript Testing Framework with a focus on simplicity.',
      'Supports snapshot tests, integration tests, unit tests, dependency mocking, code coverage, and more.',
      'Jest is a fork and superset of Jasmine, with extra features and performance improvements.',
    ],
  },
  {
    Technology: 'SASS/SCSS',
    Website: 'https://sass-lang.com',
    Description: [
      'A CSS Preprocessor, SASS is a superscript of CSS style sheet language with extra features.',
      `Used to enhance readability, optimize output, separate large files, and improve code reuse.`,
    ],
  },
  {
    Technology: 'TypeScript',
    Website: 'https://en.wikipedia.org/wiki/TypeScript',
    Description: [
      'A superset of JavaScript programming language developed by Microsoft adding optional static typing to the language.',
      'Used to catch type errors at compile time, better IDE code-suggestion, and polyfilling latest syntax and features (ES6/ES2015+) to older-browser-compatible JavaScript.',
    ],
  },
  {
    Technology: 'PHP',
    Website: 'https://en.wikipedia.org/wiki/PHP',
    Description: [
      'A general purpose scripting language, usually processed on a web server.',
      'Used to create APIs or serve server-generated html built from templates with built-in scripts.',
    ],
  },
  {
    Technology: 'Git BASH',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'NPM',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Electron.js',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'R',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Python',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'C',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'C++',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Java',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'SuperTest',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'React Testing Library',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Knex.js',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'TypeORM',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'PostgreSQL',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Redux.js',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Redux Thunk',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'jQuery',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Bootstrap',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Material-UI',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Angular',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Express.js',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Django',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'SQLite',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'LESS',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Axios',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'JSON Web Token (JWT)',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Session Management',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'SQL',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Flask',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Pipenv',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'AutoHotKey',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'GraphQL',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Pandas',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'styled-components',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'bcrypt',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Markdown',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'PIP',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Spring',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Spring Boot',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Maven',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Create React App',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'GatsbyJS',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Heroku',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'JUnit',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'AWS',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Apache Tomcat',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Netty',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Kubernetes',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Docker',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Yarn',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Webpack',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Babel',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'MongoDB',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Netlify',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Vercel/Zeit',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Cloudflare',
    Website: '',
    Description: [
      '',
    ],
  },
  {
    Technology: 'Figma',
    Website: '',
    Description: [
      '',
    ],
  },
]

export default data
