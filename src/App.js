import React, { Component } from "react";
import TimeStamp from "./TimeStamp/TimeStamp";
import Table from "./Table/Table";
import "./App.css";

class App extends Component {
  state = {
    showComponent: [],
    ticketNumber: 1,
    
  };

  tickets = [];
  ticketNumber = 1;
  

  // Event Handler function
  ticketIssueHandler = () => {
    let ticket = this.ticketNumber++;
    this.tickets.push(<TimeStamp ticket={this.ticketNumber - 1} />);
    this.setState({
      showComponent: this.tickets,
      ticketNumber: ticket,
      
    });
    console.log(this.ticketNumber);
    console.log(this.tickets.length);
  };

  render() {
    return (
      <div className="App">
        <div className="issueTicket">
          <button className="button" onClick={this.ticketIssueHandler}>
            <h2>PENCET DISINI</h2>
          </button>
        </div>
        <div className="container">
          <div className="cards">
            <div className="cardDisplay">{this.state.showComponent}</div>
          </div>
          <div className="table">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
