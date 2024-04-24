import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import Home from './components/Home'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Contact from './components/Contact'
import AddDoc from './components/AddDoc'
import DoctorListing from './components/DoctorListing'

const App = () => {
  return (
    <div> 
      <SnackbarProvider>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Login' element = {<Login/>}/>
      <Route path='/SignUp' element = {<SignUp/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      <Route path='/AddDoc' element = {<AddDoc/>}/>
      <Route path='/DoctorListing' element = {<DoctorListing/>}/>
    </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  
    </div>
  )
}

export default App
