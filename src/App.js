import React, { useState } from 'react';
import Button from './components/Button';
import ItemList from './containers/ItemList';
import './App.css';
import DeleteModal from './containers/DeleteModal';
import Modal from './containers/Modal'

function App() {
  const [itemList, setItemList] = useState([{id: 0, value: 'hello', isSelected: false}, {id: 1, value: 'hi',  isSelected: false}])
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [itemsToDelete, setItemsToDelete] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  
  const selectedItemsCount = itemList.filter(item=> item.isSelected).length;
   
  
const handleDeleteClick = (ids) => {
    debugger
      const items = itemList.filter(item => !ids.includes(item.id));
      setItemList(items)
      setIsDeleteModalShown(false);
    }
    

const handleItemCheck = (id) => {
    const items = itemList.map(item => {
      if(item.id == id) {
         item.isSelected = !item.isSelected
      }
      return item;
    })
    setItemList(items)
  }

const handleDeleteModalClose = () => {
    setIsDeleteModalShown(false)
}


const handleItemDelete = (id) => {
  setItemsToDelete([id])
  setIsDeleteModalShown(true);
}

const handleItemAdd = (value) => {
  setItemList([...itemList, {id: itemList.length+1, value: value, isSelected: false}])
  setIsModalShown(false)
}

const handleBulkDeleteClick = () => {
  const itemIds = itemList.filter(item => item.isSelected).map(item => item.id)
  setItemsToDelete(itemIds)
  setIsDeleteModalShown(true)
}



  return (
    <div className="App">
          {isDeleteModalShown ? <DeleteModal onDelete = {handleDeleteClick} itemsToDelete = {itemsToDelete}  onCloseModal = {handleDeleteModalClose} /> : null}
          {isModalShown ? <Modal onAdd = {handleItemAdd}  onCloseModal = {()=> {setIsModalShown(false)}} /> : null}
        <div>
          <ItemList items = {itemList} onDeleteClick = {handleItemDelete} onItemCheck = {handleItemCheck} />
           <Button value ='Add todo' onClick = {() => {setIsModalShown(true)}}/>
           {selectedItemsCount> 1 ?
           <Button value ='Bulk delete' onClick = {handleBulkDeleteClick}/> : null}
        </div>
      </div>

  );
}

export default App;
