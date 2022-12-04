import React from 'react';
import './Psggrant.css';


function PsgGrant() {
  return (
    
    <>
    <hr style={{ background: 'black', color: 'black', borderColor: 'black', margin:0 }} />
            {/* Section for flex display picture and paragraph */}
    <section className='psgBanner'>
        <div className="top_banner">
          <img src="/images/psggrantbanner.PNG" alt="" className="psgtopPic"></img>
        </div>
    </section>
    
    <section className='productivitysol'>
      <div className="psgHeader"><b>Productivity Solutions Grant (PSG) for ABSS Accounting <br></br>Software – FKA MYOB</b></div>
    </section>

    <section className='didyouknow'>
      <div className="psgleft1">
        <div className="left1">
           <img src="/images/psgPic1.gif" alt="" className="psggif1"></img>
        </div>
       </div>
       <div className="psgright1">
       <h1 className='dyk'>Did you know?</h1>
       <label className='dykcontent'>Do you know that you can now purchase MYOB <br></br> Accounting Software with up to 70% subsidy 
        from <br></br> PSG? As we are the PSG pre-approved vendor for <br></br>MYOB Software, you can get subsidy 
        when you <br></br> purchase from us. Our package includes software <br></br> license, training, implementation and support.
        </label>
       </div>
      </section>

    <section className='whatispsgsec'>
      <div className="psgleft2">
        <h1 className='whatispsg'>What is PSG?</h1>
        <label className='whatispsgcontent'>This grant supports businesses that are keen to improve the<br></br> productivity and efficiency 
          by adopting the pre-approved IT <br></br>solutions. All SMEs can apply this grant for MYOB<br></br> if you 
          meet the following criteria:
          <br></br><br></br>1. Company registered and operating in Singapore 
          <br></br>2. Software must be used in Singapore
          <br></br>3. Have a minimum 30% local shareholding <br></br>(Singaporean and SPR)
          </label>
          <h3 className="info">Not sure what information and document is needed <br></br>for PSG application? 
          Not to worry, we will guide you <br></br>step-by-step on the PSG submission.</h3>
      </div>
      <div className='psgright2'>
        <div className='right2'>
          <img src="/images/psginfographic.PNG" alt="" className="psggif2"></img>
        </div>
      </div>
    </section>

    <section className='psgShape'>
      <div className='crossShape'>
        <img src="/images/psgpattern.PNG" alt="" className="psgcrossShape"></img>
      </div>
    </section>
      
      {/* (Contactinfo Section)
    <section className='psgContactinfo'>
      <div className='contactinfo'>
        <div className='right3'>
          <div className='contactNumber'>
            <h3 className='callforinfo'>Kindly give us a call to find out more information <br></br>on MYOB Software or PSG. <br></br>
            <br></br><li>Brian Ng – 8268 2809</li>
            <br></br><li>Johnny Kwok – 9816 7953</li>
            <br></br><li>Kenny Ng – 9800 1211</li>
            <br></br><li>Soon Chye – 8685 8513</li>
            <br></br><li>Angel Lim – 9133 8948</li>
            <br></br><li>Hemry Tan – 8363 2817</li>
            <br></br><li>Laura Tan – 8589 0829</li>
            </h3>
          </div>
        </div>
      </div>
    </section>
*/}
      
      
      </>
    );
  }
    export default PsgGrant;
