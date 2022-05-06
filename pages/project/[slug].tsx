import { GetStaticPaths, GetStaticProps } from 'next';
import { graphCMSClient, getProjectSlugs, ProjectType, getProject } from '@/lib/graphcms';
import { HeadOpenGraph, RichTextRender } from '@/components/index';

interface ProjectPageProps {
  project: ProjectType;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title={project.name}
        description={project.description}
        image={project.image.url}
        alt={project.image.alt}
      />
      <div className='post responsive-width-article'>
        <RichTextRender content={project.article.raw} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = (await graphCMSClient.request(getProjectSlugs)) as {
    projects: ProjectType[];
  };

  const paths = projects.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { project } = await graphCMSClient.request(getProject, { slug });

  return {
    props: { project },
  };
};

export default ProjectPage;
