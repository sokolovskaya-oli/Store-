import React from "react";
import { NavLink } from "react-router-dom";

function HeaderBord(){
    return(
        <div className="header_bord">
                        <div className="header_bord_img" >
                            <img src='../images/red-sony.png' alt="red headphones" />
                        </div>
                        <div className="header_bord_description">
                            
                                <h2>Hear it. Feel it.</h2>
                                <p>Move <br/> with the<br/> music</p>
                            <div className="header_bord_description__box_price">
                                <span className="header_bord_description__price">573 руб.</span>
                                <span className="header_bord_description__lastprice">633 руб.</span>
                            </div>
                           <NavLink to="/catalog"> <button className="header_bord_description__btn">Buy now</button></NavLink>
                        </div>
                    
                
                    </div>
    )
}
export default HeaderBord