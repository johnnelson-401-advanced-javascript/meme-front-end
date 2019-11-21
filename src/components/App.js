import React from 'react';
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';
import './reset.css';

export default function App() {
  return (
    <>
      <h2>SignUp</h2>
      <SignupUser />
      <h2>or Login</h2>
      <LoginUser />
    </>
  );
}
