import React from 'react'
import axios from 'axios';
import { useBudgetContext, BudgetProvider } from '../contexts/BudgetContext'

import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductFrame from '../../components/ProductFrame';
const endpoint="https://fakestoreapi.com/products";
const Products = () => {
   const [items,setItems]=useState([]);
   const [filteredItems,setFilteredItems]=useState([]);
   const {budgetMode}= useBudgetContext();

     useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
         setItems(structuredClone(resp.data))
         setFilteredItems(resp.data)
        
      })
  },[])
  useEffect(()=>{
    let selectedData;
        if (budgetMode){
          selectedData= items.filter((item)=>{
            return item.price<30;
          })
          setFilteredItems(selectedData)
        }
        else{setFilteredItems(items)}
        
  },[budgetMode]) 
  return (
    <main>
      <div className="container">
       
        <div className="row g-2">
          <div className="col-12">
            <h3>All Items</h3>
          </div>
          {
            filteredItems.map((item)=>{
              return(
                <Link to={`/products/${item.id}`} key={item.id} >
                <ProductFrame data={item} />
                  </Link>
              )
            })
          }
        </div>
      </div>
   
    </main>
  )
}

export default Products