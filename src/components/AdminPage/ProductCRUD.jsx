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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              PRODUCT LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/analytics">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title1</th>
                  <th>Title2</th>
                  <th>Title3</th>
                  <th>Description</th>
                  <th>Old Price</th>
                  <th>New Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title1}</Link></td>
                    <td>{board.title2}</td>
                    <td>{board.title3}</td>
                    <td>{board.description}</td>
                    <td>${board.price1}</td>
                    <td>${board.price2}</td>
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

export default ProductCRUD;