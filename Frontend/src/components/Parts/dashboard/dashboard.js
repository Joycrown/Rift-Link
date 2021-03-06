import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./sidebarcontent";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import notify from '../../images/bell.png'
import carbon from '../../images/carbon_add-filled.png'

import './packages.css';
import './dashboard.css';
import MaterialTitlePanel from "./material_title_panel";
import axios from "axios";
import { Link} from "react-router-dom";
import Swal from "sweetalert2"
import {withRouter} from "./withRouter"

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};
const initialValues = {
  account: '',
  password:'',
  id:'',
  server:'',
 
}
const handleSubmit = (values,props) => {
  submitLogin(values,props);
}
const validationSchema = Yup.object().shape({
password: Yup.string().required('Field is required'),
account: Yup.string().required('Field is required'),
server: Yup.string().required('Field is required'),
id: Yup.string().required('Field is required')
})

const submitLogin = async (values,props) =>{
        
  const requestOptions = {
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify(`grant_type=&username=${values.email}&password=${values.password}&scope=&client_id=&client_secret=`)
  }
  try{
      const res = await fetch('/token', requestOptions);
      const user = await res.json()
      console.log(user)
      if (res.status===200){
          console.log(user.access_token)
          localStorage.setItem('token', user.access_token)
          // navigate('/dashboard')
       
      }else if(res.status ===400){
          Swal.fire({
          icon:'error',
          title: 'Oops...',
          text: 'Invalid Email or Password'
          })
      }else{
          Swal.fire({
          icon:'error',
          title: 'Oops...',
          text: 'Something went wrong! Try Again'
          })
      }
  }catch(e){
      if(e.response){
      
     
      }
  }
}


const mql = window.matchMedia(`(min-width: 800px)`);

class Dashboard extends React.Component  {

  
  

  // componentDidMount(){
  //   const config={
  //     headers:{
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     },
  //     method: "GET",
  //   }
  //   axios.get('/users/me/',config).then((res)=>{
  //       console.log(res.data)
  //       localStorage.setItem('user', res.data.first_name)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //     if (error){
  //       this.props.navigate('/signin')
  //     }
  //   }
  //   )
  //   }
    constructor(props) {
      super(props);
      
      this.state = {
        docked: mql.matches,
        open: false
      };
      
      
      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      this.toggleOpen = this.toggleOpen.bind(this);
      this.onSetOpen = this.onSetOpen.bind(this);
    }
    
    componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
    
  }
 
 
  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <Link
            onClick={this.toggleOpen}
           to = {'/dashboard'}
            style={styles.contentHeaderMenuLink}
          >
          
          </Link>
        )}
        <span></span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };
    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <div className="container">
              <div className="d-flex justify-content-between">
                  <div className = ''>
                    <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Hello {localStorage.getItem('user')}!</h3>
                  </div>
                  <div className = 'pt-5'>
                      <img src={notify} alt="icon" className=''></img>
                    </div>
              </div>
              <div className="dash">
                <div className="d-flex pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead dash-subhead-tab pack-subhead-mob ">Need help creating a trading account?</h3>
                  </div>
                  <div className = "ps-5">
                    <button class="btn contact-btn contact-btn-tab btn-primary"> CONTACT SUPPORT</button>
                  </div>
                </div>
              </div>
              {/* mob */}
              <div className="dash-mob">
                <div className="d-flex pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead dash-subhead-tab dash-subhead-mob ">Need help creating a <br/>trading account?</h3>
                  </div>
                  <div className = "ps-5 pt-1">
                    <button class="btn contact-btn contact-btn-tab  contact-btn-mob btn-primary"> CONTACT SUPPORT</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-5">
                  <div className="card card-dash card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon}  alt="icon" className='acct-icon'></img>
                      </div>
                      <div className="pt-3">
                        <h2 className="acc-text acc-text-tab text-black pb-4">Add New Account</h2>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
              <div className=" dash pt-5">
                  <div className="card card-dash card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon}  alt="icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='acct-icon'></img>
                      </div>
                      {/* <!-- Modal --> */}
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class= 'card-modal'>
                              <div class = 'card-body-modal'>
                                <div class = 'modal-head d-flex justify-content-around container pt-3'>
                                  <div className="ps-2 ">
                                    <h4 className="text-white modal-head-text">Provide Metatrader Account</h4>
                                  </div>
                                  <div className="ps-3">
                                    <button type="button" class="btn-close modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                </div>
                                <div className="modal-form container ps-5">
                                <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={validationSchema}>
                                      {(props) =>(
                                        <Form>

                                     
                                      <div class="mb-3 pt-5">
                                          <Field as="select" class="form-control" id="exampleInputEmail1" 
                                          name="account">
                                          <option value="">Account type</option>
                                          <option>Metatrader 4</option>
                                          <option>Metatrader 5</option>
                                          
                                        </Field>
                                          <ErrorMessage
                                              name="account" 
                                              class="validation"
                                              component="div" />
                                          <div id="emailHelp" class="form-text"></div>
                                      </div>
                                      <div class="mb-3">
                                          <label for="exampleInputPassword1" class="form-label"></label>
                                          <Field type="text" class="form-control" placeholder="Metatrader Login ID"
                                          id="exampleInputPassword1" name="id" 
                                          />
                                          <ErrorMessage 
                                          name="id" 
                                          class="validation"
                                          component="div" 
                                            />
                                      </div>
                                      <div class="mb-3">
                                          <label for="exampleInputPassword1" class="form-label"></label>
                                          <Field type="text" class="form-control" placeholder="Metatrader Password"
                                          id="exampleInputPassword1" name="password" 
                                          />
                                          <ErrorMessage 
                                          name="password" 
                                          class="validation"
                                          component="div" 
                                            />
                                      </div>
                                     
                                      <div class="mb-3 pt-3">
                                          <Field type="text" class="form-control" placeholder="Broker Server"
                                          id="exampleInputPassword1" name="server" 
                                          />
                                          <ErrorMessage 
                                          name="server" 
                                          class="validation"
                                          component="div" 
                                            />
                                      </div>
                                     
                                      <div className = 'container pe-5 pt-5 pb-5'>
                                          <button type="submit" class="btn sign-btn-modal sign-btn-tab btn-primary">SUBMIT</button>
                                      </div>
                                        </Form>
                                      )}
                                  </Formik>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-3">
                        <h2 className="acc-text acc-text-tab text-black pb-4">Add New Account</h2>
                      </div>
                  </div>

                  </div>
              </div>
            </div>
        </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default withRouter( Dashboard);