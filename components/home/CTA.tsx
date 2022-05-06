import Link from 'next/link';

const CTA = () => {
  return (
    <>
      <div className='cta'>
        <div className='cta__grid responsive-width-cta'>
          <h1 className='cta__header'>
            Hello. <br /> I am Edson Jaramillo.
          </h1>
          <span className='cta__subheader'>
            I am a web developer based in the United States who specializes in creating scalable,
            performant, and accessible web applications.
          </span>
          <div className='cta__buttongrid'>
            <Link href='/projects'>
              <a className='cta__button'>My Projects</a>
            </Link>
            <Link href='/contact'>
              <a className='cta__buttonalt'>Contact Me</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
