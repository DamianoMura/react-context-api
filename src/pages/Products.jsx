import React from 'react'
import axios from 'axios';
import { useBudgetContext, BudgetProvider } from '../contexts/BudgetContext'

import { Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductFrame from '../../components/ProductFrame';
const endpoint="https://fakestoreapi.com/products";
const Products = () => {
   const [items,setItems]=useState([]);
   const {budgetMode}= useBudgetContext();

     useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
        //  setItems(structuredClone(resp.data))
        let selectedData;
        if (budgetMode){
          selectedData= resp.data.filter((item)=>{
            return item.price<30;
          })
          setItems(selectedData)
        }
        else{
          setItems(resp.data)
        }
      })
  },[budgetMode])
   
  return (
    <main>
      <div className="container">
       
        <div className="row g-2">
          <div className="col-12">
            <h3>All Items</h3>
          </div>
          {
            items.map((item)=>{
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