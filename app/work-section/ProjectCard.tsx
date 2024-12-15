import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectProps } from './projectDetails';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedTitle from '../animations/AnimatedTitle';
import AnimatedBody from '../animations/AnimatedBody';
import { motion } from 'framer-motion';

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: '#ffffff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          position: 'relative',
          filter: 'grayscale(100%)',
          transition: 'filter 1s',
        } as React.CSSProperties
      }
      className={`relative z-10 h-[400px] w-full items-stretch justify-center overflow-hidden rounded-2xl bg-center py-0 grid place-items-center md:h-[350px] lg:h-[400px] max-w-[350px]`}
      initial='initial'
      animate='animate'>
      <Image
        src={image}
        alt={name}
        className={`absolute w-full rounded-2xl`}
      />
      <AnimatedTitle
        text={name}
        className={
          'max-w-[90%] text-[40px] leading-none text-white md:text-[30px] md:leading-none lg:max-w-[450px] lg:text-[36px] lg:leading-none mt-60'
        }
        wordSpace={'mr-[0.25em]'}
        charSpace={'-mr-[0.01em]'}
      />
      <AnimatedBody
        text={description}
        className={
          '-mt-4 w-[80%] max-w-[457px] text-[16px] font-semibold text-[#95979D] '
        }
      />
    </motion.div>
  );
};

export default ProjectCard;
