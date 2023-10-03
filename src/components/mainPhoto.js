import React from 'react';
import mainPicture from "../img/mainPicture.jpg"

class MainPhoto extends React.Component{
   
    render()
    {
        return(
            <div className='mainPhoto' style={{ backgroundImage: `url(${mainPicture})`,
                         }}>
                <div className='butDiv'><a id="buttonMainPhoto" href="#orderForm">Сделать заказ</a></div>
            </div>
        )
    }
}

export default MainPhoto
