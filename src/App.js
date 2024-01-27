import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeaderSection from './components/HeaderSection';
import InteriorSection from './components/InteriorSection';
import Satisfied from './components/Satisfied';
import Subscribe from './components/Subscribe';
import WarmHome from './components/WarmHome';
import WelcomeToRp from './components/WelcomeToRp';
import BackToTop from "./assets/images/webp/backtotop.webp"
import Aos from 'aos';
import "aos/dist/aos.css";
import Preloader from './components/Preloader';

function App() {
  // ---------------------aos-------------------
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  });
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------preloader---------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {screenLoading ? (
       <Preloader/>
      ) : (
        <>
          <div className='overflow-hidden'>
          <HeaderSection />
          <WelcomeToRp />
          <InteriorSection />
          <Gallery />
          <Satisfied />
          <Discover />
          <WarmHome />
          <Subscribe />
          <Footer />
          <div>
            <img onClick={() => top()} src={BackToTop} alt="Arrow" className={`${backToTop ? "fixed right-[1%] bottom-[2%] z-30 !cursor-pointer !md:max-w-[64px] !max-w-[45px] ": "d-none"}`} />
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
