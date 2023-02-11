import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title1: '',
      title2: '',
      title3: '',
      description: '',
      price1: '',
      price2: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('products').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title1: board.title1,
          title2: board.title2,
          title3: board.title3,
          description: board.description,
          price1: board.price1,
          price2: board.price2,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    const updateRef = firebase.firestore().collection('products').doc(this.state.key);
    updateRef.set({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title1: '',
        title2: '',
        title3: '',
        description: '',
        price1: '',
        price2: '',
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PRODUCT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title1">Title1:</label>
                <input type="text" class="form-control" name="title1" value={this.state.title1} onChange={this.onChange} placeholder="Title1" />
              </div>
              <div class="form-group">
                <label for="title2">Title2:</label>
                <input type="text" class="form-control" name="title2" value={this.state.title2} onChange={this.onChange} placeholder="Title2" />
              </div>
              <div class="form-group">
                <label for="title3">Title3:</label>
                <input type="text" class="form-control" name="title3" value={this.state.title3} onChange={this.onChange} placeholder="Title3" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="price1">Old Price:</label>
                <input type="number" class="form-control" name="price1" value={this.state.price1} onChange={this.onChange} placeholder="Old Price" />
              </div>
              <div class="form-group">
                <label for="price2">New Price:</label>
                <input type="text" class="form-control" name="price2" value={this.state.price2} onChange={this.onChange} placeholder="New Price" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
