import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Alert } from "@mui/material";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastName: "",
      dateOfBirth: "",
      mobile: "",
      password: "",
      email: jwt_decode(window.localStorage.getItem("token")).user.email,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {firstname, lastName, dateOfBirth, mobile, password} = this.state;
  
    fetch("http://localhost:8000/users/user/62f621be334916de0527d855", {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname, lastName, dateOfBirth, mobile, password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
          alert("3");
      });
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Update Your Details</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            onChange={(e) => this.setState({ firstname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={(e) => this.setState({ lastname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            disabled = "true"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Data Of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Date Of Birth"
            onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your mobile"
            onChange={(e) => this.setState({ mobile: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </div>
      </form>
    );
  }
}