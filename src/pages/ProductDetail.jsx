import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import ProductFrame from '../../components/ProductFrame'
import { useBudgetContext, BudgetProvider } from '../contexts/BudgetContext'
const endpoint="https://fakestoreapi.com/products";
const ProductDetail = () => {
  const {id}=useParams();
  const [product, setProduct]=useState();
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(endpoint+`/${id}`).then((resp)=>{
      
      
      setProduct(resp.data)})
  },[id])
  return (
  !product ? <div className="container h1">loading....</div>
  :
  <div className="card">
    <div className="card-header d-flex justify-content between p-3">
      <div className={`cat cat-${product.category.substr(0,3)}`}> {product.category}</div>
      <div className="title"><h2>{product.title}</h2></div>
    </div>

    <div className="card-body d-flex">
      <div className="image-frame">
        <img src={product.image} alt={product.title} />
        <div className="special">
          <strong className="price mb-1">{product.price} €</strong>
          <strong className="rating">{product.rating.rate} <i className="fa-solid fa-star"></i></strong>
                                
        </div>
      </div>
      <div className="description">
      {product.description}
      </div>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <button 
        className="btn btn-secondary"
        onClick={()=>{parseInt(id)-1 === 0 ? navigate(`/products`) : navigate(`/products/${parseInt(id)-1}`)}}>previous</button>
      <button 
        className="btn btn-secondary"
        onClick={()=>{navigate(`/products/${parseInt(id)+1}`)}}
          >next</button>
    </div>
  </div>
  )
}

export default ProductDetail