import React from "react";

const Contact = () => {
    let h2Contact = "Контакты"
    let phone = "+7(999) 999 99 99"
    let email = "BrullovKarl@gmail.com"
    return(
        <div className='block' id="сontact">
            <h2 className='h2Block'>{h2Contact}</h2>
            <div className="infBlockContact">
                <p>Почта: {email}</p>
                <p>Телефон: {phone}</p>
            </div>
        </div>
    )
}
export default Contact