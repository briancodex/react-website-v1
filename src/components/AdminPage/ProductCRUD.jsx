import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCRUD.css';
import firebase from 'firebase/compat/app';

class ProductCRUD extends Component {
  
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title1, title2, title3, description, price1, price2 } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title1,
        title2,
        title3,
        description,
        price1,
        price2,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleDelete = (board) => {
    this.ref.doc(board.key).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  
  handleUpdate = (board) => {
  this.props.history.push(`/edit/${board.key}`);
}


  render() {
    
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              PRODUCT LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/analytics">Add Product</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title1</th>
                  <th>Title2</th>
                  <th>Title3</th>
                  <th>Description</th>
                  <th>Old Price</th>
                  <th>New Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr key={board.key}>
                    <td><Link to={`/Edit/${board.key}`}>{board.title1}</Link></td>
                    <td>{board.title2}</td>
                    <td>{board.title3}</td>
                    <td>{board.description}</td>
                    <td>${board.price1}</td>
                    <td>${board.price2}</td>
                    <td><button className="btn-delete" onClick={() => this.handleDelete(board)}>Delete</button></td>
                    <td><button className="btn-update" onClick={() => this.handleUpdate(board)}>Update</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCRUD
