import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
//import Swal from 'sweetalert2';
import { enqueueSnackbar } from 'notistack';

const UserAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  if(currentUser!==null){
    return children;
  }else{
    enqueueSnackbar("Oops! You are not an user")
    return <Navigate to="/SecLS" />
  }
  
  

}

export default UserAuth;