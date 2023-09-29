import React from 'react';
import Nav from './nav';
import AboutMe from './aboutMe';
import MainPhoto from './mainPhoto';
import Paintings from './paintings';
import Exhibitions from './exhibitions';


class Main extends React.Component{
   
    render()
    {
        return(
           <div>
                <Nav />
                <MainPhoto />
                <AboutMe />
                <Paintings />
                <Exhibitions />
            </div>
        )
    }
}

export default Main
