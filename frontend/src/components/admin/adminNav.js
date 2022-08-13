import React, { Component } from "react";
import Swal from 'sweetalert2';

class Navbar extends Component { 
render() {
    function logout(){
        
          	Swal.fire({  
                title: "Success!",
                text: "Logout Success",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/Login";
                    }
            });
    }

    
return (
  <div>
      <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bgTopNav fixed-top">
                <a class="navbar-brand h1 fw-bold" style={{fontSize:'25px', textAlign:'center'}} href="Admin"><span className="text-black">Surge Global</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">
                        <li class="nav-item dropdown nav-user">
                            <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-fw fa-user"></i></a>
                            <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                <div class="nav-user-info">
                                    <h5 class="mb-0 text-white nav-user-name text-capitalize">ssss</h5>
                                    <span class="status"></span><span>Available</span>
                                </div>
                                <a class="dropdown-item" href="#"><i class="fas fa-user mr-2"></i>Account</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-cog mr-2"></i>Setting</a>
                                <a class="dropdown-item" href="#" onClick={logout}><i class="fas fa-power-off mr-2"></i>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="nav-left-sidebar sidebar-dark">
            <div class="menu-list" style={{paddingBottom:'40%'}}>
                <nav class="navbar navbar-expand-lg navbar-light shadow-0">
                    <a class="d-xl-none d-lg-none" href="Admin">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav flex-column">
                           <h4 className="mt-4 mb-4 text-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</h4>
                            <li class="nav-item ">
                                <a class="nav-link active" style={{fontSize:'17px'}} href="#!"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Users </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" style={{fontSize:'17px'}} href="#!"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"> Settings </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
   );
 }
}
export default Navbar; 