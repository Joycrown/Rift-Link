import { useState } from "react";
import StepOne from './step1'
import StepTwo from './step2'
import axios from 'axios'
import {useNavigate}  from 'react-router-dom'
import Swal from "sweetalert2"



export default function Multistep() {
    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      country: '',
      state: '',
      city: '',
      dateOfBirth: '',
      occupation: '',
      experience: '',
      income: '',
      account: '',
    });
    const [currentStep, setCurrentStep] = useState(0);
    
    const navigate = useNavigate()
  

    const config ={
      headers:{'content-type': 'application/json'},
      method: "POST",
    }
  
    const makeRequest = async (formData) => {
      try{
        const res = await axios.post('/add_user',formData,config)
        console.log(res)
        if(res.status === 200 && res.data.status_code === 409 ){
          Swal.fire({
            icon:'error',
            title: 'Oops...',
            text: 'Email already in use'
          })
         
        }else if(res.status === 200 ){
          navigate('/success')
        }
    
      }catch(e){
        if (e.response){
          Swal.fire({
            icon:'error',
            title: 'Oops...',
            text: 'Something went wrong! Try Again'
          })
        }
      }
      
    };
  
    const handleNextStep = (newData, final = false) => {
      setData((prev) => ({ ...prev, ...newData }));
  
      if (final) {
        makeRequest(newData);
        return;
      }
      setCurrentStep((prev) => prev + 1);
     
    };

  
    const handlePrevStep = (newData) => {
      setData((prev) => ({ ...prev, ...newData }));
      setCurrentStep((prev) => prev - 1);
    };
  
    const steps = [
      <StepOne next={handleNextStep} data={data} />,
      <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    ];
  
   
  
    return <div className="App">{steps[currentStep]}</div>;
  }
  