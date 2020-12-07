import React, { Component } from "react";
import "../App.css";

class TimeStamp extends Component {
  buttonSyle = {
    backgroundColor: "#607D8B"
  };

  state = {
    clockInTime: " ",
    clockOutTime: " ",
    textIn: " ",
    textOut: " ",
    totalHours: " ",
    textHour: "",
    textAmount: "",
    totalAmounts: "",
    noplat: "",
    textJenis:"",
    disabled: false
  };

  ClockInEventHandler = () => {
    this.timeIn = new Date().toLocaleTimeString();
    this.timeOne = new Date();
    this.setState({
      clockInTime: this.timeIn,
      textIn: <strong>C - IN : </strong>,
      disabled: true
    });
  };

  setValueInput = (value, name) => {
    this.setState({
      [name]: value
  })

  }

  ClockOutMotorEventHandler = () => {
    this.timeOut = new Date().toLocaleTimeString();
    this.timeTwo = new Date();
    let hours = 10 * 60 * 60;
    let hoursDuaMnt = 1000;
    
    
   
    this.diff = this.timeTwo - this.timeOne;
    
   
    
    this.totalHour = (this.diff / hours).toFixed(2);
    this.totalAmount =(this.totalHour * hoursDuaMnt);
    
    
    this.setState({
      textJenis: <strong>Type : Motor </strong>,
      clockOutTime: this.timeOut,
      textOut: <strong>C - OUT : </strong>,
      totalHours: this.totalHour,
      textHour: <strong>Total Time: </strong>,
      totalAmounts: this.totalAmount,
      textAmount: <strong>Total Bayar: </strong>
      
    });
    console.log(this.state.totalHours);
  };

  ClockOutMobilEventHandler = () => {
    this.timeOut = new Date().toLocaleTimeString();
    this.timeTwo = new Date();
    let hours = 10 * 60 * 60;
    let hoursDuaMnt = 2000;
    
    
   
    this.diff = this.timeTwo - this.timeOne;
    
   
    
    this.totalHour = (this.diff / hours).toFixed(2);
    this.totalAmount =(this.totalHour * hoursDuaMnt);
    
    
    this.setState({
      textJenis: <strong>Type : Mobil </strong>,
      clockOutTime: this.timeOut,
      textOut: <strong>C - OUT: </strong>,
      totalHours: this.totalHour,
      textHour: <strong>Total Time: </strong>,
      totalAmounts: this.totalAmount,
      textAmount: <strong>Total Bayar: </strong>
      
    });
    console.log(this.state.totalHours);
  };

  render() {
    return (
      
      <div className="card">
       <strong>PARKIR | MLK</strong>
        <h2 style={{ color: "red" }}>PARK00{this.props.ticket}</h2>
        <input
          type="text" placeholder="Nomor Kendaraan"
          onChange={(e) => this.setValueInput(e.target.value, "noplat" ) }
        />
        
        
        {/* <select onChange={(e)=> this.setValueInput(e.target.value, "jenis")}>
          <option>Motor</option>
          <option>Mobil</option>
        </select> */}
      
        <button
          disabled={this.state.disabled}
          className="button"
          onClick={this.ClockInEventHandler}
        >
          C - In
        </button>
        <button className="button" onClick={this.ClockOutMotorEventHandler}>
          C - Out Motor
        </button>
        <button className="button" onClick={this.ClockOutMobilEventHandler}>
          C - Out Mobil
        </button>
        
        <div>
        <h2 style={{ color: "red" }}>PARK00{this.props.ticket}</h2>
          <p>
            {this.state.noplat}
            </p>
            <p>
            {this.state.textJenis}
            </p>
          <p>
            {this.state.textIn}
            {this.state.clockInTime}
          </p>
        </div>
        <div>
          <p>
            {this.state.textOut}
            {this.state.clockOutTime}
          </p>
          <p>
            {this.state.textHour}
            {this.state.totalHours} 
          </p>
          <p>
            {this.state.textAmount}
            {this.state.totalAmounts} 
          </p>
        </div>
      </div>
      
    );
  }
}

export default TimeStamp;
