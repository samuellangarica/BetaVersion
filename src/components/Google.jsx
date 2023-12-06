import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function GoogleLog(){

 const handleLoginSuccess = async (credentialResponse) => {
    var credentialResponseDecoded = jwtDecode(
        credentialResponse.credential
    );

    const response = await fetch('/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentialResponseDecoded),
    });

    if (!response.ok) {
      console.error('Failed to save user data:', response.statusText);
      return;
    }

    console.log('User data saved successfully');
 };

 return (
    <GoogleLogin
      clientId="your-client-id.apps.googleusercontent.com"
      onSuccess={handleLoginSuccess}
      onError={() =>{
        console.log("Login Failed");
      }}
    />
 );
};

export default GoogleLog;