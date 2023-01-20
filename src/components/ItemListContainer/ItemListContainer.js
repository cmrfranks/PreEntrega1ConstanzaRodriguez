import React, { useEffect } from 'react'
import getItems from '../../services/mockAsyncService'
import Item from '../Item/Item'
import { useState } from 'react';
import ItemList from '../itemList/ItemList';

function ItemListContainer() {
 const [products, setProducts] = useState([]);

 useEffect( ()=> {
  getItems().then( (respuesta) => {
    console.log(respuesta)
    setProducts(respuesta)
   }, [])
 });
 
 return(
    <ItemList products={products}/>
  )
 }

export default ItemListContainer