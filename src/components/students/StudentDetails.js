import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import GambarFake from "../layout/GambarFake";

const StudentDetails = (props) => {
  const { student, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (student) {
    return (
      <Card style={{ width: "18rem" }}>
<GambarFake url={`https://i.pravatar.cc/150`} />
        <Card.Body>
          <Card.Title class="text-muted"> {student.title}</Card.Title>

          <Card.Text>{student.motto}</Card.Text>
          <Card.Link href="https://github.com/malekask/g2Academy-MLK">Github</Card.Link>
          <Card.Link href="https://www.facebook.com/Marikheaven">Facebook</Card.Link>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading student...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const students = state.firestore.data.g2academy;
  const student = students ? students[id] : null;
  return {
    student: student,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "g2academy" }])
)(StudentDetails);
