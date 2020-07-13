import React from 'react';
import Input from '../components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle  } from '@fortawesome/free-solid-svg-icons'
import TodoItem from '../components/TodoItem';

const ItemList = ({items, onDeleteClick, onItemCheck}) => {

  return (
    <div>
    {items.map(item => {
      return <TodoItem key = {item.id} item = {item} onItemCheck = {onItemCheck} onDeleteClick = {onDeleteClick}/>
    })}
    </div>
  )
}

export default ItemList;