import React from 'react';
import Input from '../components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle  } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({item, onItemCheck, onDeleteClick}) => {
    return (
        <li className = 'TodoList'>
      <Input type="checkbox"  checked = {item.isSelected}  handleChange ={() => {onItemCheck(item.id)}}/>
      <span>{item.value}</span>
      <FontAwesomeIcon icon={faMinusCircle} onClick = {() => {onDeleteClick(item.id)}}/>
        </li>
    )
}

export default TodoItem;