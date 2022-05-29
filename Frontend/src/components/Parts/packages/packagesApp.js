import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Packages from "./packages";
import SidebarP from "./sidebarP";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
export default function PackagesApp() {
  const navigate = useNavigate();
//     const [data, setData] = useState([]);

//     useEffect(()=>{
//     const config={
//       headers:{
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//       },
//       method: "GET",
//     }
//     axios.get('/users/me/',config)
//     .then(res =>res.data).
//     then(receivedData => setData(receivedData))
//     .catch((error)=>{
//       console.log(error)
//       if (error){
//         navigate('/signin')
//       }
//     }
//     )
//   },[])
//   console.log(data.first_name)
  return (
    <Div>
      <SidebarP />
      <Packages />
    </Div>
  );
}


const Div = styled.div`
  position: relative;
`;
