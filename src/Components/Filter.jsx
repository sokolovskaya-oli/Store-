import React, { useContext } from "react";
import Context from "./Context";


function Filter(){

    const {setFilter, filterStatus, setFilterStatus} = useContext(Context)

    function getFilterValue(value){
        setFilterStatus(value)
      
    }


    function closeFilter(){
        setFilter(false)
    }

    return(
<div className="filter_wrapper" onClick={()=>{closeFilter()}}>
    <div className="filter_body" onClick={(e)=>e.stopPropagation()}>
            <h3>Фильтр:</h3>
            <label><input type="radio" defaultChecked={filterStatus === "default" ? true : false} onClick={()=>{getFilterValue('default')}} name="filter_name" />По умолчанию</label>
            <label><input type="radio" defaultChecked={filterStatus === "height" ? true : false} onClick={()=>{getFilterValue('height')}} name="filter_name" />По убыванию</label>
            <label><input type="radio" defaultChecked={filterStatus === "low" ? true : false} onClick={()=>{getFilterValue('low')}} name="filter_name" />По возрастанию</label>
    </div>

</div>

    )
}

export default Filter