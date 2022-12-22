import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
      <section className='blogPic'>
          <div className="blog_top_Pic">
            <img src="/images/blog pic.png" alt="" className="blog_pic"></img>
          </div>
      </section>
    
      <section className='ourblog'>
        <div className="blogheader"><b>Our Blog</b></div>
      </section>

      {/*adding in the blog link*/}
      <section className='blog_shouldI'>

        <div className='blog_rectangle'>
          <img src='/images/update1.jpg' alt='' className="blog_accounting"></img>
          <div className="blog_abss">
            <b>Should I upgrade by ABSS (fka MYOB) Accounting Software?</b>
          </div>
          <div className="blog_read-morelink">
            <a href='https://myobsingapore.com/blog.php?id=20'><u>Read More {'>'} </u></a>
          </div>
        </div>

      </section>
      
      <section className='blog_xero'>

        <div className='blog_rectangle'>
          <img src='/images/Xero1.jpg' alt='' className="blog_xerovs"></img>
          <div className="blog_best">
            <b>Xero vs. Quickbooks vs. MYOB - Which is the best accounting software?</b>
          </div>
          <div className="blog_readmore">
            <a href='https://myobsingapore.com/blog.php?id=19'><u>Read More {'>'} </u></a>
          </div>
        </div>

      </section>

      <section className='blog_psg'>

        <div className='blog_rectangle'>
          <img src='/images/psg2.png' alt='' className="blog_psgpic"></img>
          <div className="blog_productivity">
            <b>Productivity Solutions Grant (PSG) for ABSS Accounting Software - FKA MYOB</b>
          </div>
          <div className="blog_readmore-link">
            <Link to='/Psggrant'><u>Read More {'>'} </u></Link>
          </div>
        </div>

      </section>

      </>
    );
}