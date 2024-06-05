import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Contact from './components/Contact'
import DoctorListing from './components/DoctorListing'
import Location from './components/Location'
import SecLS from './components/SecLS'
import PushNotificationButton from './components/PushNotificationButton'
import Profilecard from './components/Profilecard'
import DoctorLogin from './components/DoctorLogin'
import ForgetPassword from './components/ForgetPassword'
import View from './components/View'
import Admin from './components/Admin'
import AddDoctor from './components/Admin/AddDoc'
import ManageDoctor from './components/Admin/ManageDoctor'
import ManageUser from './components/Admin/ManageUser'
import AdminProfile from './components/Admin/AdminProfile'
import Dashboard from './components/Admin/Dashboard'

const App = () => {
    return (
        <SnackbarProvider>
            <BrowserRouter>
                <Content />
            </BrowserRouter>
        </SnackbarProvider>
    )
}

const Content = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div>
            {!isAdminRoute && <Navbar />}  
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/SecLS' element={<SecLS />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/DoctorListing' element={<DoctorListing />} />
                <Route path='/Location' element={<Location />} />
                <Route path='/ProfileCard' element={<Profilecard />} />
                <Route path='/PushNotificationButton' element={<PushNotificationButton />} />
                <Route path='/DoctorLogin' element={<DoctorLogin />} />
                <Route path='/ForgetPassword' element={<ForgetPassword />} />
                <Route path='/View/:id' element={<View />} />

                <Route path='admin' element={<Admin />}>
                    <Route path='AddDoc' element={<AddDoctor />} />
                    <Route path='ManageDoctor' element={<ManageDoctor />} />
                    <Route path='ManageUser' element={<ManageUser />} />
                    <Route path='AdminProfile' element={<AdminProfile />} />
                    <Route path='Dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
