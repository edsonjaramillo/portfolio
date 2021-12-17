import { Section } from '@/components/index';

interface Project {
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  overview: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    firstContenfulPaint: string;
    speedIndex: string;
    largestContentfulPaint: string;
    timeToInteractive: string;
    totalBlockingTime: string;
    cummilativeLayoutShift: string;
  };
}

const Projects: Project[] = [
  {
    title: 'American Travel Consulting',
    description: 'A website for a travel agency',
    image: 'https://via.placeholder.com/300x200',
    website: 'https://www.americantravelconsulting.com/',
    github: 'https://www.github.com/',
    overview: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
    metrics: {
      firstContenfulPaint: '0.5 s',
      timeToInteractive: '0.5 s',
      speedIndex: '0.5 s',
      totalBlockingTime: '0 ms',
      largestContentfulPaint: '0.5 s',
      cummilativeLayoutShift: '0.0004',
    },
  },
  {
    title: 'Main Channel Brewing',
    description: 'A website for a brewery',
    image: 'https://via.placeholder.com/300x200',
    website: 'https://www.mainchannelbeer.com/',
    github: 'https://www.github.com/',
    overview: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
    metrics: {
      firstContenfulPaint: '0.7 s',
      timeToInteractive: '0.2 s',
      speedIndex: '0.8 s',
      totalBlockingTime: '0 ms',
      largestContentfulPaint: '0.6 s',
      cummilativeLayoutShift: '0.0008',
    },
  },
];

const ProjectsPage = () => {
  return (
    <>
      <div className='projectsgrid'>
        {Projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </>
  );
};

const Project = ({ title, description, metrics }: Project) => (
  <>
    <section className='project responsive-width'>
      <h2 className='project__title'>{title}</h2>
      <p>{description}</p>
      <div className='project__metrics'>
        <MetricItem title='First Contenful Paint' value={metrics.firstContenfulPaint} />
        <MetricItem title='Time to Interactive' value={metrics.timeToInteractive} />
        <MetricItem title='Speed Index' value={metrics.speedIndex} />
        <MetricItem title='Total Blocking Time' value={metrics.totalBlockingTime} />
        <MetricItem title='Largest Contenful Paint' value={metrics.largestContentfulPaint} />
        <MetricItem title='Cumulative Layout Shift' value={metrics.cummilativeLayoutShift} />
      </div>
    </section>
  </>
);

const MetricItem = ({ title, value }: any) => (
  <div className='project__metricitem'>
    <p className='project__metrictitle'>{title}</p>
    <p className='project__metricvalue'>{value}</p>
  </div>
);

export default ProjectsPage;
