import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import notify from '../../images/bell.png'
import carbon from '../../images/carbon_add-filled.png'
import '../dashboard testing/packages.css';
import '../dashboard testing/dashboard.css';
// import Dash from '../modals/sidebar-modal'
import axios from "axios";
import { Link} from "react-router-dom";
import Swal from "sweetalert2"
import { GiToken } from "react-icons/gi";
export default function Dash() {


  
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
    platform: '',
    password:'',
    login:'',
    name: '',
    server:'',
    baseCurrency:"USD",
    region:'new-york',
    reliability:'regular',
    copyFactoryRoles:['SUBSCRIBER'],
    copyFactoryResourceSlots:1 ,
    application: "MetaApi",
    quoteStreamingIntervalInSeconds: 5,
    slippage: 30,
    magic: 0,
    manualTrades: false,
    type: "cloud-g2",




   
  }
  const handleSubmit = (values,props) => {
    submitLogin(values,props);
  }
  const validationSchema = Yup.object().shape({
  password: Yup.string().required('Field is required'),
  platform: Yup.string().required('Field is required'),
  server: Yup.string().required('Field is required'),
  login: Yup.string().required('Field is required'),
  name: Yup.string().required('Field is required')
  })
  
  const submitLogin = async (values) =>{
    console.log(values)
    const requestOptions = {
        // method: "POST",
        headers: {'Content-Type': 'application/json', Accept: 'application/json',
                  'auth-token': 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyM2ZiZjhjZTA2ZDY2NjgzNGQ1ZWRmZDg5MmZjNmI1NiIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaWF0IjoxNjQ4NTk3MjU4LCJyZWFsVXNlcklkIjoiMjNmYmY4Y2UwNmQ2NjY4MzRkNWVkZmQ4OTJmYzZiNTYifQ.lfGKNnPwSS9XdPhAOni3fIXXXyT4U7oaOmNv04hOewv3q74KFAuS-Z9PtwM-mdZV6tJKQZOYNnwdRUR6rRqiV0qYZqZb5zyg0vqBI8qsRUyt1NAEeDKCgICGo34WOWMq_quQTfEi5zcD3isr_JWlPS1HshD6R770sYopAHB-WNdMjLqsrsBaD4XdGHj7VBBa_2kmw7yb8dnpME4qy4T8ztWYjpXpVDEeXnq4AK_VVoom_On4fJW674-ranSN8hEQzeEBHjXj2WaEE_a6QyjxxMcVjWHOcXOuDFDfmZPgetACxWtvRM3E_CGCDAu4FWj1Duuy9aylIbi4exqqDz83qnA42MnmQ32L6b9euDepwDVovj-Q0jp2w5zyBJJ_-bQ4HocpvnlP1skphMRNwopPlhcWF7CIFHsD9TA7JB6V2EC8VJeCr7Ig1BnWPuJf1Aeji5EltBMK18G8xtUuuFAXpFgvj3yRp52IHiVNzk9MQHBDxQBLM46sZOux7SpBg6j2uszmfuU4gJ4aD1L3No-vZ2sBlufi5hLyx65zSmGrTAAuKwwecr2uyvi1nuB7xv91h6dVNg6_PMXQYhW3ZV-1N5yKl7jj6FIw8bRKoQWuO2iLrTt9O-_KQMbD6O6orrjEaqtJFv7LtmzTtGVnCP7mDNH5zEt8ET5OuO_g1V7pzjE'}
        
    }
    
    const url='https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts'
    try{
        const res = await axios.post(url,values,requestOptions);
        console.log(res)
    }catch(e){
        if(e.res){
       
        }
    }
  }
  
  
  return (
    <Section>
      <div className="grid">
        <div className="row__one">
            <div className="container">
            <div class= ''>
                <div class = 'card-body-modal'>
                    <div class = 'modal-head-mob d-flex justify-content-around pt-5'>
                        <div className="">
                        <h4 className="modal-head-text-mob">Provide Metatrader Details</h4>
                        <h5 className="modal-subhead-text-mob">
                          Kindly ensure that your Metatrader account is funded with your preferred capital before deploying it on our server.
                        <p className="modal-subhead-text-mob1"><b>Demo accounts are not allowed.</b></p>
                        <p className="modal-subhead-text-mob2">If found, it will be deleted immediately without notice.
                        </p>
                        </h5>
                          
                        
                        </div>
                    </div>
                    <div className="modal-form container pt-2">
                        <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={validationSchema}>
                            {(props) =>(
                            <Form>
                                <div class="mb-3 pt-2">
                                    <Field as="select" class="form-control input-form-tab" id="exampleInputEmail1" 
                                    name="platform">
                                    <option value="">Account type</option>
                                    <option>mt4</option>
                                    <option>mt5</option>
                                    </Field>
                                    <ErrorMessage
                                    name="platform" 
                                    class="validation validation-tab"
                                    component="div"/>
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3 pt-2">
                                    <Field as="select" class="form-control input-form-tab" id="exampleInputEmail1" 
                                    name="baseCurrency">
                                    <option value="">Currency</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                    <option>RMB</option>
                                    <option>NZD</option>
                                    <option>NGN</option>
                                    <option>AUD</option>
                                    <option>KWD</option>
                                    <option>JPY</option>
                                    <option>CHF</option>
                                    <option>AED</option>
                                    <option>CAD</option>
                                    </Field>
                                    <ErrorMessage
                                    name="baseCurrency" 
                                    class="validation validation-tab"
                                    component="div"/>
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"></label>
                                    <Field type="text" class="form-control input-form-tab" placeholder="Metatrader Login ID"
                                    id="exampleInputPassword1" name="login" 
                                    />
                                    <ErrorMessage 
                                    name="login" 
                                    class="validation validation-tab"
                                    component="div" 
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"></label>
                                    <Field type="text" class="form-control input-form-tab" placeholder="Name"
                                    id="exampleInputPassword1" name="name" 
                                    />
                                    <ErrorMessage 
                                    name="name" 
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
                                    <Field type="text" class="form-control input-form-tab" placeholder="Broker Server "
                                    id="exampleInputPassword1" name="server" 
                                    />
                                    <ErrorMessage 
                                    name="server" 
                                    class="validation validation-tab"
                                    component="div" 
                                    />
                                </div>
                                
                                <div className = 'container pe-5 pt-5 pb-5'>
                                    <button type="submit" onClick={submitLogin}class="btn sign-btn-modal-mob btn-primary">SUBMIT</button>
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
