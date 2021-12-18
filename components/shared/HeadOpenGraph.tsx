import Head from 'next/head';
import { useRouter } from 'next/router';

type RobotTagTypes = 'index,follow' | 'noindex,nofollow';

interface HeadOpenGraphProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  robots?: RobotTagTypes | undefined;
  children?: any;
}

const HeadOpenGraph = ({
  title,
  description,
  image,
  alt,
  robots,
  children,
}: HeadOpenGraphProps) => {
  const router = useRouter();
  const url = 'https://edson-portfolio.com';
  // const url = 'https://edsonjaramillo.com';

  return (
    <Head>
      <title>{`${title} | Edson Jaramillo`}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={url} />
      <meta property='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={alt} />
      <link rel='canonical' href={`${url}${router.asPath}`} />
      <meta name='theme-color' content='#172c4b' />
      {robots ? (
        <meta name='robots' content={robots} />
      ) : (
        <meta name='robots' content='index,follow' />
      )}

      {children}
    </Head>
  );
};

export default HeadOpenGraph;
