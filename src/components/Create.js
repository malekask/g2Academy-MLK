import React, { Component } from 'react';

import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('mlk');
    this.state = {
        NIK: '',
      nama: '',
      jabatan: '',
      divisi: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { NIK, nama, jabatan, divisi } = this.state;

    this.ref.add({
        NIK,
      nama,
      jabatan,
      divisi
    }).then((docRef) => {
      this.setState({
          NIK:'',
        nama: '',
        jabatan: '',
        divisi: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { NIK, nama, jabatan, divisi } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              MLK Employe
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Home</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="title">NIK</label>
                <input type="text" class="form-control" name="NIK" value={NIK} onChange={this.onChange} placeholder="NIK" />
              </div>
              <div class="form-group">
                <label for="title">Nama:</label>
                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Jabatan:</label>
                <input class="form-control" name="jabatan" onChange={this.onChange} placeholder="Jabatan" value={jabatan} />
              </div>
              <div class="form-group">
                <label for="author">Divisi:</label>
                <input type="text" class="form-control" name="divisi" value={divisi} onChange={this.onChange} placeholder="Divisi" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;