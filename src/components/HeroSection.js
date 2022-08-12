import React from 'react';
import '../App.css';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <Fade delay={1500} duration={2000} top>
        <h1>SELAMAT DATANG</h1>
        <p>di Laman Resmi Desa Bomba</p>
      </Fade>
      
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
