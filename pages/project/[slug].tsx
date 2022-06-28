import { GetStaticPaths, GetStaticProps } from 'next';
import { graphCMSClient, getProjectSlugs, ProjectType, getProject } from '@/lib/graphcms';
import { BlurImage, HeadOpenGraph, RichTextRender } from '@/components/index';

interface ProjectPageProps {
  project: ProjectType;
}

const ProjectPage = ({ project }: ProjectPageProps) => (
  <>
    <HeadOpenGraph
      title={project.name}
      description={project.description}
      image={project.image.url}
      alt={project.image.alt}
    />
    <div className='post responsive-width-article'>
      <h1 className='post__h1'>{project.name}</h1>
      <div className='post__image'>
        <BlurImage
          src={project.image.url}
          width={project.image.width}
          height={project.image.height}
          alt={project.name}
          layout='responsive'
          priority
        />
      </div>
      <RichTextRender content={project.article.raw} />
    </div>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await graphCMSClient.request(getProjectSlugs);

  const paths = projects.map(({ slug }: ProjectType) => ({
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
