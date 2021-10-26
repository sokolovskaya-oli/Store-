import React, { useContext } from "react";
import {useHistory, useLocation} from 'react-router-dom'
import Context from "./Context";





function ProductCard (){
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const history = useHistory()  
    const location = useLocation() 
  
    const product = location.state.product
    const {id, title, description, price, image} = location.state.product

    const {cart,setCart} =useContext(Context)
    function checkAddToCart (product){
        const productStatus = cart.findIndex((item)=> item.id === product.id)
        return productStatus
      }
    
      function addToCart(product){
        if(cart.length === 0){
          product.count = 1
          cart.push(product)
        }else if(checkAddToCart(product) !== -1){
          cart[checkAddToCart(product)].count +=1
        } else {
          product.count = 1
          cart.push(product)
        }
        setCart([...cart])
        localStorage.setItem('cart', JSON.stringify(cart))
         }

    function backToHome(){
        history.push('/catalog')
    }
    function backToCart(){
        history.push('/cart')
    } 
   
    return(
        <section className="product_card">
        <div className="product_card_wrapper">
            
            <div className="product_card_description">
                 <div className="product_card_description_img">
                    <span className="product__card__img"><img src={image}  /></span>
                    <button className="product_card__btn_back" onClick={()=>{backToHome()}}>Назад</button>
                    <div className="product_card__icon_cart" onClick={()=>{addToCart(product)}}  id={id}> </div>
                    </div>
                <div className="product_card_caption">
                    <h1>{title}</h1>
                    <p>{description}</p>
                        
                    <h1> {price} руб.</h1>
                    <button className="product_card__btn_cart" onClick={()=>{backToCart()}}>Перейти в корзину</button>
                </div>      
            </div>
        </div>
        </section>
    )
}

export default ProductCard