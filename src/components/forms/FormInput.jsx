import React from 'react'
import styled from 'styled-components';



const FormInput = (props) => {
    return (
        <FormInputStyles>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.inputType} name={props.name} id={props.id} />
        </FormInputStyles>
    );
}

export default FormInput;

const FormInputStyles = styled.div`
  color: #3a454c;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.12),

  label{
      font-size: 13px;
      color: #848d92;
  }

  input {
      width: 100%;
      font-size: 1rem;
      background-color: inherit;
      border: 1px solid #c5c5c5;
      border-radius: 4px;
      padding: 0.25rem;
      outline: none;
      color: #3a454c;
      margin-bottom: 10px;
  }
`;