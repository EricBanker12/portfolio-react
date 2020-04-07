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
      'Built using HTML5, CSS3, and LESS.',
      {
        link: 'https://github.com/Wunderlist-bw/User-Interface/tree/eric-banker',
        text: 'GitHub Repository',
      }
    ],
    website: 'https://brave-goldwasser-c0f535.netlify.com/',
  },
  {
    title: 'My Top Nine',
    image: Image2,
    paragraphs: [`An online favorites list, My Top Nine allows users to create
    accounts and form categorized lists of up to 9 items.`],
    bullets: [
      'Constructed a themed and responsive single page application with customized Bootstrap 4.0 styling.',
      'Programmed functional, state managed forms for creation and editing of categorized list entries.',
      'Built using React and Bootstrap.',
      {
        link: 'https://github.com/bw-my-top-nine/front-end',
        text: 'GitHub Repository',
      }
    ],
    website: 'https://my-top-nine-app.netlify.com/',
  },
  {
    title: 'Project 3',
    image: Image3,
    paragraphs: [` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
    eget arcu dictum varius duis.`],
    bullets: ['https://example.com'],
    website: '',
  },
  {
    title: 'Project 4',
    image: Image4,
    paragraphs: [` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
    eget arcu dictum varius duis.`],
    bullets: ['https://example.com'],
    website: '',
  },
  {
    title: 'Project 5',
    image: Image5,
    video: Video5,
    paragraphs: [` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
    eget arcu dictum varius duis.`],
    bullets: ['https://example.com'],
    website: '',
  },
  {
    title: 'Project 6',
    image: Image6,
    paragraphs: [` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
    eget arcu dictum varius duis.`],
    bullets: ['https://example.com'],
    website: '',
  },
]

export default data
