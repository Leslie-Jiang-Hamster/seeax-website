export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: 'Chinese Knot',
    description:
      'App for Promoting the Intangible Cultural Heritage of Chinese Knots',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/victorcodess/odunsi-web3-folio',
    demo: 'https://www.odunsi.xyz/',
    image: require('.//../../public/projects/0.jpg'),
    available: true,
  },
  {
    id: 1,
    name: 'IREDI VI System',
    description: 'VI Visual System Design for a Robot Hand Company',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/victorcodess/interlock',
    demo: 'https://interlock-teal.vercel.app/',
    image: require('.//../../public/projects/1.png'),
    available: true,
  },
  {
    id: 2,
    name: 'Echoes of Nuo',
    description:
      'Digital platform dedicated to revitalizing Nuo opera, an intangible Chinese cultural heritage',
    technologies: ['React', 'Next.js', 'Prismic CMS'],
    github: 'https://github.com/victorcodess/synthetix',
    demo: 'https://synthetix-iota.vercel.app/',
    image: require('.//../../public/projects/2.png'),
    available: true,
  },
  {
    id: 3,
    name: 'Mooyland',
    description: '',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/victorcodess/propellent',
    demo: 'https://propellent.vercel.app/',
    image: require('.//../../public/projects/3.png'),
    available: true,
  },
  {
    id: 4,
    name: '3D Card',
    description: '',
    technologies: ['React', 'CSS', 'Chart.js'],
    github: 'https://github.com/victorcodess/weather-forecast-website',
    demo: 'https://sky-watch.vercel.app/',
    image: require('.//../../public/projects/4.png'),
    available: true,
  },
  {
    id: 5,
    name: 'Mask Puzzle',
    description: '',
    technologies: ['JavaScript', 'CSS', "Bit.ly's API"],
    github: 'https://github.com/victorcodess/url-shortener',
    demo: 'https://url-shortener-nine-delta.vercel.app',
    image: require('.//../../public/projects/5.png'),
    available: true,
  },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: 'Hebron Statup Lab Website',
    description:
      'SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 2,
    name: 'RAGS Scrubs Website',
    description:
      'An image generator website that allows users to generate, combine, and download images.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 3,
    name: 'Crown Branding Agency Website',
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image:
      '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75',
    available: false,
  },
  {
    id: 4,
    name: 'Titi Mobile App',
    description:
      'TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.',
    technologies: ['UX Research', 'UI Design', 'Prototyping'],
    github: '',
    demo: '',
    image: '/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75',
    available: false,
  },
];
