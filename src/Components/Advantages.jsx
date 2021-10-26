import React from "react";
import { NavLink } from "react-router-dom";

function Advantages(){
    return(
        <section className="advantages_box">
            <div className="advantages">
            <div className="adv_container">
                <div className="adv_wrapper_caption">
                    <h1>Good headphones <br/> and loud music is all <br /> you need </h1>
                        <div className="adv_caption_container">
                            <div className="adv_caption"> 
                                <span className="adv_caption_img"> <img src="../images/battery.jpg" alt=" icon battery" /></span>
                                <div className="adv_caption_description">
                                    <h3>Battery</h3>
                                    <p>Battery 6.2V-AAC кодек</p>
                                    <NavLink to="/about/#part1"><p>Подробнее</p></NavLink>
                                </div>   
                            </div>
                            <div className="adv_caption"> 
                                <span className="adv_caption_img">  <img src="../images/bluetooth.jpg" alt="icon bluetooth" /></span>
                                <div className="adv_caption_description">
                                    <h3>Bluetooth</h3>
                                    <p>Bluetooth 4.2 <br />Поддерживает кодеки AAC и SBC</p>
                                    <NavLink to="/about/#part2"><p>Подробнее</p></NavLink>
                                </div>
                            </div>    
                            <div className="adv_caption"> 
                                <span className="adv_caption_img"> <img src="../images/micriphone.jpg" alt="icon micriphone" /></span>
                                <div className="adv_caption_description">
                                    <h3>Microphone</h3>
                                    <p>Один электронный всенаправленный</p>
                                    <NavLink to="/about/#part1"><p>Подробнее</p></NavLink>
                                </div>
                            </div>  
                    </div>  
                </div>    
                <span className="adv_wrapper_caption_img"><img src="../images/caption-img.jpg" alt="headphones promo" /></span>
            </div>
            </div>
        </section>
    )
}
export default Advantages