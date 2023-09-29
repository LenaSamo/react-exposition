import React from 'react';

class Img extends React.Component{
   
    render()
    {
        return(
            <img src={this.props.image} />
        )
    }
}

export default Img
