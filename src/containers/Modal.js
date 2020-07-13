import React, {  useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input'

const Modal = ({onAdd, onCloseModal}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
      }

    return (
        <div className = 'Modal'>
          <Input type= 'text' handleChange = {handleChange}/>
          <div>
          <Button value = 'Add' onClick = {()=> {onAdd(inputValue)}}/>  
          <Button value = 'Cancel' onClick = {onCloseModal}/>  
          </div>
        </div>    
    )
}

export default Modal;