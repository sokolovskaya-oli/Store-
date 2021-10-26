import React from "react";
import { NavLink } from "react-router-dom";


function Slider(){
   

    function heandlerNextPrev(diraction)
   
    {
        const div = document.querySelector('.main_slider_container')
        const divWidth = div.offsetWidth
        const span = [...div.getElementsByTagName('span')];
        const spanFirst = span[0];
        const spanFirstWidth = spanFirst.offsetWidth;
        const spanFirst_margin = parseInt(window.getComputedStyle(spanFirst).getPropertyValue('margin-right'))
        const spanFirstFullWidth = spanFirstWidth + spanFirst_margin
        const spanFirst_ml = Math.abs(parseInt(window.getComputedStyle(spanFirst).getPropertyValue('margin-left')));
        
        const breakPoint = span.length * spanFirstFullWidth - divWidth
        
  
        let ml = 0
  
        if(spanFirst_ml < breakPoint){ ml = spanFirst_ml+ spanFirstFullWidth*(diraction === "next" ? 1 : -1)} 
  
        spanFirst.style.marginLeft = `${ml}px`
  
      }    

    return(
        <section className="page_main_slider">
            <div className="page_main_slider_wrapper">
                <h1> Our Latest <br/> colour collection 2021<br/> Sony WH-H910N</h1>
                <div className="main_slider_container">                    
                        
                            <span className="main_slider_slide"><img src="../images/sony_red.jpg" alt="#" /></span>
                            <span className="main_slider_slide"><img src="../images/sony_blue.jpg" alt="#" /></span>
                            <span className="main_slider_slide"><img src="../images/sony_orange.jpg" alt="#" /></span>
                            <span className="main_slider_slide"><img src="../images/sony_green.jpg" alt="#" /></span>
                            <span className="main_slider_slide"><img src="../images/sony-black.jpg" alt="#" /></span>
                            <span className="main_slider_slide"><img src="../images/sony_all_color.jpg" alt="#" /></span>
                                      
                </div>
                <div className="main_slider_btns">
                <button className="main_slider_arrow-prev" type="button" onClick={()=>heandlerNextPrev('prev')}></button>
                <button className="main_slider_arrow-next" type="button" onClick={()=>heandlerNextPrev('next')}></button>
              
                </div>
                <NavLink to="/catalog" className="slider_nav">Go to catalog </NavLink>
               
            </div>
        </section>
    )
}
export default Slider