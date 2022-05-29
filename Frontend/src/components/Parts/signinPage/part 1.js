import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import Swal from "sweetalert2"




const First = () => {
    const initialValues = {
        email: '',
        password:'',
        checkbox: false
    }
    const navigate = useNavigate()
    

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
                navigate('/dash')
             
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
        const handleSubmit = (values,props) => {
            submitLogin(values,props);
        }
        const validationSchema = Yup.object().shape({
        email:Yup.string().email('Please enter a valid email').required('Email is required'),
        password: Yup.string().required('password is required')
        })
    
    
    return(
       <section className = ''>
           <div className = 'bg-signin vh-100'>
               <div className = 'signin-desktop'>
                    <div className = 'd-flex justify-content-around signin-move'>
                        <div className = 'signin-move'>
                            <h2 className = 'wel-text text-white'>Welcome Back</h2>
                        </div>
                        {/* tablet */}
                        <div className = 'signin-tab'>
                            <h2 className = 'wel-text wel-text-tab text-white'>Welcome<br/>Back</h2>
                        </div>
                        <div className = 'signin-card signin-card-tab'>
                                <div className= 'card-si'>
                                    <div className = 'card-body'>
                                        <div className = 'container'>
                                            <h3 className = 'head-text head-text-tab pt-4'>Sign In</h3>
                                            
                                            <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={validationSchema}>
                                                {(props) =>(
                                                    <Form>
                                                        
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label"></label>
                                                    <Field type="email" class="form-control" id="exampleInputEmail1" 
                                                    placeholder="Your email" aria-describedby="emailHelp" 
                                                    name="email"
                                                    />
                                                    <ErrorMessage 
                                                        name="email" 
                                                        class="validation"
                                                        component="div" />
                                                    <div id="emailHelp" class="form-text"></div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label"></label>
                                                    <Field type="password" class="form-control" placeholder="Your Password"
                                                    id="exampleInputPassword1" name="password" 
                                                    />
                                                    <ErrorMessage 
                                                    name="password" 
                                                    class="validation"
                                                    component="div" 
                                                     />
                                                </div>
                                                <div class="mb-3 form-check pe-5 pt-3">
                                                    <Field type="checkbox"name="checkbox" class="form-check-input check-box-1 check-box-1-tab" id="exampleCheck1" required = 'true'/>
                                                    <label class="form-check-label check-box check-box-tab" for="exampleCheck1">Stay Signed In</label>
                                                </div>
                                                <div className = 'text-center pt-5'>
                                                    <button type="submit" class="btn sign-btn sign-btn-tab btn-primary">SIGN IN</button>
                                                </div>
                                                <div className = 'text-center pt-1'>
                                                    <Link className = 'fp-link sub-text sub-text-tab pt-3'to ={'/forgot_password'}>Forgot Password?</Link>
                                                </div>
                                                <div className = 'd-flex justify-content-center'>
                                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                                    <Link className = 'signup-link sub-text-1 sub-text-1-tab pt-3' to = {'/signup'}>SIGN UP</Link>
                                                    
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
               {/* mobile */}
               <div className = 'signin-mobile'>
                    <div className = 'container ps-4 pb-3'>
                         <h2 className = 'wel-text-mob text-white'>Welcome Back</h2>
                    </div>
                    <div className = 'd-flex justify-content-center'>
                        <div className = 'card-mobile'>
                            <div className = 'card-body card-si-mob '>
                                <h2 className = 'head-text-mob1'>Sign In</h2>
                            </div>
                            <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={validationSchema} >
                             {(props) =>(
                                 <Form>
                                    <div class="mb-3 ps-3">
                                    <label for="exampleInputEmail1" class="form-label"></label>
                                    <Field type="email" class="form-control" id="exampleInputEmail1" 
                                    placeholder="Your email *" aria-describedby="emailHelp"
                                    name= 'email'
                                   />
                                   <ErrorMessage
                                    name="email" 
                                    class="validation-mob"
                                    component="div" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3 ps-3">
                                    <label for="exampleInputPassword1" class="form-label"></label>
                                    <Field type="password" class="form-control" placeholder="Your Password *" 
                                    id="exampleInputPassword1"
                                    name= 'password'
                                     />
                                    <ErrorMessage 
                                    name="password" 
                                    class="validation-mob"
                                    component="div" 
                                    />
                                </div>
                                <div class="mb-3 form-check ps-5 pt-2">
                                    <Field type="checkbox" name= "checkbox" class="form-check-input check-box-1 check-box-1-tab" id="exampleCheck1" required = 'true'/>
                                    <label class="form-check-label check-box-mob" for="exampleCheck1">Stay Signed In</label>
                                </div>
                                <div className = 'text-center pt-3'>
                                    <button type="submit" class="btn sign-btn-mob btn-primary">SIGN IN</button>
                                    <h5 className = 'sub-text-mob pt-3'>Forgot Password?</h5>
                                </div>
                                <div className = 'd-flex justify-content-center pb-2'>
                                    <h5 className = 'sub-text-mob pt-3'>New to Rift Link?</h5>
                                    <Link className = 'sub-text-1 sub-text-1-tab sub-text-1-mob pt-3' to = {'/signup'}>SIGN UP</Link>
                                </div>
                                 </Form>
                             )}
                            </Formik>
                        </div>
                    </div>
               </div>
           </div>
       </section>
    );

}

export default First;
                          