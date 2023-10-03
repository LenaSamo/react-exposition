import React from 'react';

const Gallery = () =>{
    const h2Paintings = "Галерея"
    
    const slides=[
        {
            url: "https://smallbay.ru/images3/briullov093.jpg",
            title: "фото1"
        },
        {
            url: "https://cdn.tretyakov.ru/mytretyakov/22/6827c3dfc19ebbb4cdf05f2dbc7ca4a1/thumb/fe6cf670c2598ffe3cefad2e23017e3d_x1.jpg",
            title: "фото2"
        },
        {
            url: "https://avatars.dzeninfra.ru/get-zen_doc/42056/pub_5a762168799d9d303e326f4d_5a762191c89010f00ed922db/scale_1200",
            title: "фото3"
        }
    ]
    return(
        <div className='block' id="paintings">
            <h2 className='h2Block'>{h2Paintings}</h2>
            
        </div>
        
    )
}

export default Gallery
