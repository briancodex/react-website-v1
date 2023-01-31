import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./Software.css";
import "./ProductCard.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },

];

function Software({individualProduct, addToCart}) {

    const handleAddToCart = () => {
        addToCart(individualProduct);
    }
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const productData = await getDocs(collection(db, "products"));
            // console.log(parkingData);
            setProducts(productData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(productData);
        };

        getData();
    }, []);

    return (

        <>
        <section className='softwareBanner'>
          <div className="top_banner">
            <img src="/images/softwarebanner.PNG" alt="" className="psgtopPic"></img>
          </div>
        </section>

        <Fragment>
            <section>
                <div className="row">
                    <Carousel breakPoints={breakPoints}>

                        {product.map((data) => (
                            <div className="product">
                                <div className="product-body">
                                    <div className="car-content" key={data.id}>
                                        <div className="title1">{data.title1}</div>
                                        <div className="title2">{data.title2}</div>
                                        <div className="title3">{data.title3}</div>
                                        <div className="title-description">{data.description}</div>
                                        <div className="price1"><label>$</label>{data.price1}<label>.00</label></div>
                                        <div className="price2"><label>$</label>{data.price2}<label>.00</label></div>
                                        <a href="#" className="btn-primary" onClick={handleAddToCart}>ADD TO CART</a>
                                        <a href="#" className="btn-secondary"> TRY FREE FOR 30 DAYS </a>
                                        <div className="product-thumb">
                                            <label className="product-description">
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>Windows Supported<br></br>
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>FREE 30 Days Support<br></br>
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>Easy Setup Assistant<br></br>
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>Company File Upgrade Assistant<br></br>
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>Templates Upgrade Assistant<br></br>
                                                <i class="fa-sharp fa-solid fa-circle-check"></i>Help Files<br></br>

                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                </div>
            </section>
        </Fragment>
        <section className='software2ndsection'>
        <img src="/images/bizsupportpic.PNG" alt="" className="bizsupport"></img>
      </section>

      <section className="software3rdsection">
      <img src="/images/keyfeatures.PNG" alt="" className="keyfeat"></img>
      <img src="/images/softwaregif.gif" alt="" className="softwareimages"></img>
      </section>

      <section className='software4thsection'>
        <div className="comparisonofplan">
          <h1 className="comparisonheader"><u>Compare Plan Side By Side</u></h1>
          <img src="/images/manageyourbooks.PNG" alt="" className="managingbooks"></img>
          <img src="/images/secureyourbooks.PNG" alt="" className="securingbooks"></img>
          <img src="/images/generatereports.PNG" alt="" className="generatingreports"></img>
          <img src="/images/manageyourinventory.PNG" alt="" className="managinginventory"></img>
          <img src="/images/processsales.PNG" alt="" className="processingsales"></img>
          <img src="/images/managegst.PNG" alt="" className="managinggst"></img>
        </div>
      </section>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Software />, rootElement);
export default Software;