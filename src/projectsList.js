import twitterClone from './images/nextJSTwitterClone.png';
import coMake from './images/co-make.png';
import LAN from './images/LAN.jpg';
import ayati from './images/7ayatiCafe.png'

const projectsList = [
  {
    id: 0,
    projectName: 'Co-Make',
    hrefLink: 'https://co-make-tt33.herokuapp.com/',
    gitHubLink: 'https://github.com/TT-33-Co-Make/frontend',
    techStack: 'React, Styled-Components, GSAP, SQLite, Jest',
    description: 'Have your voice heard on the issues you would like to see resolved in your community',
    imgSrc: coMake,
    imgAlt: 'Co-Make project'
  },
  {
    id: 1,
    projectName: '7ayati Cafe & Hookah Lounge',
    hrefLink: 'https://7ayati.vercel.app/',
    gitHubLink: 'https://github.com/Plofland/7ayati',
    techStack: 'NextJS, Styled-Components',
    description: 'Static business website.',
    imgSrc: ayati,
    imgAlt: 'Cafe & hookah bar static business website'
  },
  {
    id: 2,
    projectName: 'Lambda Alumni Association',
    hrefLink: 'https://a.lambdaalumninetwork.dev/welcome',
    gitHubLink: 'https://github.com/Plofland/lan-be-a',
    techStack: 'React, AntDesign, Redux, NodeJS, PostgreSQL',
    description: 'Unified, private community and dynamic site for Lambda school alumni to connect, advance their careers, and give back.',
    imgSrc: LAN,
    imgAlt: 'Lambda Alumni Association project'
  },
  {
    id: 3,
    projectName: 'Twitter Clone',
    hrefLink: 'https://nextjs-twitter-clone.netlify.app/',
    gitHubLink: 'https://github.com/Plofland/next-twitter-clone',
    techStack: 'NextJS, Tailwind',
    description: 'Twitter mobile clone',
    imgSrc: twitterClone,
    imgAlt: 'Twitter Clone project'
  },
];

export default projectsList;
