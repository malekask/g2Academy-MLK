import React from "react";
import StudentSummary from "./StudentSummary";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";

const StudentList = ({ students }) => {
  return (
    
        <CardDeck>
        <Card>
          <Card.Body>
      {students &&
        students.map(student => {
          return (
            
            <Link to={"/student/" + student.id} key={student.id}>
              <StudentSummary student={student} />
            </Link>
          );
        })}
        </Card.Body>
        </Card>
        </CardDeck>
       
    
  );
};

export default StudentList;
