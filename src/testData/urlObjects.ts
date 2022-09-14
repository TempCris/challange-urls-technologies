export interface IUrls {
  url: string;
  dom: string;
  pat: string;
  q: string;
}

export const urls: IUrls[] = [
  {
    // Babel
    url: 'https://history.nationalgeographic.com.es/chunk.js?tid=G-5649295&&test1=8417920',
    dom: 'history.nationalgeographic.com.es',
    pat: '/chunk.js',
    q: '?tid=G-5649295&&test1=8417920'
  },
  {
    // Optimizely js
    url: 'https://cdn.optimizely.com/js/new-particle-discovered-higgs-boson-machine_15892.news?cid=5781649&test1=5264787',
    dom: 'cdn.optimizely.com',
    pat: '/js/new-particle-discovered-higgs-boson-machine_15892.news',
    q: '?cid=5781649&test1=5264787'
  },
  {
    // Node JS
    url: 'https://es.wikipedia.org/b/ss/other?cid=7951465&test1=4258625',
    dom: 'es.wikipedia.org',
    pat: '/b/ss/other',
    q: '?cid=7951465'
  },
  {
    // Google Analytics 98
    url: 'https://analytics.google.com/biography/Nelson-Mandela.biography?tid=G-9i9w9djkssd&&test1=4896752',
    dom: 'analytics.google.com',
    pat: '/biography/Nelson-Mandela.biography',
    q: '?tid=G-9i9w9djkssd&&test1=4896752'
  },
  {
    // Google Analytics 784
    url: 'https://www.google-analytics.com/event/World-War-I.event?tid=UA-9i9w9djkssd&&test1=4896752',
    dom: 'www.google-analytics.com',
    pat: '/event/World-War-I.event',
    q: 'tid=UA-9i9w9djkssd&&test1=4896752'
  },
  {
    // Webpack
    url: 'https://webpack.com/aircraft/f-5e-tiger-ii.aircraft?cid=1789632&test1=5247852',
    dom: 'webpack.com',
    pat: '/aircraft/f-5e-tiger-ii.aircraft',
    q: '?cid=1789632'
  },
  {
    // Optimizely ts
    url: 'https://cdn.optimizely.com/ts/new-particle-discovered-higgs-boson-machine_15892.news?cid=5781649&test1=5264787',
    dom: 'cdn.optimizely.com',
    pat: '/ts/new-particle-discovered-higgs-boson-machine_15892.news',
    q: '?cid=5781649&test1=5264787'
  },
  {
    // Google Analytics 98
    url: 'https://www.google-analytics.com/biography/Nelson-Mandela.biography?tid=G-9i9w9djkssd&&test1=4896752',
    dom: 'www.google-analytics.com',
    pat: '/biography/Nelson-Mandela.biography',
    q: '?tid=G-9i9w9djkssd&&test1=4896752'
  },
  {
    // Default Tech
    url: 'https://www.webmd.com/ss/slideshow-7-most-effective-exercises.ss?cid=8345672&test1=7364281',
    dom: 'www.webmd.com',
    pat: '/ss/slideshow-7-most-effective-exercises.ss',
    q: '?cid=8345672'
  },
  {
    // Default Tech
    url: 'https://www.edinburghbicycle.com/blog/types-of-bikes-buying-guide.blog?cid=8524658&test1=5462893',
    dom: 'www.edinburghbicycle.com',
    pat: '/blog/types-of-bikes-buying-guide.blog',
    q: '?cid=8524658'
  }
];
