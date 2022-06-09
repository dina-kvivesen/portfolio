import React, { useState } from 'react';
import NavbarMobile from './NavbarMobile';
import MenuToggle from './MenuToggle';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <Disclosure as="nav" className="z-10 md:h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <p>DK</p>
            </a>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Home
                </a>
              </Link>
              <Link href="/projects">
                <a
                  className={
                    router.pathname == '/projects'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Projects
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={
                    router.pathname == '/about'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  About me
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Contact
                </a>
              </Link>
            </div>
          </div>


          <MenuToggle setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>
      </div>
      <NavbarMobile menuOpen={menuOpen} /> 
    
    </Disclosure>
  );
}