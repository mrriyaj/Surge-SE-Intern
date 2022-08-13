
import React, { useState } from 'react';
import { MDBBtn , MDBCol , MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';
import jwt_decode from "jwt-decode";

var schema = new passwordValidator();

function Login() {

    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    async function login(e){
       e.preventDefault();
       console.log(email, password);
       fetch("http://localhost:8000/auth/login", {
         method: "POST",
         crossDomain: true,
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
           email,
           password,
         }),
         })
         .then((res) => res.json())
         .then((data) => {
           
           if (data.status === "ok") {
            Swal.fire({  
              title: "Success!",
              text: "login successful",
              icon: 'success',
              confirmButtonText: "OK",
              type: "success"})
             //var decoded = jwt_decode(data.data);
             if(jwt_decode(data.data).user.state == false){
               window.location.href = "./userDetails";
             }else{
               if(jwt_decode(data.data).user.accountType == "student"){
                 window.location.href = "./StudentDashboard";
               }else{
                 window.location.href = "./AdminDashboard";
               }
             }
              window.localStorage.setItem("token", data.data);
           }
         });
    }

      return (
      <div>
        <div class="global-container"  style={{paddingTop:'5%', paddingBottom:'1%'}}>
            <div class="card login-form shadow border-0">
                <div class="card-head bg-header rounded-top">
                    <h4 class="card-title text-center pt-3 pb-2  text-uppercase text-white">
                            Sign in
                    </h4>
                </div>
            <div class="card-body" >
                <div class="card-text">
                    <form action="#" method="post" >
                    <h6 className="fw-normal text-black-50">Email</h6>
                    <div class="form-group  mt-3">
                        <input type="text" class="form-control" 
                         onChange={(e) =>{
                            setEmail(e.target.value);
                        }}/>
                    </div>
                 
                   <div class="form-group mt-3">
                         <h6 className="fw-normal text-black-50">Password</h6>
                        <input type="password" class="form-control"  id="pass" onChange={(e) =>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                     
                    <div class="mt-3 mb-2">
                         <div class="d-grid gap-2">
                                <MDBBtn onClick={login} class="btn text-white shadow-0 fw-light btn-primary" ><span className="h6">Login</span></MDBBtn> 
                         </div>
                    </div>
                    <center>
                     <MDBRow >
                        <MDBCol size='4'><a href="/ResetPassword" class="text-muted"></a></MDBCol>
                        <MDBCol size='5'></MDBCol>
                        <MDBCol size='3'><a href="/sign-up" class="text-muted"><span>Registration</span></a></MDBCol>
                     </MDBRow>
                    </center>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
      )
}

export default Login;