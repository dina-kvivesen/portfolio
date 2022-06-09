import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';

function NavbarMobile({ menuOpen }) {
  const router = useRouter();

  return (
    <Disclosure.Panel static className="md:hidden">
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-t-md">
          <Link href="/">
            <a
              className={
                router.pathname == '/'
                  ? 'nav__link__mobile  nav__link--active'
                  : 'nav__link__mobile'
              }>
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname == '/places'
                  ? 'nav__link__mobile  nav__link--active'
                  : 'nav__link__mobile'
              }>
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname == '/contact'
                  ? 'nav__link__mobile  nav__link--active'
                  : 'nav__link__mobile'
              }>
              About me
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname == '/contact'
                  ? 'nav__link__mobile  nav__link--active'
                  : 'nav__link__mobile'
              }>
              Contact
            </a>
          </Link>
        </div>
       
      </Transition>
    </Disclosure.Panel>
  );
}

export default NavbarMobile;