
import React, { useState , useEffect } from 'react';
import { MDBTableHead, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from "./adminNav";

function AdminDashboard() {
    const [title, setTitle] = useState(false);
    const [description, setDescription] = useState(false);

    return (
    <div>
    <div class="dashboard-main-wrapper">
        <Navbar/>
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i> Dashboard</h4>
                <hr/>
                <div className="row">
                  <h4 className="m-0 p-0 mt-2">Your Notes</h4>
                  <div className="text-end m-0 p-0"> <button className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Add</button></div>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header bg-dark">
                          <h5 class="modal-title text-white">Add Notes</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group mt-3">
                              <h6 className="fw-normal text-black-50">Title</h6>
                              <input type="password" class="form-control"  id="pass" onChange={(e) =>{
                                setTitle(e.target.value);
                              }}/>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                              <h6 className="fw-normal text-black-50">Description</h6>
                              <CKEditor
                                  editor={ ClassicEditor }
                                  data=""
                                  onChange={(event, editor) =>{
                                    const data = editor.getData();
                                    setDescription(data);
                                }}
                              />
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MDBTable className="mt-2">
                     <MDBTableHead>
                        <tr style={{backgroundColor:'#3A3A3A'}}>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Note ID</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Title</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Added Date</th>
                            <th scope='col' className="text-white fw-normal" style={{fontSize:'19px',letterSpacing:'1px'}}>Action</th>
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