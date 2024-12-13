export type SongProps = {
  title?: string;
  artist?: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: 'Lie Again',
    artist: 'Giveon',
    image: require('.//../../public/songs/1.jpg'),
    link: '/songs/1.jpg',
  },
  {
    title: "Martin's Sofa",
    artist: 'Headie One',
    image: require('.//../../public/songs/2.jpg'),
    link: '/songs/2.jpg',
  },
  {
    title: 'Let Me Go',
    artist: 'Daniel Ceasar',
    image: require('.//../../public/songs/3.jpg'),
    link: '/songs/3.jpg',
  },
  {
    title: 'One Up',
    artist: 'Central Cee',
    image: require('.//../../public/songs/4.jpg'),
    link: '/songs/4.jpg',
  },
  {
    title: 'Glitter',
    artist: 'BENEE',
    image: require('.//../../public/songs/5.jpg'),
    link: '/songs/5.jpg',
  },
  {
    title: 'Lemme Land?',
    artist: 'Canking, Ess2Mad',
    image: require('.//../../public/songs/6.png'),
    link: '/songs/6.png',
  },
  {
    title: 'Floods',
    artist: 'Lucky Daye',
    image: require('.//../../public/songs/7.jpg'),
    link: '/songs/7.jpg',
  },
  {
    title: 'Nice & Good',
    artist: 'SL, Knucks',
    image: require('.//../../public/songs/8.jpg'),
    link: '/songs/8.jpg',
  },
  {
    title: 'Care',
    artist: 'Sonder',
    image: require('.//../../public/songs/9.jpg'),
    link: '/songs/9.jpg',
  },
];
