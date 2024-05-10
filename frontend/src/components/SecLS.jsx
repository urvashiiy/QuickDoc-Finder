import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';

const SecLS = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const signUpForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, action) => {
      const res = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {
        enqueueSnackbar('Signup Successful', { variant: 'success' });
        action.resetForm();
      } else {
        enqueueSnackbar('Signup Failed', { variant: 'error' });
      }
    }
  });

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, action) => {
      const res = await fetch('http://localhost:3000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {
        enqueueSnackbar('Login Successful', { variant: 'success' });
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        action.resetForm();
      } else {
        enqueueSnackbar('Login Failed', { variant: 'error' });
      }
    }
  });

  const handleSignUpMode = () => {
    setIsSignUpMode(true);
  };

  const handleSignInMode = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`SecLS container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="SecLS forms-container">
        <div className="SecLS signin-signup">
          <form className={`SecLS ${isSignUpMode ? 'sign-up-form' : 'sign-in-form'}`} onSubmit={isSignUpMode ? signUpForm.handleSubmit : loginForm.handleSubmit}>
            <h2 className="SecLS title">{isSignUpMode ? 'Sign Up' : 'Sign In'}</h2>
            {isSignUpMode && (
              <div className="SecLS input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={signUpForm.values.name}
                  onChange={signUpForm.handleChange}
                />
              </div>
            )}
            <div className="SecLS input-field">
              <i className="fas fa-envelope" />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={isSignUpMode ? signUpForm.values.email : loginForm.values.email}
                onChange={isSignUpMode ? signUpForm.handleChange : loginForm.handleChange}
              />
            </div>
            <div className="SecLS input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={isSignUpMode ? signUpForm.values.password : loginForm.values.password}
                onChange={isSignUpMode ? signUpForm.handleChange : loginForm.handleChange}
              />
            </div>
            <div>
            <Link  to="/ForgetPassword">Forget Password</Link>
            </div>
            <input type="submit" value={isSignUpMode ? 'Sign Up' : 'Login'} className="SecLS btn solid" />
          </form>
        </div>
      </div>

      <div className="SecLS panels-container">
        <div className={`SecLS panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
          <div className="SecLS content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="SecLS btn transparent" onClick={handleSignUpMode}>Sign Up</button>
          </div>
          <img src="./src/assets/lg.png" className="SecLS image" alt="" />
        </div>
        <div className={`SecLS panel right-panel ${!isSignUpMode ? 'hidden' : ''}`}>
          <div className="SecLS content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="SecLS btn transparent" onClick={handleSignInMode}>Sign In</button>
          </div>
          <img src="./src/assets/tect.png" className="SecLS image" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default SecLS;
