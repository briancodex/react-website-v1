import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SupportNote.css";
import "../../App.css";
import { useState } from "react";

export default function General() {
  const [general, setGeneral] = useState(false);
  const toggleGeneral = () => {
    setGeneral(!general);
  };

  const [bank, setBanking] = useState(false);
  const toggleBanking = () => {
    setBanking(!bank);
  };
  const [sales, setSales] = useState(false);
  const toggleSales = () => {
    setSales(!sales);
  };
  const [purchases, setPurchases] = useState(false);
  const togglePurchases = () => {
    setPurchases(!purchases);
  };
  const [inventory, setInventory] = useState(false);
  const toggleInventory = () => {
    setInventory(!inventory);
  };
  const [multicurrency, setMulticurrency] = useState(false);
  const toggleMulticurrency= () => {
    setMulticurrency(!multicurrency);
  };
  const [gst, setGST] = useState(false);
  const toggleGST= () => {
    setGST(!gst);
  };
  const [payroll, setPayRoll] = useState(false);
  const togglePayRoll= () => {
    setPayRoll(!payroll);
  };
  const [timebilling, setTimeBilling] = useState(false);
  const toggleTimeBilling= () => {
    setTimeBilling(!timebilling);
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
            <h1>Support Notes </h1>
          </div>
          <div className="snlabel">
            <label>Click on it to find out more about it!</label>
          </div>

          <div className="icon">
            <div className="firstRowIcons icon-container">
              <a onClick={toggleGeneral} className="supportBtn">
                <img
                  src=" /images/general1.JPG"
                  alt=""
                  className="genpic"
                ></img>
              </a>
              <a onClick={toggleBanking} className="supportBtn">
                <img
                  src=" /images/BankingJPG.JPG"
                  alt=""
                  className="bankpic"
                ></img>
              </a>
              <a onClick={toggleSales} className="supportBtn">
                <img
                  src=" /images/Sales.JPG"
                  alt=""
                  className="salespic"
                ></img>
              </a>
              <a onClick={togglePurchases} className="supportBtn">
                <img
                  src=" /images/PurchasesJPG.JPG"
                  alt=""
                  className="purchasespic"
                ></img>
              </a>
              <a onClick={toggleInventory} className="supportBtn">
                <img
                  src=" /images/Inventory.JPG"
                  alt=""
                  className="inventorypic"
                ></img>
              </a>
             
            </div>
            <div className="secondRowIcons icon-container">
              <a onClick={toggleMulticurrency} className="supportBtn">
                <img
                  src=" /images/MultiCurrency.JPG"
                  alt=""
                  className="multicurrencypic"
                ></img>
              </a>
              <a onClick={toggleGST} className="supportBtn">
                <img
                  src=" /images/gst.JPG"
                  alt=""
                  className="gstpic"
                ></img>
              </a>
              <a onClick={togglePayRoll} className="supportBtn">
                <img
                  src=" /images/payroll.JPG"
                  alt=""
                  className="payrollpic"
                ></img>
              </a>
              <a onClick={toggleTimeBilling} className="supportBtn">
                <img
                  src=" /images/TimeBilling.JPG"
                  alt=""
                  className="timebillingpic"
                ></img>
              </a>
            </div>
          </div>

          {general && (
            <div className="supportModal">
              <div
                onClick={toggleGeneral}
                className="supportModalOverlay"
              ></div>
              <div className="supportModalContent">
                <div>
                  <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
                </div>

                <h2 className="titleImage">General Support Notes</h2>

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
                            <a href="https://myobsingapore.com/snote/how-to-use-job-costing.pdf">
                              How to use job costing
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-delete-a-job-code.pdf">
                              How to delete a job code
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-use-category-tracking.pdf">
                            How to use category tracking
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-does-the-jobs-budget-analysis-report-work.pdf">
                            How does the jobs (Budget Analysis) report work
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-input-previous-financial-year-balance-sheet-figures.pdf">
                            How to input previous financial year Balance Sheet figures
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-insert-service-layout-description-and-subtotal-in-item-layout.pdf">
                            How to insert service layout description and subtotal in item layout
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-input-historical-sales-purchases-from-previous-financial-year.pdf">
                            How to input historical sales & purchases from previous financial year
                            </a>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleGeneral}>
                  &times;
                </button>
              </div>
            </div>
          )}

          {bank && (
            
            <div className="supportModal">
            <div
              onClick={toggleBanking}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Banking Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-record-import-tax-to-be-paid-to-singapore-customs.pdf">
                            How to record import tax to be paid to Singapore Customs
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-staff-salary-and-cpf.pdf">
                            How to record staff salary and CPF
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-transfer-money-between-different-currency-accounts.pdf">
                            How to transfer money between different currency accounts
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-void-a-cheque.pdf">
                            How to void a cheque
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/out-of-balance-between-bank-statement-balance-and-calculated-balance1.pdf">
                            Out of balance between Bank Statement Balance and Calculated Balance
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleBanking}>
                  &times;
                </button>
              </div>
            </div>

          )}
           {sales && (
            
            <div className="supportModal">
            <div
              onClick={toggleSales}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Sales Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-insert-service-layout-description-and-subtotal-in-item-layout1.pdf">
                            How to record Finance Charge together when receiving payment
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-show-the-grand-total-in-sales-or-purchases-ageing-report2.pdf">
                            How to show the grand total in Sales or Purchase Ageing Report
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-transfer-money-between-different-currency-accounts.pdf">
                            How to transfer money between different currency accounts
                            </a>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleSales}>
                  &times;
                </button>
              </div>
            </div>

          )}
          
          {purchases && (
            
            <div className="supportModal">
            <div
              onClick={togglePurchases}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Purchases Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-record-advance-payment-paid-to-supplier.pdf">
                            How to record advance payment paid to supplier
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-advance-payment-supplier-2-methods.pdf">
                            How to record advance payment supplier (2 methods)
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-bill-for-settling-future-bills.pdf">
                            How to record bill for settling future bills
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-show-the-grand-total-in-sales-or-purchases-ageing-report1.pdf">
                            How to show the grand total in Sales or Purchase Ageing Report
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={togglePurchases}>
                  &times;
                </button>
              </div>
            </div>

          )}
{inventory && (
            
            <div className="supportModal">
            <div
              onClick={toggleInventory}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Inventory Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/opening-inventory.pdf">
                            Opening Inventory
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleInventory}>
                  &times;
                </button>
              </div>
            </div>

          )}


{multicurrency && (
            
            <div className="supportModal">
            <div
              onClick={toggleMulticurrency}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Multi-Currency Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-get-myob-excel-report-for-multi-currency-data-file-to-show-excel-formula-figures.pdf">
                            How to get MYOB excel report for multi-currency data file to show excel formula figures
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="hhttps://myobsingapore.com/support-note.php">
                            How to record Unrealised Currency Gain or Loss
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-show-the-grand-total-in-sales-or-purchases-ageing-report.pdf">
                            How to show the grand total in Sales or Purchase Ageing Report
                            </a>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleMulticurrency}>
                  &times;
                </button>
              </div>
            </div>

          )}
           {gst && (
            
            <div className="supportModal">
            <div
              onClick={toggleGST}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">GST Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-amend-gst-amount.pdf">
                            How to amend GST amount
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-a-direct-gst-payment.pdf">
                            How to record a direct GST payment
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-gst-payment.pdf">
                            How to record a GST payment
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-record-gst-refund.pdf">
                            How to record GST refund
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/payment-to-freight-forwarder-for-gst-paid-on-behalf.pdf">
                            Payment to Freight Forwarder for GST paid on behalf
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleGST}>
                  &times;
                </button>
              </div>
            </div>

          )}
          {payroll && (
            
            <div className="supportModal">
            <div
              onClick={togglePayRoll}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">PayRoll Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/export-and-import-payroll.pdf">
                            Export and import payroll
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-set-no-of-work-days-per-pay-period-in-payroll-information-screen.pdf">
                            How to set no of work days per pay period in payroll information screen
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={togglePayRoll}>
                  &times;
                </button>
              </div>
            </div>

          )}
          {timebilling && (
            
            <div className="supportModal">
            <div
              onClick={toggleTimeBilling}
              className="supportModalOverlay"
            ></div>
            <div className="supportModalContent">
              <div>
                <img src="/images/MYOB_Logo.png" alt="" className="L"></img>
              </div>
              <h2 className="titleImage">Time-Billing Support Notes</h2>
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
                            <a href="https://myobsingapore.com/snote/how-to-allocate-an-activity-to-an-employee-and-generate-the-time-billing-invoice.pdf">
                            How to allocate an activity to an employee and generate the time billing invoice
                            </a>
                            <div>
                              <br></br>
                            </div>
                            <a href="https://myobsingapore.com/snote/how-to-create-a-new-activity-id.pdf">
                            How to create a new Activity ID
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>

                <button className="close-btn" onClick={toggleTimeBilling}>
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

