import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ScrollDownButton from './ScrollDownButton';

function HeroSection() {
  return (
    <div className='jumbotron position-absolute t-0'>
      <div class="container">
        <h1>Créatrice de décors personnalisés</h1>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
          >
            Contact
          </Button>
          <ScrollDownButton/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
