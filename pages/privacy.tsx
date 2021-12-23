import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Privacy Policy'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <PrivacyPolicy
        name={`Edson's Portfolio`}
        email='edsonajaramillo@gmail.com'
        phone='(256) 673-8968'
        website='https://edson-portfolio.vercel.app/'
      />
    </>
  );
};

export default PrivacyPage;
