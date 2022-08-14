import React, { useState, useEffect } from "react";
import { MDBBtn, MDBCol, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import Swal from "sweetalert2";

function SignUp() {
  const [email, setEmail] = useState(false);
  

  function register(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status === "ok") {
          Swal.fire({
            title: "Success!",
            text: data.alert,
            icon: "success",
            confirmButtonText: "OK",
            type: "success",
          }).then((okay) => {
            if (okay) {
              window.location.href = "/sign-in";
            }
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: data.alert,
            icon: "success",
            confirmButtonText: "OK",
            type: "success",
          }).then((okay) => {
            if (okay) {
              window.location.href = "/sign-in";
            }
          });
        }
      });
  }

  return (
    <div>
      <div
        class="global-container"
        style={{ paddingTop: "5%", paddingBottom: "1%" }}
      >
        <div class="card login-form shadow border-0">
          <div class="card-head bg-header rounded-top">
            <h4 class="card-title text-center pt-3 pb-2  text-uppercase text-white">
              Sign Up
            </h4>
          </div>
          <div class="card-body">
            <div class="card-text">
              <form action="#" method="post">
                <h6 className="fw-normal text-black-50">Email</h6>
                <div class="form-group  mt-3">
                  <input
                    label='Email input' id='typeEmail' type='email'
                    name="email"
                    class="form-control"
                    required = "true"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="mt-3 mb-2">
                  <div class="d-grid gap-2">
                    <button
                      onClick={register}
                      class="btn text-white  d-letter-spacing shadow-0 fw-light btn-primary"
                    >
                      <span className="h6">Sign Up</span>
                    </button>
                  </div>
                </div>
                <center>
                  <MDBRow>
                    <MDBCol size="2"></MDBCol>
                    <MDBCol size="6"></MDBCol>
                    <MDBCol size="4"></MDBCol>
                  </MDBRow>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
