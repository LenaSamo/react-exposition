import React from 'react';

class Nav extends React.Component{
    
    aboutMe = "Обо мне"
    paintings = "Картины"
    exhibitions = "Выставки"
    orderForm = "Заказать"
    contact = "Контакты"
    render()
    {
        return(
            <div className='nav'>
                 <h1>Экспозиция</h1>
                 <ul className="ulMenu">
                    <li>
                        <a href="#aboutMe">{this.aboutMe}</a>
                    </li>
                    <li>
                        <a href="#paintings">{this.paintings}</a>
                    </li>
                    <li>
                        <a href="#exhibitions">{this.exhibitions}</a>
                    </li>
                    <li>
                        <a href="#orderForm">{this.orderForm}</a>
                    </li>
                    <li>
                        <a href="#сontact">{this.contact}</a>
                    </li>
                </ul>
            </div>
       
        )
    }
}

export default Nav
