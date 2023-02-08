import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products').doc(this.props.match.params.id);
    this.state = {
      title1: '',
      title2: '',
      title3: '',
      description: '',
      price1: '',
      price2: ''
    };
  }

  componentDidMount() {
    this.ref.get().then((doc) => {
      if (doc.exists) {
        const product = doc.data();
        this.setState({
          title1: product.title1,
          title2: product.title2,
          title3: product.title3,
          description: product.description,
          price1: product.price1,
          price2: product.price2
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.ref.update({
      title1: this.state.title1,
      title2: this.state.title2,
      title3: this.state.title3,
      description: this.state.description,
      price1: this.state.price1,
      price2: this.state.price2
    }).then(() => {
      console.log("Document successfully updated!");
      this.props.history.push("/");
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Update Product
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title1">Title1:</label>
                <input type="text" className="form-control" name="title1" value={this.state.title1} onChange={this.onChange} placeholder="Title1" />
              </div>
              <div className="form-group">
                <label htmlFor="title2">Title2:</label>
                <input type="text" className="form-control" name="title2" value={this.state.title2} onChange={this.onChange} placeholder="Title2" />
              </div>
              <div className="form-group">
                <label htmlFor="title3">Title3:</label>
                <input type="text" className="form-control" name="title3" value={this.state.title3} onChange={this.onChange} placeholder="Title3" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{this.state.description}</textarea>
              </div>
              <div className="form-group">
                <label htmlFor="price1">Price1:</label>
                <input type="number" className="form-control" name="price1" value={this.state.price1} onChange={this.onChange} placeholder="Price1" />
              </div>
              <div className="form-group">
                <label htmlFor="price2">Price2:</label>
                <input type="number" className="form-control" name="price2" value={this.state.price2} onChange={this.onChange} placeholder="Price2" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Edit);
