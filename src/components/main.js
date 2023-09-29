import React from 'react';
import Nav from './nav';
import AboutMe from './aboutMe';
import MainPhoto from './mainPhoto';

class Main extends React.Component{
   
    render()
    {
        return(
            <div className='blocks'>
                <Nav />
                <MainPhoto />
                <AboutMe />
            </div>
        )
    }
}

export default Main
