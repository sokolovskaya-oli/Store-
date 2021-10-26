import React, { useContext } from "react";
import Context from "./Context";


function Search(){

const {setSearchValue}= useContext(Context)

    function getInputValue(ev){
        setSearchValue(ev.target.value)
    }


    return(
        <input type='text' id='header__widget_search' placeholder='Search' onChange={(ev)=>{getInputValue(ev)}} />
    )
}

export default Search