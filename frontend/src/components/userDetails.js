import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export default class UserDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      mobile: "",
      password: jwt_decode(window.localStorage.getItem("token")).user.password,
      email: jwt_decode(window.localStorage.getItem("token")).user.email,
      id: jwt_decode(window.localStorage.getItem("token")).user._id,
      state: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, dateOfBirth, mobile, password, email, state, id } = this.state;


    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        dateOfBirth,
        mobile,
        password,
        state,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("done");
          localStorage.clear();
          window.location.href = '/'
      });
  }

  render() {
    return (
      <div>
        <div
          class="global-container"
          style={{ paddingTop: "2%", paddingBottom: "1%" }}
        >
          <div class="card login-form shadow border-0">
            <div class="card-head bg-header rounded-top">
              <h4 class="card-title text-center pt-3 pb-2  text-uppercase text-white">
                Update Your Details
              </h4>
            </div>
            <div class="card-body">
              <div class="card-text">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      onChange={(e) =>
                        this.setState({ firstname: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        this.setState({ lastname: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      disabled
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
                      onChange={(e) =>
                        this.setState({ dateOfBirth: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your mobile"
                      onChange={(e) =>
                        this.setState({ mobile: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      disabled
                    />
                  </div>

                  <div class="mt-3 mb-2">
                    <div class="d-grid gap-2">
                      <MDBBtn class="btn text-white  d-letter-spacing shadow-0 fw-light btn-primary">
                        <span className="h6">Submit</span>
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
