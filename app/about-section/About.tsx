import SongCarousel from './SongCarousel';
import '../animations/animate.css';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedTitle from '../animations/AnimatedTitle';
import Image from 'next/image';

const About = () => {
  return (
    <section
      className='relative z-10 w-full items-center justify-center overflow-hidden bg-[#f6f2ea] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56'
      id='about'>
      <div className='mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]'>
        <AnimatedTitle
          text={'I MAKE ACADEMIC & PROJECT PURSUITS EXTRAORDINARY. '}
          className={
            'mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]'
          }
          wordSpace={'mr-[14px]'}
          charSpace={'mr-[0.001em]'}
        />

        <div className='mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20'>
          <div className='mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] '>
            <AnimatedBody
              text={
                "I'm a person with a wide range of hobbies. I love reading detective novels and delving into the details of movies. I also enjoy planning and management."
              }
            />
            <AnimatedBody
              text={
                'When it comes to outdoor activities, cycling, hiking and rock climbing are my favorites. Spending time with family and chatting with friends always make me happy.'
              }
            />
            <AnimatedBody text={"I'm constantly seeking unlimited progress."} />
            <Image
              src='/avatar.jpg'
              alt='my image'
              width={200}
              height={200}
              className='hidden lg:block absolute right-24 rounded-full object-cover -translate-y-12'
            />
            <Image
              src='/icons/hands.png'
              alt='my image'
              width={200}
              height={200}
              className='hidden lg:block absolute right-24 rounded-full object-cover translate-y-20'
            />
            {/*
            <AnimatedBody
              text={
                'When free, I debate, engage in international exchanges, or enjoy hobbies. '
              }
            />
            <AnimatedBody
              text={'Academic Honors: '}
              bold={true}
            />
            <AnimatedBody
              text={'Won 1st in China Univ. Intelligent Robot Comp'}
            />
            <AnimatedBody
              text={
                'Got 3rd in Natl. & Central South of China College Students Comp. Design.'
              }
            />
            <AnimatedBody
              text={
                "Nominated in UX Design Award (Int'l). - 2nd in Blue Bridge Cup (Provincial)."
              }
            />
            <AnimatedBody
              text={"Completed int'l proj. in NYU Interactive Design."}
            />
            <AnimatedBody
              text={'Project Leadership:'}
              bold={true}
            />
            <AnimatedBody
              text={
                'Led Ice Rock Workshop design, managed campus products & WeChat account.'
              }
            />
            <AnimatedBody text={'Worked as EMSA graphic artist.'} />
            <AnimatedBody
              text={
                'Led "Intelligent Euryale Seed Picking Machine" proj. & developed Lightbattle H5 game. '
              }
            /> */}
          </div>

          <div className='mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]'></div>
        </div>
        <div className='mt-10 flex flex-col md:-mt-0 lg:mt-28'>
          <SongCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
