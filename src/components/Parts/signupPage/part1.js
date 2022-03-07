import React,  { useState } from 'react';
import SelectWrapper from './select'
import countries from './countries.json'
import DateTimePicker from './dateandtime'
import { Formik } from 'formik';
import * as yup from 'yup'
import {TextField} from '@material-ui/core'


const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/


const validationSchema = yup.object({
    name:yup.string().required('Name is required'),
    lastName: yup.string().required('Last name is required'),
    email:yup.string().email('Email is invalid').required('Email is required'),
    dateOfBirth:yup.date().required('Date of birth is required'),
    mobileNo:yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    

    country: yup.string().required('Country is required'),
    region: yup.string().required('Region is required'),
    city: yup.string().required('city is required'),
    password: yup.string().required('password is required') .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        )
      })
})



const Signuppg1 = ({ navigation}) => {
    const { next } = navigation;
   return(
        <section className = ''>
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
                                         <h3 className = 'head-text head-text-tab pt-4'>Sign Up</h3>
                                         <h3 className = 'su-sub-text su-sub-text-tab pt-2'>Register and enjoy our service <b>free<br/> of charge</b>  on your 
                                         linked account for <br/> the first 14 days. </h3>
                                         <h3 className = 'su-head-text su-head-text-tab pt-4'>Step 1 of 2:  Basic Information</h3>
                                         <Formik
                                             initialValues={{name: '',
                                                lastName: '',
                                                email: '',
                                                country: '',
                                                region: '',
                                                city: '',
                                                mobileNo: '',
                                                dateOfBirth: '',
                                                password: '',
                                                confirmPassword: '',
                                                occupation: '',
                                                experience: '',
                                                monthlyIncome: '',
                                                MetatraderAccount: '',}}
                                                onSubmit = {(values)=> {alert(JSON.stringify(values,null,2))
                                             }} validationSchema = {validationSchema}>
                                            
                                             {(formik) => <form onSubmit={formik.handleSubmit}>
                                                 <div className='mb-4'>
                                                 <TextField 
                                                 fullWidth 
                                                 id='name' 
                                                 name='name' 
                                                 label='First Name'
                                                 value={formik.values.name}
                                                 onChange={formik.handleChange}
                                                 error={formik.touched.name && Boolean(formik.errors.name)}
                                                 helperText={formik.touched.name && formik.errors.name}/>
                                                 </div>

                                                <div class="mb-4">
                                                <TextField 
                                                 fullWidth 
                                                 id='lastName' 
                                                 name='lastName' 
                                                 label='Last Name'
                                                 value={formik.values.lastName}
                                                 onChange={formik.handleChange}
                                                 error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                                 helperText={formik.touched.lastName && formik.errors.lastName}/>
                                                </div>

                                                <div class="mb-4">
                                                <TextField 
                                                 fullWidth 
                                                 id='email' 
                                                 name='email' 
                                                 label='Your email'
                                                 value={formik.values.email}
                                                 onChange={formik.handleChange}
                                                 error={formik.touched.email && Boolean(formik.errors.email)}
                                                 helperText={formik.touched.email && formik.errors.email}/>
                                                </div>

                                                <div class="mb-5">
                                                <TextField 
                                                 fullWidth 
                                                 id='mobileNo' 
                                                 name='mobileNo' 
                                                 label='Mobile Number'
                                                 value={formik.values.mobileNo}
                                                 onChange={formik.handleChange}
                                                 error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
                                                 helperText={formik.touched.mobileNo && formik.errors.mobileNo}/>
                                                </div>
                                                <div className='mb-5'>
                                                <DateTimePicker
                                                    name='dateOfBirth'
                                                    id = 'dateOfBirth'
                                                    label = 'Date of birth'
                                                />
                                                </div>
                                                <SelectWrapper
                                                name='country'
                                                label = 'Country'
                                                options= {countries}
                                                />
                                                <div class="mb-4">
                                                    <TextField 
                                                    fullWidth 
                                                    id='city' 
                                                    name='city' 
                                                    label='City'
                                                    value={formik.values.city}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                                    helperText={formik.touched.city && formik.errors.city}/>
                                                </div>
                                                <div class="mb-4">
                                                    <TextField 
                                                        fullWidth 
                                                        id='password' 
                                                        name='password' 
                                                        label='password'
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange}
                                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                                        helperText={formik.touched.password && formik.errors.password}/>
                                                    </div>
                                                    <div class="mb-4">
                                                        <TextField
                                                            fullWidth 
                                                            id='confirmPassword' 
                                                            name='confirmPassword' 
                                                            label='Confirm Password'
                                                            value={formik.values.confirmPassword}
                                                           
                                                            onChange={formik.handleChange}
                                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>
                                                    </div>
                                                    <div className = 'text-center pt-3'>
                                                    <button onClick={next} type="" class="btn sign-btn sign-btn-tab btn-primary">PROCEED</button>
                                                </div>
                                                 </form>}
                                                 
                                              </Formik>
                                     </div>
                                 </div>   
                                 <div className = 'd-flex justify-content-center'>
                                    <h5 className = 'sub-text sub-text-tab pt-3'>New to Rift Link?</h5>
                                    <h5 className = 'sub-text-1 sub-text-1-tab pt-3'> SIGN UP</h5>
                                </div>
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
                                            <form>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control pt-4" id="firstNamemob" 
                                                    placeholder="First Name *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control" id="lastNamemob" 
                                                    placeholder="Last Name *"  />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="email" class="form-control" id="emailInputmob" 
                                                    placeholder="Your email *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="text" class="form-control" id="mobileNomob" 
                                                    placeholder="Mobile No *"  />
                                                </div>
                                                <div class="form-floating mb-4">
                                                    <input type="date" class="form-control" label= 'Date of birth' id="dateOfBirthmob" 
                                                    placeholder="Date of birth *"showDefaultOption={false} />
                                                    <label for="floatingInputValue">Date of birth</label>
                                                    
                                                </div>
                                                {/* <div className = "form-desktop">
                                                    <CountryDropdown class="country mb-5 pt-3"
                                                        defaultOptionLabel="Select a Country *"
                                                        value={this.state.country} id="mobileNomob"
                                                        onChange={(val) => this.selectCountry(val)} required/>
                                                        <RegionDropdown class="mb-4"
                                                        blankOptionLabel="No country selected."
                                                        defaultOptionLabel="State/province"
                                                        country={this.state.country}
                                                        value={this.state.region} id="mobileNomob"
                                                        onChange={(val) => this.selectRegion(val)} required/>
                                                    </div>
                                                    <div className = "form-tab">
                                                        <CountryDropdown class="country-mob mb-5 pt-3"
                                                            defaultOptionLabel="Select a Country *"
                                                            value={this.state.country} id="mobileNo-tab"
                                                            onChange={(val) => this.selectCountry(val)} required/>
                                                            <RegionDropdown class="mb-4"
                                                            blankOptionLabel="No country selected."
                                                            defaultOptionLabel="State/province"
                                                            country={this.state.country}
                                                            value={this.state.region} id="mobileNo-tab"
                                                            onChange={(val) => this.selectRegion(val)} required/>
                                                    </div> */}
                                                    <div class="mb-4">
                                                        <input type="text" class="form-control" id="cityInputmob" 
                                                        placeholder="City *" />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="password" class="form-control" id="passwordInputmob"
                                                    placeholder="Your Password *" 
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input type="password" class="form-control"  id="passwordInputmob"
                                                    placeholder="Confirm Password *" 
                                                    />
                                                </div>
                                                <div className = 'text-center pt-3'>
                                                    <button type="submit" class="btn su-sign-btn-mob btn-primary">PROCEED</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>   
                                    <div className = 'd-flex justify-content-center'>
                                        <h5 className = 'sub-text sub-text-mob pt-3'>New to Rift Link?</h5>
                                        <h5 className = 'sub-text-1 sub-text-1-mob ps-2 pt-3'> SIGN UP</h5>
                                    </div>
                                </div>
                                <p className = 'pt-4 pb-2 text-center text-white ft-text2 ft-text2-tab ft-text2-mob'>Copyrights Rift Link 2022. All rights reserved.</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    );
}

export default Signuppg1;