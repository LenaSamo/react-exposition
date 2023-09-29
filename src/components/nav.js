import React from 'react';

class Nav extends React.Component{
    
    aboutMe = "Обо мне"
    paintings = "Картины"
    exhibitions = "Выставки"
    orderForm = "Заказать"
    render()
    {
        return(
            <ul className="ulMenu">
            <li>
                <a href="#aboutMe">{this.aboutMe}</a>
            </li>
            <li>
                <a href="#paintings">{this.paintings}</a>
            </li>
            <li>
                <h1>Экспозиция</h1>
            </li>
            <li>
                <a href="#exhibitions">{this.exhibitions}</a>
            </li>
            <li>
                <a href="#orderForm">{this.orderForm}</a>
            </li>
        </ul>
        )
    }
}

export default Nav
