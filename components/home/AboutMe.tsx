import { Section } from '@/components/index';
import Image from 'next/image';
const AboutMe = () => (
  <Section
    id='about'
    header='About Me'
    color='section--bg--grayscale-100'
    textcolor='section--text--secondary-100'>
    <div className='aboutgrid'>
      <div className='about__image'>
        <Image
          src='https://media.graphassets.com/resize=fit:clip,width:1500/Lc0ORCJvQxy0l5G2vNED'
          layout='fill'
          alt='portrait'
          objectFit='cover'
        />
      </div>
      <p className='about__body'>
        Hi, my name is Edson Jaramillo. I&apos;m a freelance full stack developer who specializes in
        creating amazing websites for small businesses. I also happen to be a Python Instructor for
        all ages, from teenagers to adults. I teach the importance of how to reusable, performant
        and most importantly readable code. I graduated with a computer science degree at the
        University of Alabama in Huntsville. What separates me from other developers is that I have
        an eye for detail and care about the user experience just as much as the code itself. My
        ultimate goal is always to create something that not only looks great but works flawlessly
        too.
      </p>
    </div>
  </Section>
);

export default AboutMe;
