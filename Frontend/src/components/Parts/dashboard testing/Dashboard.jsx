import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import {useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import notify from '../../images/bell.png'
import carbon from '../../images/carbon_add-filled.png'
import './packages.css';
import './dashboard.css';
import ModalApp from '../modals/modalapp'
import axios from "axios";
import { Link} from "react-router-dom";
import Swal from "sweetalert2"
export default function Dashboard() {

  const navigate = useNavigate();
    const [data, setData] = useState([]);

  //   useEffect(()=>{
  //   const config={
  //     headers:{
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     },
  //     method: "GET",
  //   }
  //   axios.get('/users/me/',config)
  //   .then(res =>res.data).
  //   then(receivedData => setData(receivedData))
  //   .catch((error)=>{
  //     console.log(error)
  //     if (error){
  //       navigate('/signin')
  //     }
  //   }
  //   )
  // },[])
  // console.log(data.first_name)


  
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
       
        .row__one,
        
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
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
  
    const routeChange = () =>{ 
        let path = `/modal`; 
        navigate(path);
      }
  
  return (
    <Section>
      <div className="grid">
        <div className="row__one">
        <div className="container">
              <div className="d-flex justify-content-between">
                  <div className = ''>
                    <h3 className="pack-head pack-head-tab pack-head-mob pt-5">Hello {data.first_name}!</h3>
                  </div>
                  <div className = 'pt-5'>
                      <img src={notify} alt="icon" className=''></img>
                    </div>
              </div>
              <div className="dash">
                <div className="d-flex pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead subhead-tab pack-subhead-mob ">Need help creating a trading account?</h3>
                  </div>
                  <div className = "ps-5">
                    <button class="btn contact-btn contact-btn-tab btn-primary"> CONTACT SUPPORT</button>
                  </div>
                </div>
              </div>
              {/* mob */}
              <div className="dash-mob">
                <div className="d-flex justify-content-between pt-5 pb-4">
                  <div className = "">
                    <h3 className="dash-subhead-mob ">Need help creating a trading account?</h3>
                  </div>
                  <div className = "">
                    <button class="btn contact-btn-mob btn-primary" onClick={()=>{ModalApp()}}> CONTACT SUPPORT</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-5">
                  <div className="card card-dash card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon} onClick={routeChange} alt="icon" className='acct-icon'></img>
                      </div>
                      <div className="pt-3">
                        <h2 className="acc-text acc-text-tab text-black pb-4">Add New Account</h2>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
              <div className="dash pt-5">
                  <div className="card card-dash card-dash-tab card-dash-mob ">
                    <div className="card-body-dash text-center">
                      <div className = 'pt-5'>
                        <img src={carbon}  alt="icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='acct-icon acct-icon-tab'></img>
                      </div>
                      {/* <!-- Modal --> */}
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class= ''>
                              <div class = 'card-body-modal'>
                                <div class = 'modal-head d-flex justify-content-around container pt-3'>
                                  <div className="ps-2 ">
                                    <h4 className="text-white modal-head-text modal-head-text-tab">Provide Metatrader Account</h4>
                                  </div>
                                  <div className="ps-3">
                                    <button type="button" class="btn-close modal-close modal-close-tab" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                </div>
                                <div className="modal-form container ps-5">
                                <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={validationSchema}>
                                      {(props) =>(
                                        <Form>

                                     
                                      <div class="mb-3 pt-5 ">
                                          <Field as="select" class="form-control input-form-tab" id="exampleInputEmail1" 
                                          name="account">
                                          <option value="">Account type</option>
                                          <option>Metatrader 4</option>
                                          <option>Metatrader 5</option>
                                          
                                        </Field>
                                          <ErrorMessage
                                              name="account" 
                                              class="validation validation-tab"
                                              component="div" />
                                          <div id="emailHelp" class="form-text"></div>
                                      </div>
                                      <div class="mb-3">
                                          <label for="exampleInputPassword1" class="form-label"></label>
                                          <Field type="text" class="form-control input-form-tab" placeholder="Metatrader Login ID"
                                          id="exampleInputPassword1" name="id" 
                                          />
                                          <ErrorMessage 
                                          name="id" 
                                          class="validation validation-tab"
                                          component="div" 
                                            />
                                      </div>
                                      <div class="mb-3">
                                          <label for="exampleInputPassword1" class="form-label"></label>
                                          <Field type="text" class="form-control input-form-tab" placeholder="Metatrader Password"
                                          id="exampleInputPassword1" name="password" 
                                          />
                                          <ErrorMessage 
                                          name="password" 
                                          class="validation validation-tab"
                                          component="div" 
                                            />
                                      </div>
                                     
                                      <div class="mb-3 pt-3">
                                          <Field type="text" class="form-control input-form-tab" placeholder="Broker Server"
                                          id="exampleInputPassword1" name="server" 
                                          />
                                          <ErrorMessage 
                                          name="server" 
                                          class="validation validation-tab"
                                          component="div" 
                                            />
                                      </div>
                                     
                                      <div className = 'container pe-5 pt-5 pb-5'>
                                          <button type="submit" class="btn sign-btn-modal sign-btn-modal-tab btn-primary">SUBMIT</button>
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
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100%;
  // .grid {
  //   display: flex;
  //   flex-direction: column;
  //   height: 100%;
  //   gap: 1rem;
  //   // margin-top: 2rem;
  //   .row__one {
  //     display: grid;
  //     grid-template-columns: repeat(2, 1fr);
  //     height: 50%;
  //     gap: 1rem;
  //   }
  //   .row__two {
  //     display: grid;
  //     grid-template-columns: repeat(3, 1fr);
  //     gap: 1rem;
  //     height: 50%;
  //   }
  // }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
