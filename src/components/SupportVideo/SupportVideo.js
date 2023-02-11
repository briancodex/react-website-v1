import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SupportVideo.css";
import "../../App.css";
import { useState } from "react";

export default function SupportVideo() {

  const [account, setAccount] = useState(false);
  const toggleAccount = () => {
    setAccount(!account);
  };
  const [svbanking, setSVBanking] = useState(false);
  const toggleSVBanking = () => {
    setSVBanking(!svbanking);
  };
  const [svsales, setSVSales] = useState(false);
  const toggleSVSales = () => {
    setSVSales(!svsales);
  };
  const [svpurchases, setSVPurchases] = useState(false);
  const toggleSVPurchases = () => {
    setSVPurchases(!svpurchases);
  };
  const [svinventory, setSVInventory] = useState(false);
  const toggleSVInventory = () => {
    setSVInventory(!svinventory);
  };
  const [cardfile, setCardFile] = useState(false);
  const toggleCardFile = () => {
    setCardFile(!cardfile);
  };
  const [svpayroll, setSVPayroll] = useState(false);
  const toggleSVpayroll= () => {
    setSVPayroll(!svpayroll);
  };
  const [customiseform, setCustomiseForm] = useState(false);
  const toggleCustomiseform= () => {
    setCustomiseForm(!customiseform);
  };

  return (
    <>
    <section className="Supprtnotepic">
        <div className="SNpicture">
          <img src=" /images/SupportNote.png" alt="" className="SNPic"></img>
        </div>
      </section>

      <section className="SNHeader">
        <div className="SNHeader">
          <div className="snhead">
            <h1>Support Video </h1>
          </div>
          <div className="snlabel">
            <label>Click on it to find out more about it!</label>
          </div>
          <div className="icon">
            <div className="firstRowIcons icon-container">
              <a onClick={toggleAccount} className="supportBtn">
                <img
                  src=" /images/Account.JPG"
                  alt=""
                  className="accpic"
                ></img>
              </a>
              <a onClick={toggleSVBanking} className="supportBtn">
                <img
                  src=" /images/SVBankingJPG.JPG"
                  alt=""
                  className="svbankingpic"
                ></img>
              </a>
              <a onClick={toggleSVSales} className="supportBtn">
                <img
                  src=" /images/SVSales.JPG"
                  alt=""
                  className="svsalespic"
                ></img>
              </a>
              <a onClick={toggleSVPurchases} className="supportBtn">
                <img
                  src=" /images/SVPurchases.JPG"
                  alt=""
                  className="svpurchases"
                ></img>
              </a>
              
          </div>
          <div className="secondRowIcons icon-container">
              <a onClick={toggleSVInventory} className="supportBtn">
                <img
                  src=" /images/SVInventory.JPG"
                  alt=""
                  className="svinventorypic"
                ></img>
              </a>
              <a onClick={toggleCardFile} className="supportBtn">
                <img
                  src=" /images/Cardfile.JPG"
                  alt=""
                  className="cardfilepic"
                ></img>
              </a>
              <a onClick={toggleSVpayroll} className="supportBtn">
                <img
                  src=" /images/SVPayroll.JPG"
                  alt=""
                  className="svpayrollpic"
                ></img>
              </a>
              <a onClick={toggleCustomiseform} className="supportBtn">
                <img
                  src=" /images/CustomiseForm.JPG"
                  alt=""
                  className="customiseformpic"
                ></img>
              </a>
      </div>
      </div>
      

      {account && (
            <div className="supportModal">
              <div
                onClick={toggleAccount}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Account Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=tBtQUwAmyzA&t=8s">
                            How to create a Heading Account
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=w-Zv8UTTjcc">
                            How to adjust column width when viewing reports in MYOB Accountiing
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=5lkbFkIELMc">
                            How to create Amount Owning to Directors?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=4eTGFlIhNaU">
                            How to rename Account Number and Account Name?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=FroXY-ywF8Q">
                            How to create a Contra Account

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=yv34ChWoidk">
                            How to create Multiple Control Accounts?

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=4FmuQUvlhAA">
                            How to transfer money from Bank Account to Petty Cash?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=pqZAKV2Qs7E">
                            How to create a Foreign Currency Bank Account?

                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleAccount}>
                  &times;
                </button>
              </div>
            </div>
          )}

{svbanking && (
            <div className="supportModal">
              <div
                onClick={toggleSVBanking}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Banking Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=8MrbvSzkxWw">
                            Transfer money from USD Account to SGD Account

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=4FmuQUvlhAA">
                            Transfer money from Bank to Petty Cash

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=p98j_Y-_pqk">
                            How to Void a Cheque?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=og3HCzOpo2A">
                            How to reverse Dishonoured Cheque in MYOB Accounting?
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSVBanking}>
                  &times;
                </button>
              </div>
            </div>
          )}



{svsales && (
            <div className="supportModal">
              <div
                onClick={toggleSVSales}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Sales Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=ibZBwf5zAWc">
                            How to apply credit not and reverse credit note?


                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=gvgN5NUNPcc">
                            Convert Sales Quote to Sales Order

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=4r13YH6bGRc">
                            Convert Sales Quote to Sales Invoice
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=iYe16jC1Q18">
                            How to create Sales Quote in Service Layout?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=lUfm0K_zM54">
                            How to create a Credit Note?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=SwXYqZNG6T0">
                            How to Contra Customer and Supplier Payments?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=mbI5qzPQMC8">
                            Recording payment into a closed invoice in MYOB
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=EfpZzH_SVCY">
                            How to Show Unit Of Measure in invoice in MYOB?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=wvNfLkwj2B8">
                            How to Show Invoice Number in Receive Payments in MYOB?
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSVSales}>
                  &times;
                </button>
              </div>
            </div>
          )}

{svpurchases&& (
            <div className="supportModal">
              <div
                onClick={toggleSVPurchases}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Purchases Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=pUXGYOz42R0">
                            How to create Purchases Back Order?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=sexGRpA0Wo0">
                            Amending GST Amount for Supplier's bill in MYOB Accounting
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=QQf6W1REm34">
                            How to record a Purchase Order (Item Layout) in MYOB Accounting?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=I6K3GqRrG8I">
                            How to Receive Refund from Supplier in MYOB?
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSVPurchases}>
                  &times;
                </button>
              </div>
            </div>
          )}

{svinventory && (
            <div className="supportModal">
              <div
                onClick={toggleSVInventory}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Inventory Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=G4EZDqFZAZc">
                            How to Use the Auto-Build Function?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=QEv7aZJhYwo">
                            How to Adjust Inventory?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=QQf6W1REm34">
                            Setting Up Multiple Locations
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=WHb6pTzi7ac">
                            How to Create/Rename Price Level?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=saMUE6tUY_Y">
                            How to Set Multiple Price Levels for an Item?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=C4oJjjAjXeI">
                            How to set restocking alert in MYOB Accounting?
                            </a>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSVInventory}>
                  &times;
                </button>
              </div>
            </div>
          )}
          {cardfile && (
            <div className="supportModal">
              <div
                onClick={toggleCardFile}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Card File Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=FkMkb-iSurk">
                            Changing Customer's Currency Type from SGD to USD

                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=DEU3UBjEHeA">
                            How to Set Item Price for a Customer?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=rVc7uDz4jFQ">
                            How to Create Identifier?
                            </a>
                           
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleCardFile}>
                  &times;
                </button>
              </div>
            </div>
          )}

{svpayroll && (
            <div className="supportModal">
              <div
                onClick={toggleSVpayroll}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">PayRoll Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=u2UikXnvEko">
                            How to create a MYOB Payroll Data File?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=vpZoD746_oo">
                            How to input Employee's information in MYOB Payroll?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=Lf1bQOmzYSU">
                            How to process Monthly Pay Run?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=Gtz1k34w9bE">
                            How to process Fortnightly Pay Run?
                            </a>                   
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSVpayroll}>
                  &times;
                </button>
              </div>
            </div>
          )}

{customiseform && (
            <div className="supportModal">
              <div
                onClick={toggleCustomiseform}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">Customise Forms Support Video</h2>

                <tr>
                  <th>
                    <div class="sPic">
                      <div class="linkSN">
                        <div class="flex-container">
                          <img
                            src="/images/SN.gif"
                            alt=""
                            className="Left"
                          ></img>
                          <ul>
                            <a href="https://www.youtube.com/watch?v=jMJ8ZKL-dFQ">
                            How to customise form in MYOB?
                              </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=h-Rn_7XEX3o">
                            How to duplicate a Customised Form?
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://www.youtube.com/watch?v=xZ8KRCJmq_g">
                            How to align forms?
                            </a>
                                
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleCustomiseform}>
                  &times;
                </button>
              </div>
            </div>
          )}









      </div>
      </section>
      
    </>
  );
}
