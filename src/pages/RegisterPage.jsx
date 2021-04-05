import React from 'react'
import styled from 'styled-components';

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'


const RegisterPage = () => {
    return (
        <RegisterPageStyles>
            <header>
                <h1>Unlimited Trial Account</h1>
                <p>No credit card required</p>
            </header>

            <FormInput inputType="text" label="name on the account" />
            <FormInput inputType="email" label="valid email address" />
            <FormInput inputType="password" label="strong password" />
            <Button /* className="jimo" */ label="Register" uiStyle="signup" />

        </RegisterPageStyles>
    );
}

export default RegisterPage;

/* Styles */

const RegisterPageStyles = styled.div`
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

  // can also add class which will override other things
  .jimo {
      background-color: grey;
  }
`;