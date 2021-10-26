import React, { useContext } from "react";
import {useState, useEffect} from 'react'
import Product from './Product';
import Data from '../products.json'
import Context from "./Context";
import Filter from "./Filter";




function Catalog(){
    
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products'))) 
    const {cart , setCart, filter, setFilter,searchValue, filterStatus} = useContext(Context)
   
    
    useEffect(()=>{
        if(!localStorage.getItem('products')){
            setProducts([...Data])
                localStorage.setItem('products',JSON.stringify(Data))
                   }
    },[])

    useEffect(()=>{
        if (filterStatus ==='height'){
          Data.sort((a,b)=>{
            console.log (a)
            return parseInt(a.price)-parseInt(b.price)
           })
          setProducts([...products])
        }else if (filterStatus === 'low'){
            Data.sort((a,b)=>{
              return parseInt(b.price) - parseInt(a.price)
            })
            setProducts([...products])
          }else {
            setProducts([JSON.parse(localStorage.getItem('products'))])
          }

        },[filterStatus])


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

       function  filterClick() {
         setFilter(true)
         
       }
   
    return(
      <section className="catalog_block">
        <div className="catalog">
     
          <button className="catalog_filter" onClick={()=>{filterClick()}}><img src="../images/filter-results-button.png" /></button>
             {filter ? <Filter /> : ''}
                <ul className="catalog__items">
                    {Data.filter((item)=>{
                      if(searchValue.length===0){
                        return item
                      }else if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
                        return item
                      }
                      }).map((product, index)=>{
                    
                    return <Product
                          product={product}
                          addToCart= {addToCart}
                          key={index}    
                        />
                    })}            
                </ul>
        </div>
      </section>
    )
}
export default Catalog