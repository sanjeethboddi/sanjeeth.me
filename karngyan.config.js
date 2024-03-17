// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Sanjeeth Boddinagula',
  domain: 'sanjeeth.me', // add without https:// , used in meta tags and share urls
  image: '/images/sanjeeth_cartoon.jpeg',
  email: 'hello@sanjeeth.me',
  googleAnalyticsV4: {
    enabled: true,
    id: '6255992371'
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
    enabled: false,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_SANJEETH_BODDINAGULA.pdf' // add files in static folder
  },
  calendar: {
    enabled: true,
    url: 'https://cal.com/sanjeethboddi'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Sonoma '},
      {title: 'Laptop', value: 'Macbook Air M2 2022 • 256GB SSD • 16GB RAM'},
      {title: 'Browser', value: 'Arc Browser'}, 
      {title: 'Terminal', value: 'Warp'},
      {title: 'Shell', value: 'zsh'},
      {title: 'Editor', value: 'VS Code'},
      {title: 'Notes', value: 'Obsidian'},
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Wayne State University', src: '/images/work/wayne.png', url: 'https://wayne.edu'},
      { name: 'University of Texas at San Antonio', src: '/images/work/utsa.png', url: 'https://utsa.edu' },
      { name: 'Swiggy', src: '/images/work/swiggy.png', url: 'https://swiggy.com' },
      { name: 'Amazon', src: '/images/work/amazon.png', url: 'https://amazon.com' },
      { name: 'Mihup Communications', src: '/images/work/mihup.jpeg', url: 'https://mihup.com' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { 
        name: '',
        designation: '', 
        image: '/images/.jpeg', 
        linkedin: 'https://www.linkedin.com/in/', 
        content: '.' 
      },
      {
        name: 'God',
        designation: 'Creator, Universe', 
        image: '/images/.jpeg', 
        linkedin: 'https://www.linkedin.com/in/', 
        content: 'Sanjeeth is built different.' 
      },

    ]
  },
  githubCalendar: {
    enabled: true,
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
        calendar: 'wanna chat?',
        buyMeACoffee: 'buy me a coffee',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software engineer and a part time freelancer. i blog tech, write a weekend newsletter called Tech Shark, and tinker with side projects every now n then.',
        words: ['developer', 'engineer', 'programmer', 'coder', 'freelancer'],
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
        subtext: 'what do my mentors and peers say'
      }
    }
  }
}
