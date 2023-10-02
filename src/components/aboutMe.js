import React from 'react';
import Img from './img';
import avtoportret from "../img/avtoportret.png"

class AboutMe extends React.Component{
    h2AboutMe = "Обо мне"
    textAboutMe = 'Я Карл Павлович Брюллов. Обучался в столичной художественой Академии в течении 12 лет.' 
    + ' Изучал живопись выдающихся художников прошлых лет в итальянских музеях.' 
    + ' Пишу портреты на заказ, роспись соборов и церквей, картины любой сложности и размеров.'
    render()
    {
        return(
            <div className='block' id="aboutMe">
                <h2 className='h2Block'>{this.h2AboutMe}</h2>
                <Img image={avtoportret}/>
                <p className='pTextBlock'>{this.textAboutMe}</p>
            </div>
        )
    }
}

export default AboutMe
