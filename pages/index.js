import Navbar from '../components/layout/navbar/Navbar';
import { Button } from '../components/common/Buttons';

export default function Home() {
  
  return (
    <>
    <Navbar/>
    <div>
    <h1 className='mt-96 text-3xl sm:text-6xl font-bold text-center text-gray-900'>Hi! I&apos;m Dina</h1>
    <p className='mx-auto text-center mt-4' >here are some of my projects created during my front-end studies</p>
    <div className="pt-4 flex flex-wrap gap-2 items-center justify-center">
    <Button href="/projects">
      View Projects
    </Button>
    </div>
    </div>
    </>
  );
}
