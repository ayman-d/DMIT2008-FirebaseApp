import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'

import AuthContext from '../auth/AuthContext'

const LoginPage = () => {

    const auth = useContext(AuthContext);
    const [user, setUser] = useState({ email: "", password: "" })
    const [error, setError] = useState("");

    useEffect(() => {
        document.querySelector(".first").querySelector("input").focus();
    }, [])

    const handleClick = (e) => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .catch(error => {
                console.log(error.code, error.message);
                setError(error.code)
                document.querySelector(".error").classList.remove("hide");
                // setIsValid(false);
            })
    }

    const handleFocus = (e) => {
        document.querySelector(".error").classList.add("hide");
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value.trim() })
    }

    if (auth.authenticated) {
        return (<Redirect to="/dashboard" />)
    }

    return (
        <LoginPageStyles>
            <header>
                <h1>Unlimited Trial Account</h1>
                <p>No credit card required</p>
            </header>

            <FormInput className="first" inputType="email" label="valid email address" name="email" onChange={handleChange} onFocus={handleFocus} />
            <FormInput inputType="password" label="strong password" name="password" onChange={handleChange} onFocus={handleFocus} />
            <p className="error hide">{error}</p>
            <Button onClick={handleClick} label="Login" uiStyle="login" />

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

  .error {
      color: red;
      font-weight: bold;
      text-align: center;
  }

  .hide {
      display: none;
  }
`;