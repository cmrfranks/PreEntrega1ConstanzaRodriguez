import React, { useEffect } from 'react'
import getItems, { getItemsByCategory } from '../../services/mockAsyncService'
import { useState } from 'react';
import ItemList from '../itemList/ItemList';

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
 
 let categoryid = props.categoryid;
 
 useEffect( ()=> {
   if(categoryid){
     getItemsByCategory(categoryid).then((respuesta) => {
       console.log(respuesta);
       setProducts(respuesta);
     });
   }
   
   else {
     getItems().then((respuesta => {
       console.log(respuesta);
       setProducts(respuesta);
     }))
   }
 }, [categoryid]);
 
  return(
     <ItemList products={products}/>
   )
  }

export default ItemListContainer