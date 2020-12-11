import React from "react";
import GambarFake from "../layout/GambarFake";
import { CardDeck, Card } from "react-bootstrap";

const StudentSummary = ({ student }) => {
  return (
    // <div class="row">
    //   <div className="col-md-4">
    //     <div className="card-content grey-text text-darken-3">
    //       <GambarFake url={`https://i.pravatar.cc/150`} />
    //       <br></br>
    //       <h5 className="card-title" class="text-muted">
    //         {student.title}
    //       </h5>
    //       <p className="card-content">{student.motto}</p>
    //       <button type="button" href="#">
    //         Go somewhere
    //       </button>

    //       <CardDeck></CardDeck>
    //     </div>
    //   </div>
    // </div>

    <CardDeck>
      <Card>
        <GambarFake url={`https://i.pravatar.cc/150`} />
        <Card.Body>
          <Card.Title>{student.title}</Card.Title>
          <br></br>
          <Card.Text className="card-content">{student.motto}</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default StudentSummary;
