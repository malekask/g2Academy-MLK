import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Header from '../header';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mlk: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mlk').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          mlk: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('mlk').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <>
      <Header/>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Home</Link></h4>
            <h3 class="panel-title">
              {this.state.mlk.nama}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
            
               
              <dt>NIK:</dt>
              <dd>{this.state.mlk.NIK}</dd>  
              <dt>Nama:</dt>
              <dd>{this.state.mlk.nama}</dd> 
              <dt>Jabatan:</dt>
              <dd>{this.state.mlk.jabatan}</dd>
              <dt>Divisi:</dt>
              <dd>{this.state.mlk.divisi}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Show;