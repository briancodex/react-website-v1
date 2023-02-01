import {useState} from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
 
const Analytics = () => {
    const [title1  , SetTitle1] = useState("");
    const [title2  , SetTitle2] = useState("");
    const [title3  , SetTitle3] = useState("");
    const [price1 , SetPrice1] = useState("");
    const [price2 , SetPrice2] = useState("");
    const [description , SetDesciption] = useState("");
    const sub = (e) => {
        e.preventDefault();
         
        // Add data to the store
        const db = getFirestore();
        const userRef = collection(db, "products");
        addDoc(userRef,({
            title1: title1,
            title2: title2,
            title3: title3,
            price1: price1,
            price2: price2,
            description: description
        }))
        .then((userRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
 
    return (
        <div>
            <center>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="Title 1"
                      onChange={(e)=>{SetTitle1(e.target.value)}} />
                      <br/><br/>
                      <input type="text" placeholder="Title 2"
                      onChange={(e)=>{SetTitle2(e.target.value)}} />
                      <br/><br/>
                      <input type="text" placeholder="Title 3"
                      onChange={(e)=>{SetTitle3(e.target.value)}} />
                      <br/><br/>
                    <input type="number" placeholder="Old Price"
                      onChange={(e)=>{SetPrice1(e.target.value)}}/>
                      <br/><br/>
                      <input type="number" placeholder="New Price"
                      onChange={(e)=>{SetPrice2(e.target.value)}}/>
                      <br/><br/>
                    <input type="text" placeholder="Description"
                      onChange={(e)=>{SetDesciption(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
 
export default Analytics;