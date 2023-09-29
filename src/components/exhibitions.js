import React from 'react';

class Exhibitions extends React.Component{
    h2Exhibitions = "Выставки"
    textAboutMe = 'Обучался в столичной художественой Академии в течении 12 лет.' 
    + ' Изучал живопись выдающихся художников прошлых лет в итальянских музеях.' 
    + ' Пишу портреты на заказ, роспись соборов и церквей, картины любой сложности и размеров.'
    render()
    {
        return(
            <div className='block' id="exhibitions">
                <h2 className='h2Block'>{this.h2Exhibitions}</h2>
                <p className='pTextBlock'>{this.textAboutMe}</p>
            </div>
        )
    }
}

export default Exhibitions
