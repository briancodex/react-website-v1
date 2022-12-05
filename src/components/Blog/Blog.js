import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    
    <>
      <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
      
      <section className='blogPic'>
          <div className="top_Pic">
            <img src="/images/blog pic.png" alt="" className="blog_pic"></img>
          </div>
      </section>
    
      <section className='ourblog'>
        <div className="blogheader"><b>Our Blog</b></div>
      </section>

      {/*adding in the blog link*/}
      <section className='shouldI'>

        <div className='rectangle'>
          <img src='/images/update1.jpg' alt='' className="accounting"></img>
          <div className="abss">
            <b>Should I upgrade by ABSS (fka MYOB) Accounting Software?</b>
          </div>
          <div className="read-morelink">
            <a href='https://myobsingapore.com/blog.php?id=20'><u>Read More > </u></a>
          </div>
        </div>

      </section>
      
      <section className='xero'>

        <div className='rectangle'>
          <img src='/images/Xero1.jpg' alt='' className="xerovs"></img>
          <div className="best">
            <b>Xero vs. Quickbooks vs. MYOB - Which is the best accounting software?</b>
          </div>
          <div className="readmore">
            <a href='https://myobsingapore.com/blog.php?id=19'><u>Read More > </u></a>
          </div>
        </div>

      </section>

      <section className='psg'>

        <div className='rectangle'>
          <img src='/images/psg2.png' alt='' className="psgpic"></img>
          <div className="productivity">
            <b>Productivity Solutions Grant (PSG) for ABSS Accounting Software - FKA MYOB</b>
          </div>
          <div className="readmore-link">
            <Link to='/Psggrant'><u>Read More > </u></Link>
          </div>
        </div>

      </section>

      </>
    );
}