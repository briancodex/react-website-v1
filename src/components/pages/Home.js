import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUs from '../AboutUs';
import Video from '../Video';
import Stat from '../Stat';


function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Video />
      <Stat />
      <Footer />
    </>
  );
}

export default Home;
