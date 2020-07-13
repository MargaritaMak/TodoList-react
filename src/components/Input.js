import React from 'react';

const Input = (props) => {
  return (
    <input type={props.type} onChange={props.handleChange} checked= {props.checked} />
  )
}

export default Input;