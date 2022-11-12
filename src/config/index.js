module.exports = {
  siteTitle: 'Ayon Roy | CSE',
  siteDescription:
    'Ayon Roy is a Computer Science and Engineering(CSE) student based in Dhaka, Bangladesh who specializes in developing exceptional, high-quality websites and applications and also specializes in Machine Learning and DeepLearning.',
  siteKeywords:
    'Ayon Roy, Ayon, Ayon, royayon, software engineer, front-end engineer, web developer, javascript, dhaka, bangladesh, ML, DL, backend developper',
  siteUrl: 'https://ayonroy.com/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Ayon Roy',
  location: 'Dhaka, Bangladesh',
  email: 'royshouhag@gmail.com',
  github: 'https://github.com/royayon',
  twitterHandle: '@helloAyon',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/royayon',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/royayon',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/royayon',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shouhag',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/helloAyon',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  }),
};
