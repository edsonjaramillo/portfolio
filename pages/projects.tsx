import { Section } from '@/components/index';
import Image from 'next/image';
import { gunzip } from 'zlib';

interface Project {
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  overviews: { name: string; value: number }[];
  metrics: { name: string; value: string }[];
}

const Projects: Project[] = [
  {
    title: 'American Travel Consulting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident vero harum vitae dolorum deleniti, dignissimos beatae repudiandae omnis, aut est. Illum esse incidunt officiis reiciendis alias dolorem quidem reprehenderit deleniti optio praesentium, est, harum a quo animi iste repellat temporibus nesciunt fuga similique pariatur! Quia, quibusdam excepturi? Ut nihil ipsam, officiis impedit eius voluptate nisi repudiandae consectetur! Impedit totam deleniti debitis magni, aliquam exercitationem saepe quia quas suscipit accusamus sint voluptatum ipsam assumenda et. Numquam itaque dolore quos obcaecati enim debitis, ipsam excepturi aliquid mollitia exercitationem in atque totam neque maiores possimus ipsum perferendis. Architecto soluta vel doloremque! Iure.',
    image: 'https://via.placeholder.com/1920x1080',
    website: 'https://www.americantravelconsulting.com/',
    github: 'https://www.github.com/',
    overviews: [
      { name: 'Performance', value: 100 },
      { name: 'Accessibility', value: 100 },
      { name: 'Best Practices', value: 100 },
      { name: 'SEO', value: 90 },
    ],
    metrics: [
      { name: 'First Contentful Paint', value: '0.5 s' },
      { name: 'Time to Interactive', value: '0.5 s' },
      { name: 'Speed Index', value: '0.5 s' },
      { name: 'Total Blocking Time', value: '0 ms' },
      { name: 'Largest Contentful Paint', value: '0.5 s' },
      { name: 'Cumulative Layout Shift', value: '0.004' },
    ],
  },
  {
    title: 'Main Channel Brewing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident vero harum vitae dolorum deleniti, dignissimos beatae repudiandae omnis, aut est. Illum esse incidunt officiis reiciendis alias dolorem quidem reprehenderit deleniti optio praesentium, est, harum a quo animi iste repellat temporibus nesciunt fuga similique pariatur! Quia, quibusdam excepturi? Ut nihil ipsam, officiis impedit eius voluptate nisi repudiandae consectetur! Impedit totam deleniti debitis magni, aliquam exercitationem saepe quia quas suscipit accusamus sint voluptatum ipsam assumenda et. Numquam itaque dolore quos obcaecati enim debitis, ipsam excepturi aliquid mollitia exercitationem in atque totam neque maiores possimus ipsum perferendis. Architecto soluta vel doloremque! Iure.',

    image: 'https://via.placeholder.com/1920x1080',
    website: 'https://www.americantravelconsulting.com/',
    github: 'https://www.github.com/',
    overviews: [
      { name: 'Performance', value: 100 },
      { name: 'Accessibility', value: 100 },
      { name: 'Best Practices', value: 100 },
      { name: 'SEO', value: 100 },
    ],
    metrics: [
      { name: 'First Contentful Paint', value: '0.5 s' },
      { name: 'Time to Interactive', value: '0.5 s' },
      { name: 'Speed Index', value: '0.5 s' },
      { name: 'Total Blocking Time', value: '0 ms' },
      { name: 'Largest Contentful Paint', value: '0.5 s' },
      { name: 'Cumulative Layout Shift', value: '0.004' },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <>
      <div className='projectsgrid'>
        {Projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </>
  );
};

const Project = ({
  title,
  description,
  image,
  overviews,
  metrics,
  website,
  github,
}: Project) => (
  <>
    <section className='project responsive-width-projects'>
      <h2 className='project__title'>{title}</h2>
      <p>{description}</p>
      <div className='project__image'>
        <Image src={image} width={16} height={9} layout='responsive' />
        <div className='project__linksgroup'>
          <a
            href={website}
            className='project__website project--site'
            target='_blank'
            rel='nofollow'>
            <WebIcon />
            Visit Site
          </a>
          <a
            href={github}
            className='project__website project--github'
            target='_blank'
            rel='nofollow'>
            <GithubIcon />
            Visit Repo
          </a>
        </div>
      </div>
      <div className='project__lighthousegroup'>
        <LightHouseIcon />
        <p className='project__lighthousetext'>Lighthouse Report</p>
      </div>
      <div className='project__overviews'>
        {overviews.map((overview) => (
          <GaugeItem key={overview.name} title={overview.name} value={overview.value} />
        ))}
      </div>
      <div className='project__metrics'>
        {metrics.map((metric) => (
          <MetricItem key={metric.name} title={metric.name} value={metric.value} />
        ))}
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

const GaugeItem = ({ title, value }: any) => (
  <div className='project__gaugeitem'>
    <div className='project__gaugecircle'>
      <p className='project__gaugevalue'>{value}</p>
    </div>
    <p className='project__gaugetitle'>{title}</p>
  </div>
);

const LightHouseIcon = () => (
  <div className='project__lighthouseicon'>
    <svg
      viewBox='0 0 512 548.20728733'
      xmlns='http://www.w3.org/2000/svg'
      height='100%'
      width='100%'>
      <g fill='none' fillRule='evenodd'>
        <circle cx='256' cy='256' fill='#0535c1' fillRule='nonzero' r='256' />
        <path d='m311.273 116.364h151.272v151.272h-151.272z' />
        <path
          d='m424.727 179.386h-15.313c-7.62-21.77-29.847-34.855-52.58-30.955s-39.326 23.646-39.254 46.71c.006 26.11 21.17 47.273 47.278 47.28h59.87c16.998-.566 30.485-14.51 30.485-31.518s-13.487-30.951-30.486-31.517z'
          fill='#eaeaea'
          fillRule='nonzero'
        />
        <path
          d='m456.25 211.293v-.384c-.006-17.407-14.116-31.516-31.523-31.523h-15.755v.791h15.755c17.248-.001 31.294 13.859 31.523 31.104z'
          fill='#fff'
          fillOpacity='.2'
          fillRule='nonzero'
        />
        <g fillRule='nonzero'>
          <path
            d='m364.858 147.887 25.554 80.71c8.54-8.577 21.713-20.4 21.713-33.444-.006-26.108-21.17-47.272-47.278-47.278z'
            fill='#e1e1e1'
          />
          <circle cx='364.858' cy='195.153' fill='#eee' r='47.279' />
          <path
            d='m364.858 148.666c25.955.012 47.05 20.94 47.267 46.895v-.384c.01-26.108-21.147-47.28-47.255-47.29s-47.28 21.147-47.29 47.255v.384c.236-25.945 21.332-46.855 47.278-46.86z'
            fill='#fff'
            fillOpacity='.2'
          />
          <path
            d='m424.727 241.63h-59.88c-25.955-.013-47.05-20.942-47.267-46.895v.384c.012 26.104 21.174 47.26 47.278 47.266h59.87c17.402-.006 31.51-14.108 31.522-31.51v-.385c-.216 17.257-14.265 31.134-31.523 31.14z'
            fill='#212121'
            fillOpacity='.1'
          />
          <path d='m186.182 107.636h133.818v116.364h-133.818z' fill='#fff176' />
          <path d='m171.636 285.09h160v160h-160z' fill='#fff' />
          <g fill='#f4481e'>
            <path d='m349.09 212.364h23.274v46.545h-232.728v-46.545h23.273v-93.091l93.091-58.183 93.09 58.182zm-46.545 0v-67.294l-46.545-29.09-46.545 29.09v67.294z' />
            <path d='m129.303 478.499 39.424-266.135h174.546l39.424 266.135a254.836 254.836 0 0 1 -126.697 33.501 254.836 254.836 0 0 1 -126.697-33.501zm178.817-185.833-109.499 35.574-13.311 89.83 134.889-43.834z' />
          </g>
        </g>
        <path d='m55.273 165.818h174.545v174.546h-174.545z' />
        <g fillRule='nonzero'>
          <path
            d='m186.182 238.545h-17.676c-8.83-25.075-34.455-40.129-60.657-35.632-26.202 4.498-45.341 27.235-45.304 53.82.02 30.118 24.434 54.527 54.552 54.54h69.085c19.725-.5 35.455-16.633 35.455-36.364s-15.73-35.865-35.455-36.364z'
            fill='#fafafa'
          />
          <path
            d='m222.545 275.34v-.43c0-20.074-16.29-36.365-36.363-36.365h-18.188v.908h18.188c19.895.005 36.096 15.993 36.363 35.887z'
            fill='#fff'
            fillOpacity='.2'
          />
          <path
            d='m117.097 202.182 29.475 93.114c9.856-9.89 25.053-23.529 25.053-38.586-.02-30.114-24.426-54.52-54.54-54.54z'
            fill='#e1e1e1'
          />
          <circle cx='117.097' cy='256.733' fill='#fff' r='54.551' />
          <path
            d='m117.097 203.09c29.946.018 54.284 24.163 54.54 54.109v-.431a54.545 54.545 0 1 0 -109.092-.035v.43c.269-29.938 24.612-54.068 54.552-54.074z'
            fill='#fff'
            fillOpacity='.2'
          />
          <path
            d='m186.182 310.365h-69.097c-29.946-.018-54.284-24.164-54.54-54.109v.43c.013 30.123 24.43 54.539 54.552 54.552h69.085c20.073 0 36.363-16.291 36.363-36.364v-.442c-.242 19.912-16.45 35.928-36.363 35.933z'
            fill='#212121'
            fillOpacity='.1'
          />
          <path
            d='m256 2.676c140.94 0 255.244 113.885 255.977 254.662l.023-1.338c0-141.382-114.618-256-256-256s-256 114.618-256 256c0 .442.035.873.035 1.338.721-140.765 115.002-254.662 255.965-254.662z'
            fill='#fff'
            fillOpacity='.2'
          />
          <path
            d='m511.977 254.662c-.745 140.777-115.037 254.662-255.977 254.662-140.951 0-255.244-113.897-255.965-254.662 0 .465-.035.896-.035 1.338 0 141.382 114.618 256 256 256s256-114.618 256-256z'
            fill='#263238'
            fillOpacity='.2'
          />
        </g>
      </g>
    </svg>
  </div>
);

const GithubIcon = () => (
  <div className='project__linkicon'>
    <svg
      height='100%'
      width='100%'
      viewBox='0 0 256 249'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'>
      <g>
        <path d='M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0' />
        <path d='M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398' />
      </g>
    </svg>
  </div>
);

const WebIcon = () => (
  <div className='project__linkicon'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height='100%'
      viewBox='0 0 24 24'
      width='100%'>
      <g>
        <rect fill='none' height='24' width='24' />
        <rect fill='none' height='24' width='24' />
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <g />
        <path d='M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z' />
      </g>
    </svg>
  </div>
);

export default ProjectsPage;
