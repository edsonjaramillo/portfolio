import type { NextPage } from 'next';
import { toastNotification } from '@/lib/toastNotification';
import { CTA, AboutMe } from '@/components/index';

const Home: NextPage = () => {
  return (
    <>
      <CTA />
      <AboutMe />
    </>
  );
};

export default Home;
