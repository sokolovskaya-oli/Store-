import React from "react";
import { message, Button, Space } from 'antd';


function Order(){

    const inputs = document.querySelectorAll('input');

        inputs.forEach(el => {
        el.addEventListener('blur', e => {
            if(e.target.value) {
            e.target.classList.add('dirty');
            } else {
            e.target.classList.remove('dirty');
            }
        })
        })
        
        const success = () => {
            message.success('Ваш заказ успешно принят!');
        }
   
    return( 
        <>
        <div className="order_wrapper">

            <h2 className="order_wrapper_title"> Для оформления заказа необходимо ввести в поле ввода Ваш  email и номер телефона. Первый освободившийся оператор перезвонит вам, для уточнения деталей по заказу. Спасибо, что выбрали нас!</h2>
                <label class="custom-field">
                <input type="email" placeholder="&nbsp;"/>
                <span class="placeholder">Введите ваш email</span>
                
                </label>

                <label class="custom-field one">
                <input type="phone" placeholder=" "/>
                <span class="placeholder">Введите ваш номер телефона</span>
                </label>
                <Space>
                 <Button onClick={success}>Отправить</Button>
                 </Space>

             
        </div>

        </>
    )
}
export default Order