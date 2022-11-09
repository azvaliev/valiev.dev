export const titleToIconsMapping = {
  "React JS": "/img/techicons/react.webp",
  "Next JS": "/img/techicons/next.webp",
  "TypeScript": "/img/techicons/typescript.webp",
  "Cypress": "/img/techicons/cypress.webp",
  "Tailwind CSS": "/img/techicons/tailwind.webp",
  "Node JS": "/img/techicons/node.webp",
  "Redis": "/img/techicons/redis.webp",
  "Solana": "/img/techicons/solana.webp",
  "HTML": "/img/techicons/html.webp",
  "CSS": "/img/techicons/css.webp",
  "Amazon Web Services": "/img/techicons/aws.webp",
  "JavaScript": "/img/techicons/js.webp",
  "Python": "/img/techicons/python.webp",
  "Git": "/img/techicons/git.webp",
  "Github": "/img/techicons/github.webp",
  "TD Ameritrade": "/img/techicons/td.webp"
}

type PortfolioDataItem = {
  title: string;
  img: string;
  desc: string;
  links: Array<{ name: string, link: string }>;
  tech: Array<keyof typeof titleToIconsMapping>;
}

const portfolioData: Array<PortfolioDataItem> = [
  {
    title: "Meta Message",
    img: "/portfolio/metamessage.webp",
    desc: "Meta Message is an app that allows direct, end-to-end encrypted conversation between two Solana wallet addresses. It is able to offer a new level of security through a disconnect between the messsage being sent and key value store.",
    links: [
      {
        name: "Github",
        link: "https://github.com/azvaliev/MetaMessage"
      }, {
        name: "View through Vercel",
        link: "https://meta-message-f1uod8qkp-azatvaliev.vercel.app/welcome"
      }
    ],
    tech: [
      "React JS",
      "Next JS",
      "TypeScript",
      "Cypress",
      "Tailwind CSS",
      "Node JS",
      "Redis",
      "Solana"
    ]
  }, {
    title: "Tri Cities Lawn & Irrigation",
    img: "/portfolio/tclawnirrigation.webp",
    desc: "Tri Cities Lawn & Irrigation is a local service based business in Pasco, WA. The owner, Rudy wanted to establish a solid online prescence to draw in new clients searching and showcase his work. Since going online, Rudy has recieved many new prospective clients through the site",
    links: [{
      name: "Check it out",
      link: "https://tclawnirrigation.com"
    }],
    tech: [
      "Next JS",
      "React JS",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Amazon Web Services"
    ]
  }, {
    title: "Enhanced CEO",
    img: "/portfolio/enhancedceo.webp",
    desc: "Enhanced CEO is website to offer coaching services with productivity & cognitive enhancement. After helping out colleagues with supplement stacks for everything from hangovers and presentations to exams, the owner wanted to decided to launch this as a service.",
    links: [{
      name: "Check it out",
      link: "https://enhancedceo.com"
    }],
    tech: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Amazon Web Services"
    ]
  }, {
    title: "Python Call Spread Analysis",
    img: "/portfolio/spreads.webp",
    desc: "Algorithmic trading remains all the talk, and for good reason. This project works with the TD Ameritrade API to retrieve data about option spreads for a given stock and provides strategies. Later version of this may be combined with an automated DCF app",
    links: [{
      name: "Github",
      link: "https://github.com/azvaliev/spreadanalysis"
    }],
    tech: [
      "Python",
      "Git",
      "Github",
      "TD Ameritrade"
    ]
  }
];

export default portfolioData;
