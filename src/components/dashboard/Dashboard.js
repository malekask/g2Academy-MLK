import React, { Component } from "react";
import StudentList from "../students/StudentList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,CardGroup } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    const { students, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">

       
{/*       
        <CardDeck>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <ProjectList projects={projects} />
            </Card.Title>
          </Card.Body>
        </Card>
        </CardDeck> */}

        <CardGroup>
  <Card>
    
    <Card.Body>
      <Card.Title><StudentList students={students} /></Card.Title>

    </Card.Body>
    </Card>
    </CardGroup>
        
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.firestore.ordered.g2academy,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "g2academy" }])
)(Dashboard);
