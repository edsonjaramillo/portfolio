import { CTA, AboutMe, HeadOpenGraph } from '@/components/index';

const HomePage = () => {
  return (
    <>
      <HeadOpenGraph
        title={`Edson Jaramillo's Web Development Portfolio`}
        description='Edson is a full stack web developer based in the United States who specializes in creating scalable, performant, and accessible web applications.'
        image='https://media.graphassets.com/Hxh7E2dMQkG80kY4j8Jn'
        alt={`Edson Jaramillo's Web Development Portfolio`}
      />
      <CTA />
      <AboutMe />
    </>
  );
};

export default HomePage;
