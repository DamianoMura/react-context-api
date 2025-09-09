import React from 'react'


const ProductFrame = (props) => {
  const item=props.data;
  return (
    <div className="col-12">
      <div className="item-card">
        <div className="item-pic">
          <div className="price"><strong>{item.price}€</strong> </div>
          <div className="hovered">
            <div className={`cat cat-${item.category.substr(0,3)}`}></div>
            <img  src={item.image} alt={item.title} />
            <div className="text-center bg-white fw-bold">{item.title}</div>
          </div>

          <img src={item.image} alt={item.title} />
          <div className="rating"><strong>{item.rating.rate} <i className="fa-solid fa-star"></i></strong> </div>
        </div>
        <div className="item-info">
          <div className={`cat cat-${item.category.substr(0,2)}`}><strong>Category: </strong>{item.category}</div>
          <div className="title"><h5>{item.title}</h5></div>
          <div className="description"><p>{item.description}</p></div>

        </div>
      </div>
    </div>

  )
}

export default ProductFrame