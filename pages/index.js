import Head from '../components/layout/Head';
import Navbar from '../components/layout/navbar/Navbar';
import { Button } from '../components/common/Buttons';
import Footer from '../components/layout/Footer';

export default function Home() {
  
  return (
    <>
    <Head>
      <title>Dina Kvivesen | Portfolio CA</title>
    </Head>
    <Navbar/>
    <div>
      <h1 className='mt-48 md:mt-96 text-3xl sm:text-6xl font-bold text-center text-gray-900'>Hi! I&apos;m Dina</h1>
      <p className='mx-auto text-center mt-4' >here are some of my projects created during my front-end studies</p>
      <div className="pt-4 flex flex-wrap gap-2 items-center justify-center">
        <Button href="/projects">
          View Projects
        </Button>
      </div>
    </div>
    <div className='fixed bottom-3 text-center mx-auto w-full'>
      <Footer/>
    </div>
    </>
  );
}
