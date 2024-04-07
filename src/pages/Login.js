import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  return (
    <>

<div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel">Did you forget your password</h6>
        {/* <p>Enter your email address and we'll send you a link to restore password</p> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='form-contents'>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary">Request Reset Link</button>
        <button type="button" class="backtologin" data-bs-dismiss="modal">back to login</button>
      </div>
    </div>
  </div>
</div>
   
    <form className='form-container'>
      <div className="logo">
        <img src="/DF_logo.png" alt="" />
        <h5 className='text-dark'>Welcome to DigitalFlake Admin</h5>
        </div> 
      
      <div className='form-contents'>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
</div>
      <div className="forgot-password  text-right">
         <button type='button' data-bs-toggle="modal" data-bs-target="#loginmodal">Forgot password?</button>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn " style={{backgroundColor : 'purple',color:'white'}}>
          Submit
        </button>
      </div>
    
    </form>
    </>
  )
}

export default Login;
