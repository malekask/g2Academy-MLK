import React from "react";
import "../App.css";

const table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3"> Ticket Dash Board</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ticket Number</td>
          <td>Total Hours</td>
          <td>Amount</td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;
