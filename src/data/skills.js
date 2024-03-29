const data = [
  {
    Technology: 'JavaScript',
    Website: 'https://en.wikipedia.org/wiki/JavaScript',
    Description: [
      'A programming language for client-side web page interaction and behavior.',
      'Also used for servers (Node.js), desktop applications (Electron.js), and mobile apps (React Native).',
    ]
  },
  {
    Technology: 'HTML',
    Website: 'https://en.wikipedia.org/wiki/HTML',
    Description: [
      'Hypertext Markup Language is used to create web page elements and meta data for search engines (SEO) and social media.',
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
    Website: 'https://en.wikipedia.org/wiki/React_(web_framework)',
    Description: [
      'A library developed by Facebook which moves document creation from HTML to JavaScript with added simplicity and performance.',
      'Used for developing single-page (GatsbyJS, Next.js, etc) and mobile (React Native) applications.',
    ],
  },
  {
    Technology: 'Node.js',
    Website: 'https://nodejs.org/en/about',
    Description: [
      'A JavaScript runtime designed to build scalable, network applications.',
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
    Technology: 'SASS',
    Website: 'https://sass-lang.com',
    Description: [
      'A CSS Preprocessor, SASS (or more closely, SCSS) is a superscript of CSS style sheet language with extra features.',
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
    Technology: 'Git',
    Website: 'https://git-scm.com/about',
    Description: [
      'A collaboration and version control tool featuring branching, merging, history tracking, and more.',
      'For collaboration, source code git repositories are usually pushed to cloud hosts such as GitHub, GitLab, Bitbucket, and more.',
    ],
  },
  {
    Technology: 'Bash (Unix shell)',
    Website: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
    Description: [
      'A command line interface (CLI) commonly used to read, run, navigate, and modify directories and files on Unix operating systems.',
      'Git for windows also installs an emulated Bash terminal for windows operating systems.',
    ],
  },
  {
    Technology: 'NPM',
    Website: 'https://docs.npmjs.com/about-npm',
    Description: [
      'Node Package Manager is a public registry and manager for creation, publishing, and installation of JavaScript compatible modules.',
    ],
  },
  {
    Technology: 'Electron.js',
    Website: 'https://en.wikipedia.org/wiki/Electron_(software_framework)',
    Description: [
      'A framework for building desktop applications from web technologies (HTML, CSS, JavaScript, and more) by using Chromium browser engine and Node.js runtime.',
    ],
  },
  {
    Technology: 'R',
    Website: 'https://en.wikipedia.org/wiki/R_(programming_language)',
    Description: [
      'A programming language for calculating or developing software for statistics, graphing, or data analysis.',
    ],
  },
  {
    Technology: 'Python',
    Website: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    Description: [
      'A programming language known for ease of use and readability, often used for data science, web development, and software prototyping.',
    ],
  },
  {
    Technology: 'C',
    Website: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    Description: [
      'A programming language from 1970s still used today for performance and low-level access.',
    ],
  },
  {
    Technology: 'C++',
    Website: 'https://en.wikipedia.org/wiki/C%2B%2B',
    Description: [
      'A superset of the C programming language with added features and version or platform specific alterations.',
    ],
  },
  {
    Technology: 'Java',
    Website: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
    Description: [
      'An object oriented programming language developed by Oracle featuring high platform compatability through the Java Virtual Machine (JVM).',
    ],
  },
  {
    Technology: 'Supertest',
    Website: 'https://www.npmjs.com/package/supertest',
    Description: [
      'A JavaScript library for testing HTTP assertions via Superagent, an Ajax (Asynchronous JavaScript and XML) client',
    ],
  },
  {
    Technology: 'React Testing Library',
    Website: 'https://testing-library.com/docs/react-testing-library/intro',
    Description: [
      'A JavaScript library for testing React component rendering and functionality by mocking events and user input.',
    ],
  },
  {
    Technology: 'Knex.js',
    Website: 'http://knexjs.org',
    Description: [
      'A JavaScript library for building database agnostic SQL queries.',
    ],
  },
  {
    Technology: 'TypeORM',
    Website: 'https://typeorm.io/#/',
    Description: [
      'A TypeScript library for building database agnostic SQL queries.',
    ],
  },
  {
    Technology: 'PostgreSQL',
    Website: 'https://en.wikipedia.org/wiki/PostgreSQL',
    Description: [
      'A free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.',
    ],
  },
  {
    Technology: 'Redux.js',
    Website: 'https://redux.js.org',
    Description: [
      'A JavaScript library for simplifying the sharing, modification, event response of an application\'s global state.',
      'Redux simplifies state management through encapsulation (reducers) and abstraction (actions).',
    ],
  },
  {
    Technology: 'Redux Thunk',
    Website: 'https://www.npmjs.com/package/redux-thunk',
    Description: [
      'A JavaScript library for Redux.js, featuring dynamic action creators instead explicitly creating every permutation.',
      'A thunk is a function that wraps an expression to delay its evaluation.',
    ],
  },
  {
    Technology: 'jQuery',
    Website: 'https://en.wikipedia.org/wiki/JQuery',
    Description: [
      'A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax (Asynchronous JavaScript and XML).',
      'As of June, 2020, jQuery is still used by more than 75% of the 10 million most popular websites (w3techs.com).',
      'Modern JavaScript (ES6/2015+) has already implemented the most common jQuery features into the language.',
    ],
  },
  {
    Technology: 'Bootstrap',
    Website: 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)',
    Description: [
      'A CSS framework for responsive web pages, laybout, typography, forms, buttons, navigation, and more.',
    ],
  },
  {
    Technology: 'Material-UI',
    Website: 'https://material-ui.com/',
    Description: [
      'A stylized React component library for responsive web pages, laybout, typography, forms, buttons, navigation, and more.',
    ],
  },
  {
    Technology: 'Angular',
    Website: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
    Description: [
      'A TypeScript framework for developing web application from a hierarchy of components composed of an HTML template and TypeScript handler.',
    ],
  },
  {
    Technology: 'Express.js',
    Website: 'https://expressjs.com/',
    Description: [
      'A Node.js JavaScript framework simplifying the creation of HTTP servers.',
    ],
  },
  {
    Technology: 'Django',
    Website: 'https://www.djangoproject.com/start/overview/',
    Description: [
      'A Python framework for creating web applications, with built in tools for front end, back end, and security.',
    ],
  },
  {
    Technology: 'SQLite',
    Website: 'https://en.wikipedia.org/wiki/SQLite',
    Description: [
      'A relational database management system (RDBMS) for a small, embedded database engine.',
      'SQLite uses a dynamically and weakly typed SQL syntax',
    ],
  },
  {
    Technology: 'LESS',
    Website: 'http://lesscss.org/#overview',
    Description: [
      'A CSS Preprocessor, LESS is a superscript of CSS style sheet language with extra features.',
      'Less popular than SASS.',
    ],
  },
  {
    Technology: 'Axios',
    Website: 'https://www.npmjs.com/package/axios',
    Description: [
      'A JavaScript library which simplifies Ajax/XMLHttpRequests and adds features and security.',
      'More browser-compatible than modern JavaScript\'s Fetch API.',
    ],
  },
  {
    Technology: 'JWT',
    Website: 'https://en.wikipedia.org/wiki/JSON_Web_Token',
    Description: [
      'JSON Web Token is an Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON data.',
      'Used for authentication of data, but it should never package sensitive data because the payload can always be read.',
    ],
  },
  {
    Technology: 'Session management',
    Website: 'https://en.wikipedia.org/wiki/Session_(computer_science)',
    Description: [
      'Using a unique session token (via an authorization HTTP cookies) to lookup a client\'s session id and information.',
      'All data, remains server-side, unlike JWTs.',
    ],
  },
  {
    Technology: 'SQL',
    Website: 'https://en.wikipedia.org/wiki/SQL',
    Description: [
      'Structured Query Language is a language used in programming and designed for managing data held in a relational database management system (RDBMS).',
      'Different RDBMSs have extended the language in different ways, such as altering query output or adding custom constraints.'
    ],
  },
  {
    Technology: 'Flask',
    Website: 'https://en.wikipedia.org/wiki/Flask_(web_framework)',
    Description: [
      'A micro web framework for Python servers and web applications.',
      'Has extensions for adding features of other, more robust web frameworks.',
    ],
  },
  {
    Technology: 'Pipenv',
    Website: 'https://pypi.org/project/pipenv/',
    Description: [
      'A tool that combines PIP and VitualENV for simple and contained python dependency management.',
      'Prevents bloat and conflicts in the global environment.',
    ],
  },
  {
    Technology: 'GraphQL',
    Website: 'https://en.wikipedia.org/wiki/GraphQL',
    Description: [
      'A data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.',
      'The query and answer both share the same shape.',
    ],
  },
  {
    Technology: 'Pandas',
    Website: 'https://en.wikipedia.org/wiki/Pandas_(software)',
    Description: [
      'A software library written for Python for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series.',
    ],
  },
  {
    Technology: 'styled-components',
    Website: 'https://styled-components.com/docs',
    Description: [
      'A JavaScript library for React.js which adds programmable CSS styling to component constructors.',
      'Includes many additional features of CSS preprocessors (SASS, LESS, etc.).',
    ],
  },
  {
    Technology: 'bcrypt',
    Website: 'https://en.wikipedia.org/wiki/Bcrypt',
    Description: [
      'A password-hashing function based on the Blowfish cipher incorporating a salt to protect against rainbow table attacks and a slowness factor to resist brute-force search attacks.',
    ],
  },
  {
    Technology: 'Markdown',
    Website: 'https://en.wikipedia.org/wiki/Markdown',
    Description: [
      'A lightweight markup language with plain-text-formatting syntax creating rich text output from similarly readable plain text input.',
    ],
  },
  {
    Technology: 'PIP',
    Website: 'https://en.wikipedia.org/wiki/Pip_(package_manager)',
    Description: [
      'The standard package-management system used to install and manage software packages written in Python',
      'Used to install individual packages or, more commonly, a list of packages in a "requirements.txt" file.',
    ],
  },
  {
    Technology: 'Spring Framework',
    Website: 'https://en.wikipedia.org/wiki/Spring_Framework',
    Description: [
      'An application framework and inversion of control container for the Java platform.',
      'Used with many extensions for building web applications on top of the Java EE (Enterprise Edition) platform.',
    ],
  },
  {
    Technology: 'Spring Boot',
    Website: 'https://en.wikipedia.org/wiki/Spring_Framework#Spring_Boot',
    Description: [
      'A Spring Framework extension for simplifying the creation of stand-alone, production-grade Java applications.',
    ],
  },
  {
    Technology: 'Apache Maven',
    Website: 'https://maven.apache.org',
    Description: [
      'A software project management and comprehension tool, used for installing, extending, and building Java packages.',
    ],
  },
  {
    Technology: 'Create React App',
    Website: 'https://reactjs.org/docs/create-a-new-react-app.html',
    Description: [
      'An integrated toolchain for creating and managing React.js applications.',
      'Does not support static or server-side rendering, by default.',
    ],
  },
  {
    Technology: 'Gatsby.js',
    Website: 'https://www.gatsbyjs.org/docs',
    Description: [
      'A toolchain and build tool for creating and managing React.js applications.',
      'Features GraphQL and a wide range of plugins for building static files for deployment without a server.',
    ],
  },
  {
    Technology: 'Heroku',
    Website: 'https://en.wikipedia.org/wiki/Heroku',
    Description: [
      'A cloud platform as a service (PaaS) featuring simplicity of continuous integration and deployment.',
    ],
  },
  {
    Technology: 'JUnit',
    Website: 'https://junit.org/junit4',
    Description: [
      'JUnit is a simple framework to write repeatable tests for Java applications.',
    ],
  },
  {
    Technology: 'AWS',
    Website: 'https://en.wikipedia.org/wiki/Amazon_Web_Services',
    Description: [
      'Amazon Web Services provides on-demand cloud computing platforms and APIs on a metered pay-as-you-go basis.',
    ],
  },
  {
    Technology: 'Apache Tomcat',
    Website: 'https://en.wikipedia.org/wiki/Apache_Tomcat',
    Description: [
      'An open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.',
      'Used as the default servlet for Spring Web MVC applications.',
    ],
  },
  {
    Technology: 'Netty',
    Website: 'https://en.wikipedia.org/wiki/Netty_(software)',
    Description: [
      'A non-blocking I/O client-server framework for the development of Java network applications.',
      'Used as the default server for Spring WebFlux applications.'
    ],
  },
  {
    Technology: 'Hibernate',
    Website: 'https://en.wikipedia.org/wiki/Hibernate_(framework)',
    Description: [
      'An object-relational mapping (ORM) tool for the Java programming language, for mapping an object-oriented domain model to a relational database.',
      'Used as the default data access technology behind Spring Data JPA, Spring Data JDBC, and more.'
    ],
  },
  {
    Technology: 'Kubernetes',
    Website: 'https://en.wikipedia.org/wiki/Kubernetes',
    Description: [
      'An open-source container-orchestration system for automating application deployment, scaling, and management.',
    ],
  },
  {
    Technology: 'Docker',
    Website: 'https://en.wikipedia.org/wiki/Docker_(software)',
    Description: [
      'A set of platform as a service (PaaS) products that uses OS-level virtualization to deliver software in containers.',
      'Containers are isolated bundles of software and its libraries and configurations, all run by a single operating system kernel using fewer resources than virtual machines.',
      'Often used with Kubernetes for scaling and network handling.'
    ],
  },
  {
    Technology: 'Yarn',
    Website: 'https://yarnpkg.com/getting-started',
    Description: [
      'Yarn is a package manager for JavaScript modules also using NPM registry.',
      'Features greater installation speed and extra automated dependency conflict resolution than NPM.',
    ],
  },
  {
    Technology: 'Webpack',
    Website: 'https://en.wikipedia.org/wiki/Webpack',
    Description: [
      'A JavaScript bundler which generates static assets from module dependencies and web application assets.',
    ],
  },
  {
    Technology: 'Babel',
    Website: 'https://babeljs.io/docs/en',
    Description: [
      'A toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments/',
    ],
  },
  {
    Technology: 'MongoDB',
    Website: 'https://en.wikipedia.org/wiki/MongoDB',
    Description: [
      'A NoSQL database program using JSON-like documents with optional schemas.',
      'Outperforms SQL databases for simple queries.',
    ],
  },
  {
    Technology: 'Netlify',
    Website: 'https://docs.netlify.com',
    Description: [
      'A cloud platform as a service (PaaS) featuring simplicity of continuous integration and deployment for front ends and serverless APIs.',
    ],
  },
  {
    Technology: 'Vercel',
    Website: 'https://vercel.com',
    Description: [
      'A cloud platform as a service (PaaS) featuring simplicity of continuous integration and deployment for front ends and serverless APIs.',
    ],
  },
  {
    Technology: 'Cloudflare',
    Website: 'https://en.wikipedia.org/wiki/Cloudflare',
    Description: [
      'A combination of content-delivery-network (CDN) services, DDoS mitigation, Internet security, and distributed domain-name-server services.',
    ],
  },
  {
    Technology: 'Figma',
    Website: 'https://www.figma.com',
    Description: [
      'A cloud software as a service (SaaS) for UI/UX design, prototyping, and collaboration.',
      'A web application most similar to Sketch in features, but without Mac OS requirement.',
    ],
  },
  {
    Technology: 'Trello',
    Website: 'https://www.figma.com',
    Description: [
      'A web-based Kanban-style list-making application for project management and collaboration.',
      'Developed by Atlassian, the same company developing JIRA, using similar UI and features.',
    ],
  },
  {
    Technology: 'Regular Expression',
    Website: 'https://en.wikipedia.org/wiki/Regular_expression',
    Description: [
      'A sequence of characters that define a search pattern.',
      'Used by string searching algorithms for "find" or "find and replace" or for input validation.',
    ],
  },
  {
    Technology: 'XSLT/XPath',
    Website: 'https://en.wikipedia.org/wiki/XPath',
    Description: [
      'A query language for selecting nodes from an XML document.',
      'Used by to conditionally select HTML document nodes or their content/attributes for manipulation or parsing data.',
    ],
  },
  {
    Technology: 'C#',
    Website: 'https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29',
    Description: [
      'A type-safe object-oriented programming language designed by Microsoft alongside the .NET ecosystem.',
    ],
  },
  {
    Technology: 'Team Foundation Version Control (TFVC)',
    Website: 'https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/what-is-tfvc',
    Description: [
      'A centralized version control system by Microsoft, integrated with Visual Studio.',
      'Uses path-based branching and stores history only on a central server, compared to Git locally tracking all history and branching.',
    ],
  },
  {
    Technology: 'Azure DevOps Server',
    Website: 'https://en.wikipedia.org/wiki/Azure_DevOps_Server',
    Description: [
      'A Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing, and release management capabilities.',
    ],
  },
  {
    Technology: 'MSTest',
    Website: 'https://docs.microsoft.com/en-us/dotnet/core/testing/#mstest',
    Description: [
      'Microsoft\'s test framework for all .NET languages, with functionality similar to xUnit and NUnit.',
    ],
  },
  {
    Technology: 'ASP.NET',
    Website: 'https://en.wikipedia.org/wiki/ASP.NET',
    Description: [
      'An open-source, server-side web-application framework designed for web development to produce dynamic web pages.',
      'Has multiple programming models for building modular web pages and APIs.'
    ],
  },
  {
    Technology: 'SQL Server Management Studio (SSMS)',
    Website: 'https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms?view=sql-server-ver15',
    Description: [
      'An integrated environment for managing any SQL infrastructure, with built in Microsoft Azure integration',
    ],
  },
  {
    Technology: 'Windows Presentation Foundation (WPF)',
    Website: 'https://docs.microsoft.com/en-us/dotnet/desktop/wpf/overview/',
    Description: [
      'A UI framework for building Windows desktop apps, with more customization than Windows Forms.',
    ],
  },
  {
    Technology: '.NET Framework',
    Website: 'https://docs.microsoft.com/en-us/dotnet/framework/get-started/overview',
    Description: [
      'A Windows only version of .NET which is being deprecated after version 4 for better cross-platform consolidation.',
    ],
  },
  {
    Technology: '.NET',
    Website: 'https://docs.microsoft.com/en-us/dotnet/core/introduction',
    Description: [
      '.NET is a free, open-source development platform for building many kinds of apps, using the C# programming language.',
    ],
  },
  {
    Technology: 'Windows Forms (WinForms)',
    Website: 'https://docs.microsoft.com/en-us/dotnet/desktop/winforms/overview/',
    Description: [
      'A UI framework for rapidly building Windows desktop apps, simpler than Windows Presentation Foundation.',
    ],
  },
  {
    Technology: 'Windows API (Win32 API)',
    Website: 'https://docs.microsoft.com/en-us/windows/win32/desktop-programming',
    Description: [
      'The API for native C/C++ Windows applications that require direct access to Windows and hardware.',
    ],
  },
  {
    Technology: 'Microsoft Teams',
    Website: 'https://en.wikipedia.org/wiki/Microsoft_Teams',
    Description: [
      'A communication suite platform catered toward businesses which lets users communicate with voice calls, video calls, text messaging, media and files, with built in Microsoft 365 integration.',
    ],
  },
  {
    Technology: 'Slack',
    Website: 'https://en.wikipedia.org/wiki/Slack_(software)',
    Description: [
      'A communication platform catered toward businesses which lets users communicate with voice calls, video calls, text messaging, media and files.',
    ],
  },
  {
    Technology: 'Discord',
    Website: 'https://en.wikipedia.org/wiki/Discord_(software)',
    Description: [
      'A communication platform which lets users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of community servers.',
    ],
  },
  {
    Technology: 'Zoom',
    Website: 'https://en.wikipedia.org/wiki/Zoom_(software)',
    Description: [
      'A video conferencing software used by businesses and academics which grew in popularity during the COVID-19 pandemic.',
    ],
  },
  {
    Technology: 'OBS Studio',
    Website: 'https://obsproject.com/',
    Description: [
      'A free and open source software for video recording and live streaming.',
    ],
  },
  {
    Technology: 'Visual Studio',
    Website: 'https://visualstudio.microsoft.com/vs/',
    Description: [
      'A comprehensive integrated development environment (IDE) for .NET and C++ developers on Windows.',
    ],
  },
  {
    Technology: 'Visual Studio Code',
    Website: 'https://code.visualstudio.com/',
    Description: [
      'A free and open source text and code editor developed by Microsoft, with extensions to support just about any programming language.',
    ],
  },
  {
    Technology: 'GNU Image Manipulation Program (GIMP)',
    Website: 'https://www.gimp.org/',
    Description: [
      'A free and open source rastorized graphics editor, with functionality similar to Adobe Photoshop.',
    ],
  },
  {
    Technology: 'Notepad++',
    Website: 'https://notepad-plus-plus.org/',
    Description: [
      'A free and open source text and code editor, with functionality similar to Visual Studio Code.',
    ],
  },
  {
    Technology: 'Inkscape',
    Website: 'https://inkscape.org/about/',
    Description: [
      'A free and open source vector graphics editor, with functionality similar to Adobe Illustrator.',
    ],
  },
  {
    Technology: 'Kdenlive',
    Website: 'https://kdenlive.org/en/features/',
    Description: [
      'A free and open source video editor, with functionality similar to Adobe Premiere Pro or DaVinci Resolve.',
    ],
  },
  {
    Technology: 'Knockout (KO)',
    Website: 'https://kdenlive.org/en/features/',
    Description: [
      'A JavaScript library for dynamic user interfaces with underlying data models, for a Model-View-ViewModel (MVVM) pattern.',
    ],
  },
  {
    Technology: 'Sencha Ext JS',
    Website: 'https://www.sencha.com/products/extjs/',
    Description: [
      'A JavaScript framework for building data-intensive, cross-platform web and mobile applications for any modern device.',
    ],
  },
]

export default data
