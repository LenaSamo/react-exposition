import React from 'react';
import Img from './img';
import mainPicture from "../img/mainPicture.jpg"

class MainPhoto extends React.Component{
   
    render()
    {
        return(
            <div class="mainPhoto" style={{backgroundImage: `url(${mainPicture})`,
                                            backgroundRepeat: "no-repeat"
                                        }}>
                <input id="buttonMainPhoto" type="button" value="Сделать заказ"></input>
            </div>
        )
    }
}

export default MainPhoto
