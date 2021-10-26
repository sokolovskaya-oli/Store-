import React from "react";
import {useHistory} from "react-router-dom"



function Product({product, addToCart}){
 const history = useHistory()

  function productView(){
  
    history.push(`product/${product.id}`,{product})
    } 

  return(
    <li className="catalog__item">
      <div className="catalog__item_wrapper">
          <div className="catalog__caption__name" onClick={()=>{productView()}}>{product.title}</div>
          <span className="catalog__item__img"><img src={product.image} alt={product.title}/></span>
          <div className="catalog__caption">
            <div className="catalog__caption__description">{product.description}</div>
            <div className="catalog__caption__price"> {product.price} руб.</div>
            
            
          </div>
          <div className="catalog_product__icon_cart" onClick={()=>{addToCart(product)}}  id={product.id}> </div>
       </div> 
    </li>
    )
  
}

export default Product