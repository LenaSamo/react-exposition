import React from "react";


const OrderForm = () => {
    let h2OrderForm = "Сделать заказ";
    return(
        <form className='block' id="orderForm">
            <h2 className='h2Block'>{h2OrderForm}</h2>
            <label htmlFor="name">Имя</label><br />
            <input className="formInput" id="name" type="text" placeholder="Петр"></input><br />

            <label htmlFor="email">Почта</label><br />
            <input className="formInput" id="email" type="email" placeholder="petr@gmail.com"></input><br />

            <label htmlFor="phone">Телефон</label><br />
            <input className="formInput" id="phone" type="phone" placeholder="+7(999) 999 99 99" ></input><br />

            <label htmlFor="description">Описание</label><br />
            <textarea id="description" name="comment" cols="40" rows="3"></textarea><br />

            <input id="buttonOrderForm" type="button" value="Заказать"></input>
        </form>
    )
}

export default OrderForm