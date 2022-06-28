import { toastNotification } from '@/lib/toastNotification';
import Link from 'next/link';

const CTA = () => (
  <div className='cta'>
    <div className='cta__grid responsive-width-cta'>
      <h1 className='cta__header'>
        Hello. <br /> I am Edson Jaramillo.
      </h1>
      <span className='cta__subheader'>
        I am a full stack web developer based in the United States who specializes in creating scalable,
        performant, and accessible web applications.
      </span>
      <div className='cta__buttongrid'>
        <Link href='/projects'>
          <a className='cta__button'>My Projects</a>
        </Link>
        <a
          className='cta__download'
          href='Test_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => toastNotification('success', 'Thank you for downloading my resume!')}
          download>
          <DownloadIcon />
          Download Resume
        </a>
      </div>
    </div>
  </div>
);

const DownloadIcon = () => (
  <div className='cta__downloadicon'>
    <svg xmlns='http://www.w3.org/2000/svg' enableBackground='new 0 0 24 24' viewBox='0 0 24 24'>
      <g>
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <path d='M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z' />
      </g>
    </svg>
  </div>
);

export default CTA;
