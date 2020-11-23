import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../firebase';
import NavBar from '../navbar';



class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mlk');
    this.unsubscribe = null;
    this.state = {
      mlk: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mlk = [];
    querySnapshot.forEach((doc) => {
      const { NIK, nama, jabatan, divisi } = doc.data();
      mlk.push({
        key: doc.id,
        doc, // DocumentSnapshot
        
        nama,
        NIK,
        jabatan,
        divisi,
      });
    });
    this.setState({
      mlk
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  

  render() {
   
    return (
      <>
      <NavBar/>
     
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Data Karyawan
            </h3>
          </div>
          
          <div >
            <menubar ><Link to="/create">Tambah Data</Link></menubar>
            
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>NIK</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Divisi</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mlk.map(mlk =>
                  <tr>
                    <td>{mlk.NIK}</td>
                    <td><Link to={`/show/${mlk.key}`}>{mlk.nama}</Link></td>
                    <td>{mlk.jabatan}</td>
                    <td>{mlk.divisi}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
     
    );
  }
}

export default Home;