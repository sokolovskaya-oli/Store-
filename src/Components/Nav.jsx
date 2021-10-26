import React, { useState } from 'react'

import {NavLink} from 'react-router-dom'

function Nav({active, setActive}) {
    
    return(
        
        
        <ul className={active ? "header_navigation active" : "header_navigation"} onClick={(e)=>e.stopPropagation()}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/catalog">Catalog</NavLink></li>
        </ul> 
  
    )
}
export default Nav