import type { NextPage } from 'next';
import { CTA, AboutMe } from '@/components/index';

const HomePage: NextPage = () => {
  return (
    <>
      <CTA />
      <AboutMe />
    </>
  );
};

export default HomePage;
