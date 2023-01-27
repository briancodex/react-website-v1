import {db} from '../firebase.js';
import {useState} from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
 
const AddProducts = () => {
    const [title  , SetTitle] = useState("");
    const [price , SetPrice] = useState("");
    const [description , SetDesciption] = useState("");
    const sub = (e) => {
        e.preventDefault();
         
        // Add data to the store
        const db = getFirestore();
        const userRef = collection(db, "products");
        addDoc(userRef,({
            title: title,
            price: price,
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
                    <input type="text" placeholder="Title"
                      onChange={(e)=>{SetTitle(e.target.value)}} />
                      <br/><br/>
                    <input type="number" placeholder="Price"
                      onChange={(e)=>{SetPrice(e.target.value)}}/>
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
 
export default AddProducts;