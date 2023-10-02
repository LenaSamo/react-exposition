import React from 'react';
import Nav from './nav';
import AboutMe from './aboutMe';
import MainPhoto from './mainPhoto';
import Paintings from './paintings';
import Exhibitions from './exhibitions';
import OrderForm from './orderForm';
import Contact from './contact';
import Footer from './footer';


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
                <OrderForm />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Main
