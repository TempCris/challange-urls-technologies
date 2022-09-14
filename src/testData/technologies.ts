export interface ITechs {
  id: number;
  name: string;
  criteria: {
    dom?: RegExp;
    pat?: RegExp;
    q?: RegExp;
  };
}

export const technologies: ITechs[] = [
  {
    id: 0,
    name: 'Google Analytics 98',
    criteria: {
      dom: /^(analytics.google.com)$|^(www.google-analytics.com)$/gi,
      q: /(?<=tid=)G-/gi
    }
  },
  {
    id: 1,
    name: 'Optimizeley JS',
    criteria: {
      dom: /^(cdn.optimizely.com)$/gi,
      pat: /^\/js/gi
    }
  },
  {
    id: 2,
    name: 'Node JS',
    criteria: {
      pat: /^\/b\/ss\//gi
    }
  },
  {
    id: 3,
    name: 'Google Analytics 784',
    criteria: {
      dom: /^(www.google-analytics.com)$/gi,
      q: /(?<=tid=)UA-/gi
    }
  },
  {
    id: 4,
    name: 'Webpack',
    criteria: {
      dom: /^^(webpack.com)$/gi
    }
  },
  {
    id: 5,
    name: 'Optimizeley typescript',
    criteria: {
      dom: /^(cdn.optimizely.com)$/gi,
      pat: /^\/ts/gi
    }
  },
  {
    id: 6,
    name: 'Babel',
    criteria: {
      pat: /^\/chunk.js/gi
    }
  }
];
