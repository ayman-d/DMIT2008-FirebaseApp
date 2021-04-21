import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppBar = () => {

    return (
        <AppBarStyles>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </AppBarStyles>
    );
}

export default AppBar;

const AppBarStyles = styled.nav`
    box-shadow: 0 0 3px 1px grey;
    padding: 1rem;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
    }

    li {
        margin: 0 1rem 0;
    }

    a {
        text-decoration: none;
        color: grey;
    }

    button {
        padding: 0.7rem 1.4rem;
        background-color: #ca5e33;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin-left: 20px;
        outline: none;
        border: none;
    }

    button:hover {
        background-color: #fd7f4d;
    }

    span {
        color: firebrick;
        font-weight: bold;
        margin-left: 10px;
        font-size: 20px;
    }
`