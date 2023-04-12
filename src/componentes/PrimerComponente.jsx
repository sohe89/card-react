import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
//import Menu from './Menu';

//import {useState} from "react";

/*const PrimerComponente = () => {
    
    const [start, setStart] = useState(0);
    console.log(start)

    return (
        <div>
            <button onClick={() => setStart(start + 1)}>Boton</button>
            <h1>{start}</h1>
        </div>
    )
    
}*/

const PrimerComponente = () => {
  const location = useLocation();  
    const cards = [
        {
          "id": 1,
          "name": "Lugar 1 ",
          "img": "https://images.pexels.com/photos/5226950/pexels-photo-5226950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "descripcion": "descripcion 1",
          "poblacion": "Población: 7",
          "pathname": "/modal",
        },
        {
            "id": 2,
            "name": "Lugar 2 ",
            "img": "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "descripcion": "descripcion 2",
            "poblacion": "Población: 32",
            "pathname": "/modal2",
          },
          {
            "id": 3,
            "name": "Lugar 3 ",
            "img": "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 33",
            "pathname": "/primerComponente/card-3",
          },
          {
            "id": 4,
            "name": "Lugar 4 ",
            "img": "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 334",
            "pathname": "/primerComponente/card-4",
          },
          {
            "id": 5,
            "name": "Lugar 5 ",
            "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 70",
            "pathname": "/primerComponente/card-5",
          },
          {
            "id": 6,
            "name": "Lugar 6 ",
            "img": "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 900",
            "pathname": "/primerComponente/card-6",
          },
          {
            "id": 7,
            "name": "Lugar 7 ",
            "img": "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 100.000",
            "pathname": "/primerComponente/card-7",
          },
          {
            "id": 8,
            "name": "Lugar 8 ",
            "img": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: 23.000.000",
            "pathname": "/primerComponente/card-8",
          },
          {
            "id": 9,
            "name": "Lugar 9 ",
            "img": "https://images.pexels.com/photos/1126382/pexels-photo-1126382.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población: -",
            "pathname": "/primerComponente/card-9",
          },
          {
            "id": 10,
            "name": "Lugar 10 ",
            "img": "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "descripcion": "descripcion 3",
            "poblacion": "Población:23.0000",
            "pathname": "/primerComponente/card-10",
          },
      ]
    const listItems = cards.map((card) =>
    <><div className="col">
      <Link to= {card.pathname} state={ {background: location }}>
      <div className="card mb-4"><img className='card-img-top' src= {card.img} alt="..."/><div><h5 className='card-title'>{card.name}</h5><p className='card-text'>{card.id}</p><p className='card-text'>{card.descripcion}</p><p className='card-text'>{card.poblacion}</p></div></div></Link> <Outlet/>
    <Outlet />
      </div></>
    );

//const root = ReactDOM.createRoot(document.getElementById('root')); 
//root.render(<div className='container mt-4'>{listItems}</div>);


return (
     <div className="container">
      <div className="row row-cols-2 py-5">
        {listItems}
      </div>
     </div>
)


    
}


export default PrimerComponente;