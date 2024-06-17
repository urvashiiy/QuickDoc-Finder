import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
//import Swal from 'sweetalert2';
import { enqueueSnackbar } from 'notistack';

const AdminAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('admin'))
  );

  if(currentUser!==null){
    return children;
  }else{
    enqueueSnackbar("Oops! You are not an admin")
    return <Navigate to="/SecLS" />
  }
}

export default AdminAuth;