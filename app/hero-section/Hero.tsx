import Link from 'next/link';
import Image from 'next/image';
import { monaSans } from '../fonts/monaSans';
import { motion } from 'framer-motion';
import { imageAnimation, bodyAnimation } from '../animations/animations';
import AnimatedWords from '../animations/AnimatedWords';
import profile from '../../public/profile.webp';
import { useEffect, useState } from 'react';

const Hero = () => {
  const options = { timeZone: 'Asia/Shanghai', hour12: false };
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    ...options,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center md:bg-[url('.//../public/hero.gif')] bg-[size:40%] bg-no-repeat bg-right py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id='home'
      initial='initial'
      animate='animate'>
      <motion.div className='absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#f6f2ea] mix-blend-color'></motion.div>

      <div className='absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]'>
        <div>
          <Link
            href='https://cal.com/seeax/30min'
            target='_blank'
            aria-label='BOOK A CALL'>
            <motion.button
              className='-mt-3 -ml-1 hidden rounded-md border-2 border-black py-2 px-4 text-[14px] font-semibold text-black sm:block  md:text-[14px] lg:block'
              variants={bodyAnimation}>
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className='flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14'>
          <Link
            href='https://x.com/SeeaXin'
            target='_blank'
            aria-label='View X Profile'>
            <motion.p
              className='text-[16px] font-bold text-[#e4ded7] md:text-[16px]'
              variants={bodyAnimation}>
              <Image
                src='/icons/x.png'
                width={20}
                height={20}
                alt=''
              />
            </motion.p>
          </Link>
          <Link
            href='https://www.instagram.com/seeax110'
            target='_blank'
            aria-label='View Instagram Profile'>
            <motion.p
              className='text-[16px] font-bold text-[#e4ded7] md:text-[16px]'
              variants={bodyAnimation}>
              <Image
                src='/icons/instagram.png'
                width={21}
                height={21}
                alt=''
              />
            </motion.p>
          </Link>
          <Link
            href='mailto:Seea.x.liu@outlook.com'
            target='_blank'
            aria-label='Email me'>
            <motion.p
              className='text-[16px] font-bold text-[#e4ded7] md:text-[16px]'
              variants={bodyAnimation}>
              <Image
                src='/icons/email.png'
                width={22}
                height={22}
                alt=''
              />
            </motion.p>
          </Link>
          <Link
            href='/qr.jpg'
            target='_blank'
            aria-label='View Wechat Profile'>
            <motion.p
              className='text-[16px] font-bold text-[#e4ded7] md:text-[16px]'
              variants={bodyAnimation}>
              <Image
                src='/icons/wechat.png'
                width={21}
                height={21}
                alt=''
              />
            </motion.p>
          </Link>
        </div>
      </div>

      <Image
        src={'/avatar.jpg'}
        width={60}
        height={60}
        alt='Profile'
        className='absolute hidden md:block'
        style={{
          borderRadius: '50%',
          top: '44vh',
          right: '20%',
          marginRight: '-30px',
        }}
      />

      <div className='-mt-36 flex flex-col items-start justify-center sm:-mt-20 lg:my-40 lg:mt-25 lg:py-40 md:w-[70%]'>
        <div
          className={`relative flex flex-col justify-center items-center ${monaSans.className}`}>
          <AnimatedWords
            title='Seea Xin'
            style='overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4'
          />
          <motion.div
            className='absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]'
            variants={imageAnimation}></motion.div>
        </div>
      </div>

      <div
        className='absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-end'>
        <motion.div
          className='  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]'
          variants={bodyAnimation}>
          <p className='z-50 text-center text-[16px] font-medium text-[#d2cbc3] md:text-[20px] translate-y-10'>
            UI/UX Designer, China.
            <br />
            {' (UTC+8) ' + formatter.format(clock)}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
