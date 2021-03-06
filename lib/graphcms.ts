import { GraphQLClient, gql } from 'graphql-request';
const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
export const graphCMSClient = new GraphQLClient(ENDPOINT);

// Queries
export const getProject = gql`
  query getProject($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      name
      description
      image {
        id
        url
        width
        height
        alt
      }
      article {
        raw
      }
    }
  }
`;

export const getProjectSlugs = gql`
  query getProjectSlugs {
    projects {
      slug
    }
  }
`;

export const getCategories = gql`
  query getCategories {
    categories {
      id
      name
      projects(orderBy: sort_ASC) {
        id
        slug
        name
        description
        image {
          id
          url
          width
          height
          alt
        }
        projectlink {
          id
          github
          hasDemo
          website
        }
      }
    }
  }
`;

export const getSitemapLinks = gql`
  query getSitemapLinks {
    projects {
      id
      slug
      name
    }
  }
`;

// Types
export interface ProjectType {
  id: string;
  slug: string;
  name: string;
  article: any;
  image: ImageType;
  description: string;
  projectlink: ProjectLinkType;
}

export interface ProjectLinkType {
  github: string;
  hasDemo: boolean;
  website?: string;
}

export interface CustomerType {
  id: string;
  name: string;
  testimonial: string;
  position: string;
}

interface ImageType {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface CategoryType {
  id: string;
  name: string;
  projects: ProjectType[];
}
