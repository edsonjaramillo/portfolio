import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => {
  return (
    <>
      <HeadOpenGraph
          title='Privacy Policy'
          description='Privacy Policy for the Edson Jaramillo Web Development Portfolio.'
          image='https://media.graphassets.com/Hxh7E2dMQkG80kY4j8Jn'
          alt={`Edson Jaramillo's Web Development Portfolio`}
      />
      <PrivacyPolicy
        name={`Edson's Portfolio`}
        email='me@edsonjaramillo.com'
        phone='(256) 673-8968'
        website='https://edsonjaramillo.com'
      />
    </>
  );
};

export default PrivacyPage;
