const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/


const stepOneValidationSchema = Yup.object({
  first_name: Yup.string().required().label("First name"),
  last_name: Yup.string().required().label("Last name"),
  email:Yup.string().email('Email is invalid').required('Email is required'),
  country: Yup.string().required('Country is required'),
  region: Yup.string().required('Region is required'),
  city: Yup.string().required('City is required'),
  dateOfBirth:Yup.date().required('Date of birth is required'),
  mobileNo:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  password: Yup.string().required('password is required') .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
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

return(




<Formik
                                            initialValues =
                                            {{country:""}}
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
                                                  <ErrorMessage name="last_name" 
                                                   name="last_name" 
                                                   class="validation"
                                                   component="div"/>
                                                  </div>

                                                  <label for ='floatingInput'>Email</label>
                                                  <div className="pb-4">
                                                  <Field name="email"id="lastName"  />
                                                  <ErrorMessage name="email"
                                                   name="email" 
                                                   class="validation"
                                                   component="div" />
                                                  </div>

                                                  <div className="pb-4">
                                                  <label for ='floatingInput'>Phone No</label>
                                                  <Field name="mobileNo" id='mobileNo' />
                                                  <ErrorMessage name="mobileNo"
                                                  name="mobileNo" 
                                                  class="validation"
                                                  component="div" />
                                                  </div>

                                                  <div className="pb-5">
                                                    <DateTimePicker
                                                        name='dateOfBirth'
                                                        id = 'dateOfBirth'
                                                        label = 'Date of birth'
                                                    required/>
                                                    <ErrorMessage name="dateOfBirth"
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
                                                    <ErrorMessage name="country"
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
                                                    <ErrorMessage name="region" 
                                                     name="region" 
                                                     class="validation"
                                                     component="div"
                                                    />
                                                    </div>

                                                  <label for ='floatingInput'>City</label>
                                                  <div className="pb-5">
                                                  <Field name="city" id='cityInput'/>
                                                  <ErrorMessage name="city" 
                                                   name="city" 
                                                   class="validation"
                                                   component="div"/>
                                                  </div>


                                                  <div className="pb-5">
                                                  <label for ='floatingInput'>Password</label>
                                                  <Field name="password" id="passwordInput" />
                                                  <ErrorMessage name="password"
                                                  name="password" 
                                                  class="validation"
                                                  component="div" 
                                                  />
                                                  </div>

                                                  <div className="pb-5">
                                                  <label for ='floatingInput'>Confirm Password</label>
                                                  <Field name="confirmPassword"  id="passwordInput" />
                                                  <ErrorMessage name="confirmPassword"
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