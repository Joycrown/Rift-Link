import React from 'react'
import { useForm, useStep } from 'react';
import Signupp1 from '../Parts/signupPage/part1'
import Signupp2 from '../Parts/signupPage2/part1'
// import Success from '../Parts/successpage/part1';


const steps = [
    { id: "page 1" },
    { id: "page 2" },
    { id: "success" },
  ];
  
  const defaultData = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        region: '',
        city: '',
        mobileNo: '',
        DateOfBirth: '',
        password: '',
        confirmPassword: '',
        occupation: '', 
        experience: '',
        monthlyIncome: '',
        MetatraderAccount: '',
  };



function Userform () {
    const [values, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
  
    const props = { values, setForm, navigation };


    switch (id) {
        case "page 1":
          return <Signupp1 {...props} />;
        case "page 2":
          return <Signupp2 {...props} />;
        // case "success":
        //   return <Success {...props} />;
        // case "review":
        //   return <Review {...props} />;
        // case "submit":
        //   return <Submit {...props} />;
        default:
          return null;
      }
    }
   
export default Userform
