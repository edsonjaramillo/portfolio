import { navbarLinks } from '@/components/shared/Navbar';
import { getSitemapLinks, graphCMSClient, ProjectType } from '@/lib/graphcms';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { HeadOpenGraph } from '@/components/index';

interface SitemapPageProps {
  projects: ProjectType[];
}

const Sitemap = ({ projects }: SitemapPageProps) => (
  <>
    <HeadOpenGraph
    title='Sitemap'
    description='Sitemap for all of the pages on the website.'
    image='https://media.graphassets.com/Hxh7E2dMQkG80kY4j8Jn'
    alt={`Edson Jaramillo's Web Development Portfolio`}
    />
    <div className='sitemap responsive-width-sitemap'>
      <h1 className='sitemap__header'>Sitemap</h1>
      <hr />
      <div className='sitemap__grid'>
        <SitemapSection header='Main'>
          <SitemapLink slug='/' name='Homepage' />
          {navbarLinks.map((link) => (
            <SitemapLink key={link.name} slug={link.route} name={link.name} />
          ))}
        </SitemapSection>
        <SitemapSection header='Legal'>
          <SitemapLink slug='/policy' name='Privacy Policy' />
          <SitemapLink slug='/terms' name='Terms and Conditions' />
        </SitemapSection>
        <SitemapSection header='Projects'>
          {projects.map((project) => (
            <SitemapLink key={project.id} slug={`/project/${project.slug}`} name={project.name} />
          ))}
        </SitemapSection>
      </div>
    </div>
  </>
);

interface SitemapSectionProps {
  header: string;
  children?: React.ReactNode;
}

const SitemapSection = ({ header, children }: SitemapSectionProps) => (
  <section className='sitemap__section'>
    <h2 className='sitemap__section--title'>{header}</h2>
    {children}
  </section>
);

interface SitemapLinkProps {
  slug: string;
  name: string;
}

const SitemapLink = ({ slug, name }: SitemapLinkProps) => (
  <Link href={slug}>
    <a className='sitemap__link'>{name}</a>
  </Link>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { projects } = await graphCMSClient.request(getSitemapLinks);

  return {
    props: { projects },
  };
};

export default Sitemap;
