import React, { useState } from "react";
import { message} from 'antd';

function Subscribe(){

   
    const [email,  setEmail]= useState('')
    const [emailDirty,  setEmailDirty]= useState(false)
    const [emailError,  setEmailError]= useState('Email не введен')

    const success = () => {
        message.success('Ваша подписка успешно оформлена!');
    }

    
    function emailHandler(e){
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный email')
        }else{
            setEmailError('')
        }
    }
    
    function blurHandler(e){
        setEmailDirty(true)
    }
 

 return(
        <div className="subcribe_wrapper">
            <div className="subscribe_input">
                <h1>Subscribe</h1>
                <p>Хочешь знать о новинках, подписывайся!</p>
                <div>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                <input value={email} onBlur={(e)=>{blurHandler(e)}} name="email" placeholder="Enter Your email address" className="sudscribe_input_input" onChange={(e)=>{emailHandler(e)}}  />
                <button className="sudscribe_input_btn" onClick={success} >Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Subscribe