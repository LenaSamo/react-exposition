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
                <input id="buttonMainPhoto" type="button" value="Сделать заказ"></input>
            </div>
        )
    }
}

export default MainPhoto
