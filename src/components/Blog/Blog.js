import React from 'react';
import './Blog.css';

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
      <img src='/images/Blog accounting.png' alt='' className="accounting"></img>
      <div className="abss"><b>Should I upgrade by ABSS (fka MYOB) Accounting Software?</b></div>
      
    </section>


      </>
    );
}