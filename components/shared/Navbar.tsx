import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

interface PageLink {
  route: string;
  name: string;
}

export const navbarLinks = [
  {
    route: '/projects',
    name: 'Projects',
  },
  {
    route: '/#about',
    name: 'About',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  const navVariants: Variants = {
    open: {
      x: '100%',
      transition: {
        ease: 'linear',
        duration: 0.15,
      },
    },
    close: {
      x: '0%',
      transition: {
        ease: 'linear',
        duration: 0.15,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const Hamburger = () => (
    <button
      className='navbar__hamburger'
      aria-label='open menu button'
      onClick={() => setIsOpen(true)}>
      <svg
        className='navbar__hamburgericon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </button>
  );

  const ExitIcon = () => (
    <button
      className='navbar__exit'
      aria-label='exit menu button'
      onClick={() => setIsOpen(false)}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
      </svg>
    </button>
  );

  return (
    <>
      <header>
        <nav className='navbar' title='navigation bar'>
          <div className='navbar__content responsive-width'>
            <Link href='/'>
              <a className='navbar__logo'>Logo</a>
            </Link>
            <motion.div
              initial='close'
              variants={navVariants}
              animate={isOpen ? 'open' : 'close'}
              id='hamburger-menu'
              className='navbar__links'>
              {navbarLinks.map((link) => (
                <PageLink key={link.name} route={link.route} name={link.name} />
              ))}
              <ExitIcon />
            </motion.div>
            <Hamburger />
          </div>
        </nav>
        <div arial-hidden='true' className='navbar__spacer' />
      </header>
    </>
  );
};

const closeMenu = () => {
  // const links: HTMLElement | null = document.getElementById('hamburger-menu');
  // if (links?.classList.contains('open-nav') == true) {
  //   links?.classList.remove('open-nav');
  // }
};

const changeMenu = () => {
  // const links: HTMLElement | null = document.getElementById('hamburger-menu');
  // if (links?.classList.contains('open-nav') == true) {
  //   links?.classList.remove('open-nav');
  // } else {
  //   links?.classList.add('open-nav');
  // }
};

const PageLink = ({ route, name }: PageLink) => (
  <Link href={route}>
    <a className='navbar__link' onClick={() => closeMenu()}>
      {name}
    </a>
  </Link>
);

export default Navbar;
