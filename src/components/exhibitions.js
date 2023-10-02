import React from 'react';

const Exhibitions = () => {
    let h2Exhibitions = "Выставки";
    const arrInf = [
        {
            id: 1,
            title: "Покой и радость",
            date: "12 НОЯБРЯ 2021 − 30 ЯНВАРЯ 2022",
            place: "ЦВЗ Санкт-Петербурга 'Манеж', Санкт-Петербург, Исаакиевская площадь, 1",
        },
        {
            id: 2,
            title: "Русская классика. Нерассказанные истории",
            date: "25 АВГУСТА − 17 ОКТЯБРЯ 2021",
            place: "Нижегородский государственный художественный музей, Нижний Новгород, Кремль, к. 3",
        },
        {
            id: 3,
            title: "Мечты о свободе. Романтизм в России и Германии",
            date: "23 АПРЕЛЯ − 8 АВГУСТА 2021",
            place: "Государственная Третьяковская галерея, Москва, Лаврушинский переулок, 10",
        }
    ] 
    let res = arrInf.map(function(item) {
        return <div className='blockEx' key={item.id}>
            <h3 className='h3Exhibit'>{item.title}</h3>
            <p className='dateP'>{item.date}</p>
            <p className='placeP'>{item.place}</p>
        </div>;
    });
    
    return(
        <div className='block' id="exhibitions">
            <h2 className='h2Block'>{h2Exhibitions}</h2>
            {res}
            <input id="buttonExhibitions" type="button" value="Подробнее"></input>
        </div>
    )
}

export default Exhibitions
