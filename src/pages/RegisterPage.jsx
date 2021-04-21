import React, { useState } from 'react'
import styled from 'styled-components';
import firebaseApp from "../firebase/firebaseConfig";
import { Redirect } from "react-router-dom";

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'


const RegisterPage = () => {

    const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
    const [registered, setRegistered] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value.trim() })
    }

    const handleClick = (e) => {

        if (newUser.name === "") {

            setError("username is required");
            document.querySelector(".error").classList.remove("hide");
        } else {
            firebaseApp.auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then(userCredentials => {
                    userCredentials.user.updateProfile({
                        displayName: newUser.name
                    });
                })
                .then(() => {
                    firebaseApp.auth().signOut();
                    setRegistered(true)
                })
                .catch(error => {
                    console.log(error.code, error.message);
                    setError(error.code)
                    document.querySelector(".error").classList.remove("hide");
                })
        }
    }

    const handleFocus = (e) => {
        document.querySelector(".error").classList.add("hide");
    }

    if (registered) {
        return (<Redirect to="/login" />)
    } else {
        return (
            <RegisterPageStyles>
                <header>
                    <h1>Unlimited Trial Account</h1>
                    <p>No credit card required</p>
                </header>

                <FormInput className="first" inputType="text" name="name" label="name on the account" onChange={handleChange} onFocus={handleFocus} />
                <FormInput inputType="email" name="email" label="valid email address" onChange={handleChange} onFocus={handleFocus} />
                <FormInput inputType="password" name="password" label="strong password" onChange={handleChange} onFocus={handleFocus} />
                <p className="error hide">{error}</p>
                <Button onClick={handleClick} label="Register" uiStyle="signup" />

            </RegisterPageStyles>
        );
    }
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

  .error {
      color: red;
      font-weight: bold;
      text-align: center;
  }

  .hide {
      display: none;
  }
`;