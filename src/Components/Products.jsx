import React from "react";
import { NavLink } from "react-router-dom";
import { Rate } from 'antd';

function Products(){
  

    return(
        <section>
            <div className="products_wrapper">
                <div className="products_header">
                    <h1>Our popular products</h1>
                 
                </div>
                    <ul className="products_product_container">
                            <li className="products_product_card_wrapper">
                                <div className="products_product_card">
                                   
                                    <span className="products_product_img">
                                        <img src="../images/pink-oloe.svg" alt="#" />
                                        
                                    </span>    
                                    <div className="products_product_caption">
                                        <div className="products_product_stars">
                                            <span>
                                            <Rate defaultValue={5} />
                                            </span>
                                        </div>
                                        <div className="products_product_description">
                                        <h2>Pink Headphone</h2>
                                        <h3>235 $</h3>
                                        </div>
                                        <button className="products_product_btn"> <NavLink to="/catalog">Go to catalog</NavLink></button>
                                    </div>
                                </div>
                            </li>
                            <li className="products_product_card_wrapper">
                                <div className="products_product_card">
                                
                                    <span className="products_product_img">
                                        <img src="../images/green-solo.svg" alt="#" />
                                     
                                    </span>    
                                    <div className="products_product_caption">
                                             <span>
                                             <Rate defaultValue={5} />
                                            </span>
                                        <div className="products_product_description">
                                        <h2>Green Headphone</h2>
                                        <h3>235 $</h3>
                                        </div>
                                        <button className="products_product_btn"><NavLink to="/catalog">Go to catalog</NavLink></button>
                                    </div>
                                </div>
                            </li>
                            <li className="products_product_card_wrapper">
                               <div className="products_product_card">
                                  
                                    <span className="products_product_img">
                                        <img src="../images/blue-obule.svg" alt="#" />
                                      
                                    </span>    
                                    <div className="products_product_caption">
                                            <span>
                                            <Rate defaultValue={5} />
                                            </span>
                                        <div className="products_product_description">
                                        <h2>Blue Headphone</h2>
                                        <h3>235 $</h3>
                                        </div>
                                        <button className="products_product_btn"><NavLink to="/catalog">Go to catalog</NavLink></button>
                                    </div>
                                </div>
                        </li>
                       
                    </ul>
            </div>
        </section>
    )
}
export default Products