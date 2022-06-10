import Head from '../components/layout/Head';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/Footer';
import { Button, LightButton } from '../components/common/Buttons';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ExternalLinkIcon
} from '@heroicons/react/outline';

export default function Projects() {

  return (
    <>
        <Head>
          <title>Dina Kvivesen | Projects</title>
        </Head>
        <Navbar/>
        <div className="pt-0 bg-purple-100 rounded-3xl my-10">
          <Carousel className='max-w-screen-sm mx-auto lg:hidden md:block pt-7'>
            <div>
              <img className='rounded-t-3xl' src="/images/holidazeImages/accommodations.png" alt="image1"/>
            </div>
            <div>
              <img className='rounded-t-3xl' src="/images/holidazeImages/accommodation detail.png" alt="image2" />
            </div>
            <div>
              <img className='rounded-t-3xl' src="/images/holidazeImages/dashboard.png" alt="image3"/>
            </div>
            <div>
              <img className='rounded-t-3xl' src="/images/holidazeImages/add place.png" alt="image3"/>
            </div>
          </Carousel>
            <div className="mt-16 w-full flex justify-between items-center mx-2.5">
              <div className="mx-auto">
                <Carousel className='max-w-screen-md mx-auto hidden lg:block mt-7'>
                  <div>
                    <img className='rounded-tl-3xl rounded-br-3xl' src="/images/holidazeImages/accommodations.png" alt="image1"/>
                  </div>
                  <div>
                    <img className='rounded-tl-3xl rounded-br-3xl' src="/images/holidazeImages/accommodation detail.png" alt="image2" />
                  </div>
                  <div>
                    <img className='rounded-tl-3xl rounded-br-3xl' src="/images/holidazeImages/dashboard.png" alt="image3"/>
                  </div>
                  <div>
                    <img className='rounded-tl-3xl rounded-br-3xl' src="/images/holidazeImages/add place.png" alt="image3"/>
                  </div>
                </Carousel>
              </div>
              <div className="mx-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-2.5 ">
                <div className="col-span-2 ">
                  <h1 className="text-2xl text-center md:text-left font-bold">Holidaze</h1>
                  <h2 className="text-lg text-center md:text-left"> Project exam 2</h2>
                  <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line max-w-screen-sm">
                    A local tourism agency in Bergen is launching a new website called ‘Holidaze’ for visitors to the 
                    area to be able to find hotels, B&Bs and guesthouses, and for the accommodation owners to add accommodations and receive 
                    enquiries. 
                  </p>
                  <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line max-w-screen-sm">
                    This was my final exam project at Noroff.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-2 items-center justify-center md:justify-start">
                    <Button href="https://holidazebnb.vercel.app/">
                    <ExternalLinkIcon className="w-4 mr-2 icon" />
                      View Live
                    </Button>
                    <LightButton href="https://github.com/dina-kvivesen/holidaze">
                      <FontAwesomeIcon
                        className="mr-2" icon={['fab', 'github-alt']} 
                        style={{ fontSize: 18 }}
                      />
                      View on Github
                    </LightButton>
                  </div>
                </div>
                <div className="pt-6 lg:p-10  text-center md:text-left">
                  <h2 className="text-lg font-semibold">Technology</h2>
                  <ul className="text-gray-700 divide-y divide-gray-300">
                    <li className="py-2">
                      HTML/CSS
                    </li>
                    <li className="py-2">
                      React
                    </li>
                    <li className="py-2">
                      NextJS
                    </li>
                    <li className="py-2">
                      Tailwind css
                    </li>
                    <li className="py-2">
                      REST API/JSON
                    </li>
                    <li className="py-2">
                      Strapi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className="pt-0 bg-purple-100 rounded-3xl my-10">
            <Carousel className='max-w-screen-sm mx-auto lg:hidden md:block pt-7'>
                  <div>
                    <img className='rounded-t-3xl' src="/images/Semproj2Images/sphome.png" alt="image1"/>
                  </div>
                  <div>
                    <img className='rounded-t-3xl' src="/images/Semproj2Images/spproduct.png" alt="image2" />
                  </div>
                  <div>
                    <img className='rounded-t-3xl' src="/images/Semproj2Images/spcart.png" alt="image3"/>
                  </div>
                  <div>
                    <img className='rounded-t-3xl' src="/images/Semproj2Images/spadmindash.png" alt="image3"/>
                  </div>
              </Carousel>
            <div className="mt-16 w-full flex justify-between items-center mx-2.5">
              <div className="mx-auto">
                  <Carousel className='max-w-screen-md mx-auto hidden lg:block mt-7'>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/Semproj2Images/sphome.png" alt="image1"/>
                      </div>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/Semproj2Images/spproduct.png" alt="image2" />
                      </div>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/Semproj2Images/spcart.png" alt="image3"/>
                      </div>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/Semproj2Images/spadmindash.png" alt="image3"/>
                      </div>
                  </Carousel>
              </div>
              <div className="mx-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-2.5 ">
                <div className="col-span-2 ">
                  <h1 className="text-2xl text-center md:text-left font-bold">Bergen Shoes</h1>
                  <h2 className="text-lg text-center md:text-left"> Semester Project 2</h2>
                  <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line max-w-screen-sm">
                  Bergen Shoes is an e-commerce website that has both customer-facing and admin sections.
                  In the admin sections you can add, edit and delete products. 
                  In the customer-facing sections the website had to include a view of featured products, 
                  a view of all projects with a search function, single product pages where you can add and remove 
                  products to cart (using localStorage) and a cart page showing your added items with the option to view or 
                  remove them, the total price and a button to clear the cart.
                  The website is responsive and it is populated by a Strapi API.
                  </p>
                  <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line max-w-screen-sm">
                    This was the second year semester project at Noroff.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-2 items-center justify-center md:justify-start">
                    <LightButton href="https://github.com/dina-kvivesen/semester-project-2">
                      <FontAwesomeIcon
                        className="mr-2" icon={['fab', 'github-alt']} 
                        style={{ fontSize: 18 }}
                      />
                      View on Github
                    </LightButton>
                  </div>
                </div>
                <div className="pt-6 lg:p-10  text-center md:text-left">
                  <h2 className="text-lg font-semibold">Technology</h2>
                  <ul className="text-gray-700 divide-y divide-gray-300">
                      <li className="py-2">
                        HTML/CSS
                      </li>
                      <li className="py-2">
                        Javascript
                      </li>
                      <li className="py-2">
                        Sass/scss
                      </li>
                      <li className="py-2">
                        Bootstrap
                      </li>
                      <li className="py-2">
                        REST API/JSON
                      </li>
                      <li className="py-2">
                        Strapi
                      </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className="pt-0 bg-purple-100 rounded-3xl">
            <Carousel className='max-w-screen-sm mx-auto lg:hidden md:block pt-7'>
                  <div>
                    <img className='rounded-t-3xl' src="/images/frameworksImages/cahome.png" alt="image1"/>
                  </div>
                  <div>
                    <img className='rounded-t-3xl' src="/images/frameworksImages/cadetail.png" alt="image2" />
                  </div>
                  <div>
                    <img className='rounded-t-3xl' src="/images/frameworksImages/calogin.png" alt="image3"/>
                  </div>
              </Carousel>
            <div className="mt-16 w-full flex justify-between items-center mx-2.5">
              <div className="mx-auto">
                  <Carousel className='max-w-screen-md mx-auto hidden lg:block mt-7'>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/frameworksImages/cahome.png" alt="image1"/>
                      </div>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/frameworksImages/cadetail.png" alt="image2" />
                      </div>
                      <div>
                        <img className='rounded-tl-3xl rounded-br-3xl' src="/images/frameworksImages/calogin.png" alt="image3"/>
                      </div>
                  </Carousel>
              </div>
              <div className="mx-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-2.5 ">
                <div className="col-span-2 ">
                  <h1 className="text-2xl text-center md:text-left font-bold">Javascript Frameworks Course Assignment</h1>
                  <p className="text-base text-gray-700 mt-6 leading-relaxed whitespace-pre-line max-w-screen-sm">
                  A next.js app with the following paths: index, detail, detail/:param, contact, login and admin. 
                  I used WordPress for the login functionality, and an open source API.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-2 items-center justify-center md:justify-start">
                    <LightButton href="https://github.com/dina-kvivesen/next-js-assignment">
                      <FontAwesomeIcon
                        className="mr-2" icon={['fab', 'github-alt']} 
                        style={{ fontSize: 18 }}
                      />
                      View on Github
                    </LightButton>
                  </div>
                </div>
                <div className="pt-6 lg:p-10  text-center md:text-left">
                  <h2 className="text-lg font-semibold">Technology</h2>
                  <ul className="text-gray-700 divide-y divide-gray-300">
                      <li className="py-2">
                        HTML/CSS
                      </li>
                      <li className="py-2">
                        NextJS
                      </li>
                      <li className="py-2">
                        Bootstrap
                      </li>
                      <li className="py-2">
                        Wordpress
                      </li>
                      <li className="py-2">
                        REST API/JSON
                      </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className='pt-5' >
        <Footer/>
        </div>
    </>
  );
}
