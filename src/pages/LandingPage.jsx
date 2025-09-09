
import { Link, NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

const endpoint="https://fakestoreapi.com/products";


const LandingPage = () => {

 const [items,setItems]=useState([]);
   

     useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
          const filtered = resp.data.filter((item)=>{
            return( item.rating.rate>3 && item.rating.count>350)
          })
       
          setItems(filtered)
        
      })
  
  },[])

 return (
    <main>
      <div className="container-fliud">
        <div className="row">
          <div className="col-12 text-center my-4">
            <h3>Best Rated Products</h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="cta">
              <div className="overhead-message">
              <h4>BEST RATES AT UNBEATABLE PRICES!!!</h4>
              <NavLink className="btn btn-success" to="/products">SHOP NOW!!! </NavLink>
            </div>  
            <div className="container-fluid">
              <div className="row">

                  {items.map((item)=>{
                    return(

                      
                      <div className="col-12 col-md-6 col-lg-3 p-2" key={item.id} >
                        <div className="cta p-2">

                          <div className="cta-pic p-5 m-1">
                            <img src={item.image} alt={`item${item.id}`} />
                            <div className="special">
                              <strong className="price mb-1">{item.price} €</strong>
                              <strong className="rating">{item.rating.rate} <i className="fa-solid fa-star"></i></strong>
                              
                            </div>
                            <div className="title">
                              {item.title}
                            </div>

                           
                            <div className={`cat cat-${item.category.substr(0,3)}`}> 
                            <span>{item.category}</span>

                            </div>
                            
                          </div>
                        </div>
                      </div>
                    )
                  })} 
              </div>
            </div>
              
              
            </div>
          </div>   
          <div className="col-12 text-center">
            <h2>Welcome to our online shop, </h2>
          </div>
          <div className="col-12 text-center">
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage




            
              
