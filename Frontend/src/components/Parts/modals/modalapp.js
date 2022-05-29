import React,{useEffect,useState} from "react";
import styled from "styled-components";
import SidebarModal from './sidebar-modal'
import Dash from './dashboard-modal'
import axios from "axios";
import '../dashboard testing/dashboard.css'
import {useNavigate} from 'react-router-dom';
export default function ModalApp() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=>{
    const config={
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      method: "GET",
    }
    fetch('/users/me/',config)
    .then(res =>res.json()).
    then(receivedData => setData(receivedData))
    .catch((error)=>{
      console.log(error)
      if (error){
        navigate('/signin')
      }
    }
    )
  },[])
  console.log(data)
  return (
   
    <Div className="modalapp">
      <SidebarModal />
      <Dash />
    </Div>
  );
}


const Div = styled.div`
  position: relative;
`;
