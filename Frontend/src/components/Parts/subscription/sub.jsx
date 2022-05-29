import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import {useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './sub.css';
import notify from '../../images/bell.png'
import carbon from '../../images/carbon_add-filled.png'
import ModalApp from '../modals/modalapp'
import axios from "axios";
import { Link} from "react-router-dom";
import Swal from "sweetalert2"





export default function Subscription() {

  
  const navigate = useNavigate();
  //   const [data, setData] = useState([]);

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
      return(
        {ModalApp}
      )
        // let path = `/modal`; 
        // navigate(path);
      }
  
  return (
    <Section>
      <div className="grid">
        <div className="row__one">
            <div className="container">
              <div className="d-flex justify-content-between">
                  <div className = ''>
                    <h3 className="head-text pt-5">My Subscriptions</h3>
                  </div>
                  <div className = 'pt-5'>
                      <img src={notify} alt="icon" className=''></img>
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
