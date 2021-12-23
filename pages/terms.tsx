import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms of Use'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <Terms
        name={`Edson's Portfolio`}
        email='edsonajaramillo@gmail.com'
        phone='(256) 673-8968'
        website='https://edsonjaramillo.com'
      />
    </>
  );
};

export default TermsPage;
