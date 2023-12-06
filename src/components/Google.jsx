import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLog(){

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() =>{
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLog;
