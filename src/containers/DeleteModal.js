import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input'

const DeleteModal = ({onDelete, onCloseModal, itemsToDelete}) => {
    return (
        <div className = 'Modal'>
          <p>Are You sure You want to delete?</p>
          <div>
          <Button value = 'Yes' onClick = {()=> {onDelete(itemsToDelete)}}/>  
          <Button value = 'No' onClick = {onCloseModal}/>  
          </div>
        </div>    
    )
}

export default DeleteModal;