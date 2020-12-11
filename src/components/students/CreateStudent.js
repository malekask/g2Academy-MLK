import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent } from "../../store/actions/studentActions";
import { Redirect } from "react-router-dom";

class CreateStudent extends Component {
  state = {
    title: "",
    motto: "",
    pic: [],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createStudent(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Student</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="motto">Motto</label>
            <textarea
              id="motto"
              onChange={this.handleChange}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <input type="file" id="pic" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student) => dispatch(createStudent(student)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);
