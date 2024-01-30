import React, { useState } from 'react';
import firebase from './firebase';
import 'firebase/auth';

function Run() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      alert('OTP sent successfully!');
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
      alert('Phone number verified!');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <label>Enter Phone Number:</label>
      <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />

      <div id="recaptcha"></div>

      <button onClick={handleSendOtp}>Send OTP</button>

      <label>Enter Verification Code:</label>
      <input type="text" value={verificationCode} onChange={handleVerificationCodeChange} />
      
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
}

export default Run;
