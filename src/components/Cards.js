import React from 'react'
import Card  from './Card'
import image1 from '../assets/5db2d27cac708-bpfull.png'
import image2 from '../assets/jsHTML.jpg'


const card=[
{
  id: 1,
  titulo: "React",
  imagen: image1,
  instructor: "Fernando tenorio",
  precio: "$9000,mx",
  link:"https://reactjs.org/"

},
{ 
  id: 2,
  titulo: "React",
  imagen: image2,
  instructor: "Fernando tenorio",
  precio: "$9000,mx",
  link:"https://reactjs.org/"
},
{ id: 3,
  titulo: "React",
  imagen: image1,
  instructor: "Fernando tenorio",
  precio: "$9000,mx",
  link:"https://reactjs.org/"
}
]
export default function Cards() {
  console.log(card)
  return(
    <div>
      <div className='Nombre'>
      Pablo Uriel Paz Zuñiga
      </div>
     <div className='Container d-flex justify-content-center align-items-center h-100'>
         <div className='row'>
         {
          card.map(c => (
            <div className='co-md-4' key={card.map}>
            <Card
            key={c.id}
            id ={c.id}
            titulo = {c.titulo}
            imagen = {c.imagen}
            instructor ={c.instructor}
            precio = {c.precio}
            url = {c.link}
            />
            </div>
          ))
         }
        
         
        </div>
        
         </div>
    </div>
  
    
  )
}
