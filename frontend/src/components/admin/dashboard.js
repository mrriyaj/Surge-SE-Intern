
import React, { useState , useEffect } from 'react';
import { MDBTableHead, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "./adminNav";

function AdminDashboard() {
    
    return (
    <div>
    <div class="dashboard-main-wrapper">
        <Navbar/>
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard</h4>
                <hr/>
                <div className="row">
                  <h4 className="m-0 p-0 mt-2">User List</h4>
                  <MDBTable>
                     <MDBTableHead>
                        <tr style={{backgroundColor:'#3A3A3A'}}>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>User ID</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Full Name</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Data Of Birth</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Mobile Number</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Email</th>
                        </tr>
                     </MDBTableHead>
                     <MDBTableBody>
                        <tr>
                          <td></td>
                        </tr>
                     </MDBTableBody>
                  </MDBTable>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
};


export default AdminDashboard;