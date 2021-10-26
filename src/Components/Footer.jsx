import React from "react";
import Nav from "./Nav"

function Footer(){
    return( 
        <div className="footer_wrapper">
         
                <a href="#">
                    <img src='../images/logo.svg' alt="#" />
                </a>
                    <div className="footer_nav"><Nav /></div>
                <div className="footer_social item1"></div> 
                <div className="footer_social item2"></div>    
                <div className="footer_social item3"></div>   
              
        </div>
    )
}
export default Footer