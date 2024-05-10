import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'

import Contact from './components/Contact'
import AddDoc from './components/AddDoc'
import DoctorListing from './components/DoctorListing'
import Location from './components/Location'
import SecLS from './components/SecLS'
import PushNotificationButton from './components/PushNotificationButton'
import Profilecard from './components/Profilecard'
import DoctorLogin from './components/DoctorLogin'
import ForgetPassword from './components/ForgetPassword'
import View from './components/View'




const App = () => {
  return (
    <div> 
      <SnackbarProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/SecLS' element = {<SecLS/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      <Route path='/AddDoc' element = {<AddDoc/>}/>
      <Route path='/DoctorListing' element = {<DoctorListing/>}/>
      <Route path='/Location' element = {<Location/>}/>
      <Route path='/ProfileCard' element = {<Profilecard/>}/>
      <Route path='/PushNotificationButton' element={<PushNotificationButton />} />
      <Route path='/DoctorLogin' element = {<DoctorLogin/>}/>
      <Route path='/ForgetPassword' element = {<ForgetPassword/>}/>
      <Route path='/View/:id' element = {<View/>}/>
      

    </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  
    </div>
  )
}

export default App
