import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms and Conditions'
        description='Terms and Conditions for the Edson Jaramillo Web Development Portfolio.'
        image='https://media.graphassets.com/Hxh7E2dMQkG80kY4j8Jn'
        alt={`Edson Jaramillo's Web Development Portfolio`}
      />
      <Terms
        name={`Edson's Portfolio`}
        email='me@edsonjaramillo.com'
        phone='(256) 673-8968'
        website='https://edsonjaramillo.com'
      />
    </>
  );
};

export default TermsPage;
