
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"
import '../signupPage/signup.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DateTimePicker from '../signupPage/dateandtime'
import Navbar from '../signupPage/navbar'



const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/


const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
  email:Yup.string().email('Email is invalid').required('Email is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('state is required'),
  city: Yup.string().required('City is required'),
  dateOfBirth:Yup.date().required('Date of birth is required'),
  mobileNo:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  password: Yup.string().required('password is required').matches(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])(?=.{8,})",
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <section className = ''>
      <Navbar/>
        <div className = 'bg-signin'>
            <div className = 'signin-desktop'>
                 <div className = 'd-flex justify-content-around signin-move'>
                     <div className = 'signin-move'>
                         <h2 className = 'su-wel-text text-white'>Create a free <br/>account</h2>
                     </div>
                     {/* tablet */}
                     <div className = 'signin-tab'>
                         <h2 className = 'su-wel-text-tab text-white'>Create a free <br/>account</h2>
                     </div>
                     <div className = 'signup-card signup-card-tab'>
                             <div className= 'card-si'>
                                 <div className = 'card-body'>
                                     <div className = 'container'>
                                         <h3 className = 'head-text pt-4'>Sign Up</h3>
                                         <h3 className = 'su-sub-text su-sub-text-tab pt-2'>Register and enjoy our service <b>free<br/> of charge</b>  on your 
                                         linked account for <br/> the first 14 days. </h3>
                                         <h3 className = 'su-head-text su-head-text-tab pt-4'>Step 1 of 2:  Basic Information</h3>
                                         <Formik
                                          validationSchema={stepOneValidationSchema}
                                          initialValues={props.data}
                                          onSubmit={handleSubmit}
                                        >
                                          {({values, handleChange, handleBlur}) => (
                                            <Form>
                                            <div className="pb-4">
                                            <label for ='floatingInput'>First Name</label>
                                            <Field name="first_name" id="firstName"/>
                                            <ErrorMessage 
                                            name="first_name" 
                                            class="validation"
                                            component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'>Last Name</label>
                                            <Field name="last_name" id="lastName"/>
                                            <ErrorMessage 
                                             name="last_name" 
                                             class="validation"
                                             component="div"/>
                                            </div>

                                            <label for ='floatingInput'>Email</label>
                                            <div className="pb-4">
                                            <Field name="email"id="lastName"  />
                                            <ErrorMessage 
                                             name="email" 
                                             class="validation"
                                             component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'>Phone No</label>
                                            <Field name="mobileNo" id='mobileNo' />
                                            <ErrorMessage 
                                            name="mobileNo" 
                                            class="validation"
                                            component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'>Date of birth</label>
                                              <DateTimePicker
                                                  name='dateOfBirth'
                                                  id = 'dateOfBirth'
                                                  label = 'Date of birth'
                                              required/>
                                              <ErrorMessage 
                                              name="dateOfBirth" 
                                              class="validation"
                                              component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'>Country</label>
                                             <CountryDropdown
                                              name="country"
                                              // className = "country"
                                              value={values.country}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "country"
                                              id = 'country'
                                              ></CountryDropdown>
                                              <ErrorMessage
                                               name="country" 
                                               class="validation"
                                               component="div"
                                               />
                                              </div>


                                              <label for ='floatingInput'>state</label>
                                              <div className="pb-5">
                                              <RegionDropdown
                                              name="state"
                                              country={values.country}
                                              value={values.state}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "State"
                                              id="country"
                                              ></RegionDropdown>
                                              <ErrorMessage
                                               name="state" 
                                               class="validation"
                                               component="div"
                                              />
                                              </div>

                                            <label for ='floatingInput'>City</label>
                                            <div className="pb-5">
                                            <Field name="city" id='cityInput'/>
                                            <ErrorMessage
                                             name="city" 
                                             class="validation"
                                             component="div"/>
                                            </div>


                                            <div className="pb-5">
                                            <label for ='floatingInput' >Password</label>
                                            <Field name="password" type="password" id="passwordInput"  />
                                            <ErrorMessage
                                            name="password" 
                                            class="validation"
                                            component="div" 
                                            />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput' >Confirm Password</label>
                                            <Field name="confirmPassword" type="password" id="passwordInput" />
                                            <ErrorMessage 
                                            name="confirmPassword" 
                                            class="validation"
                                            component="div" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                            <button type="submit"class="btn sign-btn sign-btn-tab btn-primary">PROCEED</button>
                                            </div>
                                          </Form>
                                          )}
                                        </Formik>
                                     </div>
                                 </div>   
                                 {/* <div className = 'd-flex justify-content-center pb-2'>
                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                    <h5 className = 'sub-text-1 sub-text-1-tab pt-3'> SIGN UP</h5>
                                </div> */}
                             </div>
                             <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                     </div>
                 </div>
            </div>
            {/* tablet */}
            <div className="signup1-tab">
                <div className = 'd-flex justify-content-around signin-move'>
                     <div className = 'signin-move'>
                         <h2 className = 'su-wel-text text-white'>Create a free <br/>account</h2>
                     </div>
                     {/* tablet */}
                     <div className = 'signin-tab'>
                         <h2 className = 'su-wel-text-tab text-white'>Create a free <br/>account</h2>
                     </div>
                     <div className = 'signup-card-tab'>
                             <div className= 'card-si'>
                                 <div className = 'card-body'>
                                     <div className = 'container'>
                                         <h3 className = 'head-text-tab pt-4'>Sign Up</h3>
                                         <h3 className = 'su-sub-text-tab pt-2'>Register and enjoy our service <b>free<br/> of charge</b>  on your 
                                         linked account for <br/> the first 14 days. </h3>
                                         <h3 className = 'su-head-text-tab pt-4 pb-3'>Step 1 of 2:  Basic Information</h3>
                                         <Formik
                                          validationSchema={stepOneValidationSchema}
                                          initialValues={props.data}
                                          onSubmit={handleSubmit}
                                        >
                                          {({values, handleChange, handleBlur}) => (
                                            <Form>
                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs">First Name</label>
                                            <Field name="first_name" id="firstName"/>
                                            <ErrorMessage 
                                            name="first_name" 
                                            class="validation-tab"
                                            component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs">Last Name</label>
                                            <Field name="last_name" id="lastName"/>
                                            <ErrorMessage 
                                             name="last_name" 
                                             class="validation-tab"
                                             component="div"/>
                                            </div>

                                            <label for ='floatingInput'className="inputs">Email</label>
                                            <div className="pb-4">
                                            <Field name="email"id="lastName"  />
                                            <ErrorMessage 
                                             name="email" 
                                             class="validation-tab"
                                             component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs">Phone No</label>
                                            <Field name="mobileNo" id='mobileNo' />
                                            <ErrorMessage
                                            name="mobileNo" 
                                            class="validation-tab"
                                            component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs">Date of birth</label>
                                              <DateTimePicker
                                                  name='dateOfBirth'
                                                  id = 'dateOfBirth'
                                                //   label = 'Date of birth'
                                                  
                                              required/>
                                              <ErrorMessage 
                                              name="dateOfBirth" 
                                              class="validation-tab"
                                              component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs">Country</label>
                                             <CountryDropdown
                                              name="country"
                                            //   className="inputs"
                                              // className = "country"
                                              value={values.country}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                            //   label= "country"
                                              id = 'country'
                                              ></CountryDropdown>
                                              <ErrorMessage 
                                               name="country" 
                                               class="validation-tab"
                                               component="div"
                                               />
                                              </div>


                                              <label for ='floatingInput'className="inputs">state</label>
                                              <div className="pb-5">
                                              <RegionDropdown
                                              name="state"
                                              country={values.country}
                                              value={values.state}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "State"
                                              id="country"
                                              ></RegionDropdown>
                                              <ErrorMessage 
                                               name="state" 
                                               class="validation-tab"
                                               component="div"
                                              />
                                              </div>

                                            <label for ='floatingInput'className="inputs">City</label>
                                            <div className="pb-5">
                                            <Field name="city" id='cityInput'/>
                                            <ErrorMessage
                                             name="city" 
                                             class="validation-tab"
                                             component="div"/>
                                            </div>


                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs" >Password</label>
                                            <Field name="password" type="password" id="passwordInput" />
                                            <ErrorMessage 
                                            name="password" 
                                            class="validation-tab"
                                            component="div" 
                                            />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs">Confirm Password</label>
                                            <Field name="confirmPassword"  type="password" id="passwordInput" />
                                            <ErrorMessage
                                            name="confirmPassword" 
                                            class="validation-tab"
                                            component="div" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                            <button type="submit"class="btn sign-btn sign-btn-tab btn-primary">PROCEED</button>
                                            </div>
                                          </Form>
                                          )}
                                        </Formik>
                                     </div>
                                 </div>   
                                 {/* <div className = 'd-flex justify-content-center pb-2'>
                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                    <h5 className = 'sub-text-1 sub-text-1-tab pt-3'> SIGN UP</h5>
                                </div> */}
                             </div>
                             <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                     </div>
                 </div>
            </div>
            {/* mobile */}
            <div className = 'signin-mobile'>
                 <div className = 'container ps-5 pb-3'>
                    <h2 className = 'su-wel-text-mob text-white'>Create a free <br/>account</h2>
                 </div>
                 <div className = 'd-flex justify-content-center'>
                    <div className = 'signup-card-mob'>
                                <div className= 'card-si'>
                                    <div className = 'card-body'>
                                        <div className = 'container'>
                                            <h3 className = 'su-head-text-mob'>Sign Up</h3>
                                            <h3 className = 'su-sub-text-mob pt-2'>Register and enjoy our service <b>free of charge</b>  on your 
                                            linked account for the first 14 days. </h3>
                                            <h3 className = 'su-head-text1-mob pt-2'>Step 1 of 2:  Basic Information</h3>
                                            <Formik
                                          validationSchema={stepOneValidationSchema}
                                          initialValues={props.data}
                                          onSubmit={handleSubmit}
                                        >
                                          {({values, handleChange, handleBlur}) => (
                                            <Form>
                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs-mob">First Name</label>
                                            <Field name="first_name" id="firstName"/>
                                            <ErrorMessage 
                                            name="first_name" 
                                            class="validation-mob"
                                            component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs-mob">Last Name</label>
                                            <Field name="last_name" id="lastName"/>
                                            <ErrorMessage 
                                             name="last_name" 
                                             class="validation-mob"
                                             component="div"/>
                                            </div>

                                            <label for ='floatingInput'className="inputs-mob">Email</label>
                                            <div className="pb-4">
                                            <Field name="email"id="lastName"  />
                                            <ErrorMessage 
                                             name="email" 
                                             class="validation-mob"
                                             component="div" />
                                            </div>

                                            <div className="pb-4">
                                            <label for ='floatingInput'className="inputs-mob">Phone No</label>
                                            <Field name="mobileNo" id='mobileNo' />
                                            <ErrorMessage
                                            name="mobileNo" 
                                            class="validation-mob"
                                            component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs-mob">Date of birth</label>
                                              <DateTimePicker
                                                  name='dateOfBirth'
                                                  id = 'dateOfBirth'
                                                //   label = 'Date of birth'
                                                  
                                              required/>
                                              <ErrorMessage 
                                              name="dateOfBirth" 
                                              class="validation-mob"
                                              component="div" />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs-mob">Country</label>
                                             <CountryDropdown
                                              name="country"
                                            //   className="inputs"
                                              // className = "country"
                                              value={values.country}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                            //   label= "country"
                                              id = 'country'
                                              ></CountryDropdown>
                                              <ErrorMessage
                                               name="country" 
                                               class="validation-mob"
                                               component="div"
                                               />
                                              </div>


                                              <label for ='floatingInput'className="inputs-mob">state</label>
                                              <div className="pb-5">
                                              <RegionDropdown
                                              name="state"
                                              country={values.country}
                                              value={values.state}
                                              onChange={(_,e) =>handleChange(e)}
                                              onBlur= {handleBlur}
                                              label = "State"
                                              id="country"
                                              ></RegionDropdown>
                                              <ErrorMessage
                                               name="state" 
                                               class="validation-mob"
                                               component="div"
                                              />
                                              </div>

                                            <label for ='floatingInput'className="inputs-mob">City</label>
                                            <div className="pb-5">
                                            <Field name="city" id='cityInput'/>
                                            <ErrorMessage 
                                             name="city" 
                                             class="validation-mob"
                                             component="div"/>
                                            </div>


                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs-mob">Password</label>
                                            <Field name="password"  type="password" id="passwordInput" />
                                            <ErrorMessage 
                                            name="password" 
                                            class="validation-mob"
                                            component="div" 
                                            />
                                            </div>

                                            <div className="pb-5">
                                            <label for ='floatingInput'className="inputs-mob" >Confirm Password</label>
                                            <Field name="confirmPassword" type="password"  id="passwordInput" />
                                            <ErrorMessage
                                            name="confirmPassword" 
                                            class="validation-mob"
                                            component="div" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                            <button type="submit"class="btn sign-btn-mob btn-primary">PROCEED</button>
                                            </div>
                                          </Form>
                                          )}
                                        </Formik>
                                        </div>
                                    </div>   
                                    {/* <div className = 'd-flex justify-content-center'>
                                        <h5 className = 'sub-text sub-text-mob pt-3'>New to Rift Link?</h5>
                                        <h5 className = 'sub-text-1 sub-text-1-mob ps-2 pt-3'> SIGN UP</h5>
                                    </div> */}
                                </div>
                                <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  );
};

export default StepOne;

