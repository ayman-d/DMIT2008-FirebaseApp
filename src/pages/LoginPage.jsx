import React from 'react'
import styled from 'styled-components';
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'


const LoginPage = () => {

    const handleLogin = (e) => {
        firebaseApp.auth().signInWithEmailAndPassword("aymand1982@gmail.com", "sawamowa")
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    return (
        <LoginPageStyles>
            <header>
                <h1>Unlimited Trial Account</h1>
                <p>No credit card required</p>
            </header>

            <FormInput inputType="email" label="valid email address" />
            <FormInput inputType="password" label="strong password" />
            <Button label="Login" uiStyle="login" onClick={handleLogin} />

        </LoginPageStyles>
    );
}

export default LoginPage;

/* Styles */

const LoginPageStyles = styled.div`
  max-width: 480px;

  margin: 6rem auto 0;

  header {
      text-align: center;
      margin-bottom: 2rem;
  }

  h1 {
      font-size: 2rem;
      font-weight: 600;
  }

  // can directly style a styled component that's imported
  button {
      margin-top: 10px;
  }
`;