import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe:
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          {/* <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div> */}
        {/* </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              THC
              <i class="fas fa-dharmachakra"></i>
            </Link>
          </div>
          <small class='website-rights'>THC © 2020</small>
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              
            </Link> */}
            <a href='https://www.facebook.com/ErikErikErikErik/' target="_blank" class='social-icon-link facebook'><i class='fab fa-facebook-f' /></a>
            <a href='https://www.instagram.com/e.a_burdett/' target="_blank" class='social-icon-link instagram'><i class='fab fa-instagram'/></a>
            <a href='https://www.youtube.com/channel/UCjzWZfWIL6mNqP870g0sM3g' target="_blank" class='social-icon-link youtube'><i class='fab fa-youtube'/></a>
            <a href='https://twitter.com/telephoneheater' target="_blank" class='social-icon-link twitter'><i class='fab fa-twitter'/></a>
            <a href='https://www.linkedin.com/in/eaburdett/' target="_blank" class='social-icon-link linkedin'><i class='fab fa-linkedin'/></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
