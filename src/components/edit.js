import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      NIK: '',
      nama: '',
      jabatan: '',
      divisi: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mlk').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const mlk = doc.data();
        this.setState({
          key: doc.id,
          NIK: mlk.NIK,
          nama: mlk.nama,
          jabatan: mlk.jabatan,
          divisi: mlk.divisi
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({mlk:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { NIK, nama, jabatan, divisi } = this.state;

    const updateRef = firebase.firestore().collection('mlk').doc(this.state.key);
    updateRef.set({
      NIK,
      nama,
      jabatan,
      divisi
    }).then((docRef) => {
      this.setState({
        key: '',
        NIK:'',
        nama: '',
        jabatan: '',
        divisi: ''
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
              EDIT EMPLOYE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Home</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="title">Nik:</label>
                <input type="text" class="form-control" name="NIK" value={this.state.NIK} onChange={this.onChange} readOnly placeholder="NIK" />
              </div>
              <div class="form-group">
                <label for="title">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="description">Jabatan:</label>
                <input type="text" class="form-control" name="jabatan" value={this.state.jabatan} onChange={this.onChange} placeholder="jabatan" />
              </div>
              <div class="form-group">
                <label for="author">Divisi:</label>
                <input type="text" class="form-control" name="divisi" value={this.state.divisi} onChange={this.onChange} placeholder="Divisi" />
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