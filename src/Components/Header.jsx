import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context";
import Nav from "./Nav";
import Search from "./Search";
import { useLocation } from "react-router";




function Header( ){
    const {cart}= useContext(Context)
    const location = useLocation()
    const [menuActive, setMenuActive]= useState(true)
    const [active, setActive]= useState(true)

    function getCount(){
        let count = 0
        if(cart.length === 0){
        return count
        }else {
        cart.forEach((product) => {
            count += product.count
        })
    }
         return count
    }


    return(
    <header className="header">
        <div className="header_container">
             <nav className="header_nav">
                 <div className="header_nav_wrapper">
                 <div className="header_nav_container">
                    <div className="header_nav_nav">
                        <NavLink to="/">
                            <img src='../images/logo.svg' alt="logo" />
                        </NavLink>

                         <button class="nav_toggle" onClick={()=>{setMenuActive(!menuActive)}}></button>
                        
                            <div className="header_navigation_container">
                                <Nav active={menuActive} setActive={setMenuActive}/>
                                {location.pathname === '/catalog' ? <Search /> : "" }
                            </div>  
                          <div className="header_nav_cart">
                            <NavLink to='/cart'  className="header_widget_cart" > 
                                <img src='../images/store.svg' alt="cart icon" />
                                <span id="header_cart_counter">{getCount()}</span>
                            </NavLink>
                        </div> 
                    </div>     
                      
                       
                   </div>     
                 </div>         
              </nav>
                    
        </div>      

       
    </header>

    )
}
export default Header