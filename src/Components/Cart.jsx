import React, { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context";
import { useHistory } from "react-router";





function Cart(){

    const {cart , setCart} = useContext(Context)
    console.log(cart)
    const history = useHistory()  
   
   function increment (id){
        const product = cart.findIndex(item => item.id === id)
        cart[product].count +=1
        localStorage.setItem('cart', JSON.stringify(cart))
        setCart([...cart])
        
    }
    function decrement (id){
        const product = cart.findIndex(item => item.id === id)
        if (cart[product].count === 1){
            removeCartProduct(id)
        }else {
        cart[product].count -=1
        localStorage.setItem('cart', JSON.stringify(cart))
        setCart([...cart])
        }
    }

  const removeCartProduct = id =>{
       setCart(cart.filter(item =>{
           return item.id !== id
        }))
        localStorage.setItem('cart', JSON.stringify(cart))
   }

   function emptyCart(){
    if(cart.length === 0){
        return `Корзина пуста!`
    }

   }
  
    function getFullCosts(){
        let sum = 0
        if(cart.length === 0){
        return sum
        }else {
        cart.forEach((product, index) => {
            sum += parseInt(product.price) * product.count
         })
          
        }
        return sum.toLocaleString()
           
     }
  
     function goOrder(){
        history.push('/order')
     }

    return(
        <section className="basket">
            <div className="basket_box">
            {cart.map((item, index)=>{
                return(        
                <div className='basket_wrapper'>
                    <ul className='basket_container'>
                        <li>
                            <div className='basket_product'>
                                <span className="basket_title">{item.title}</span>
                                <div className="basket_counter"> 
                                    <button className="basket_btn_plus" onClick={()=>{increment(item.id)}} id={item.id}>+</button> 
                                    <span>{item.count}</span>
                                    <button className="basket_btn_minus" onClick={()=>{decrement(item.id)}} id={item.id}>-</button> шт.
                                </div>
                                <span className="basket_price"> {(parseInt(item.price)*item.count).toLocaleString()} руб.</span>
                                
                                <span className="basket_delete_product" onClick={()=> removeCartProduct(item.id)}> x </span>
                            </div>
                      </li>  
                    </ul>
                
                </div>
                )
            }
            )}
            
            <div className="basket_footer"> {emptyCart()} <br/> Итоговая стоимость: <strong> {getFullCosts()} </strong> рублей. </div>
            <button className="basket_order" onClick={()=>{goOrder()}}>Оформить заказ</button> 
            </div>
        </section>
    )
      
       

}

export default Cart