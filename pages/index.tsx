import type { NextPage } from 'next';
import { CTA, AboutMe, HeadOpenGraph } from '@/components/index';

const HomePage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title={`Edson Jaramillo's Web Development Portfolio`}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis!'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
      />
      <CTA />
      <AboutMe />
    </>
  );
};

export default HomePage;
