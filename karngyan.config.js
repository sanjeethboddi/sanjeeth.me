// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Sanjeeth Boddinagula',
  domain: 'sanjeeth.me', // add without https:// , used in meta tags and share urls
  image: '/images/sanjeeth_cartoon.jpeg',
  email: 'hello@sanjeeth.me',
  googleAnalyticsV4: {
    enabled: true,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'template.karngyan.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: true,
  },
  social: {
    github: 'sanjeethboddi',
    linkedin: 'sanjeethboddi',
    facebook: 'sanjeethboddi',
    twitter: 'sanjeethboddi',
    instagram: 'sanjeethboddi',
    codestats: 'sanjeethboddi' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/sanjeethboddi'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: false,
    pdfUrl: '/RESUME_SANJEETH_BODDINAGULA.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Sonoma '},
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'God', designation: 'Creator, Universe', image: '/images/.jpeg', linkedin: 'https://www.linkedin.com/in/', content: 'Sanjeeth is built different.' },
      { name: 'Satan', designation: 'CEO, Hell', image: '/images/.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Hate to say.. but he is a good guy.!' },
    ]
  },
  loadingIndicator: {
    name: 'chasing-dots'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a coffee',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software engineer and a part time freelancer. i blog tech, write a weekend newsletter called software shots, and tinker with side projects every now n then.',
        words: ['developer', 'designer', 'engineer', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or hello@sanjeeth.me'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
