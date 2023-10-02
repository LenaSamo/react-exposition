import React from 'react';
import mainPicture from "../img/mainPicture.jpg"

class MainPhoto extends React.Component{
   
    render()
    {
        return(
            <div style={{ backgroundImage: `url(${mainPicture})`,
                        backgroundRepeat: 'no-repeat',
                        width: '1349px',
                        height: "500px",
                        backgroundPosition: 'center' }}>
                <a id="buttonMainPhoto" href="#orderForm">Сделать заказ</a>
            </div>
        )
    }
}

export default MainPhoto
