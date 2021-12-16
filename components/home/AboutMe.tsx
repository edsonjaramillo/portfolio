import { Section } from '@/components/index';
import Image from 'next/image';
import Portrait from '@/public/portrait.jpg';
import { toastNotification } from '@/lib/toastNotification';

const AboutMe = () => {
  return (
    <>
      <Section
        id='about'
        header='About Me'
        color='section--bg--grayscale-100'
        textcolor='section--text--secondary-100'>
        <div className='aboutgrid'>
          <div className='about__image'>
            <Image src={Portrait} layout='responsive' alt='portrait' />
          </div>
          <div className='about__bodygrid'>
            <p className='about__body'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad possimus quis, ipsam
              tempore expedita fugit eos doloremque culpa facere temporibus? Voluptates
              consectetur repudiandae et magnam accusamus. Voluptatum adipisci exercitationem
              distinctio quae cupiditate natus reprehenderit consequatur dolorum! Dolorem
              itaque omnis laboriosam rem, ex minima repudiandae eos ipsam, magnam facilis
              assumenda explicabo ullam vitae possimus beatae eligendi illum delectus eaque
              nisi voluptate dolorum. Exercitationem officia nisi dicta voluptates illo
              deserunt porro sint amet pariatur, perferendis ea? Explicabo rem earum obcaecati
              illum qui voluptate rerum autem incidunt praesentium, itaque eligendi iste unde
              nam harum dolor ipsum laudantium at! Earum ab voluptatem inventore animi. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos
            </p>
            <a
              className='about__download'
              href='Test_Resume.pdf'
              onClick={() =>
                toastNotification('success', 'Thank you for downloading my resume!')
              }>
              <DownloadIcon />
              <p>Download Resume</p>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

const DownloadIcon = () => (
  <div className='about__downloadicon'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      viewBox='0 0 24 24'>
      <g>
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <path d='M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z' />
      </g>
    </svg>
  </div>
);

export default AboutMe;
