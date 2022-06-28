import Link from 'next/link';
import type { CategoryType, ProjectType } from '@/lib/graphcms';
import { BlurImage } from '@/components/index';
import FeedLinks from './FeedLinks';

export const FeedProjectItem = (project: ProjectType) => (
  <article className='feedproject'>
    <Link href={`/project/${project.slug}`}>
      <a className='feedproject__image'>
        <BlurImage
          src={project.image.url}
          title={project.image.alt}
          alt={project.image.alt}
          layout='fill'
          objectFit='fill'
        />
      </a>
    </Link>
    <div className='feedproject__details'>
      <Link href={`/project/${project.slug}`}>
        <a title={project.name} className='feedproject__title'>
          {project.name}
        </a>
      </Link>
      <span>{project.description}</span>
      <FeedLinks
        slug={project.slug}
        github={project.projectlink.github}
        hasDemo={project.projectlink.hasDemo}
        website={project.projectlink.website}
      />
    </div>
  </article>
);
