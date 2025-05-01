import React from 'react'

export default function Card({id, titulo, imagen, instructor, precio, url}) {
  return (
      <div className='card text-center bg-dark'>
      <div className='card-body text-light'>
        <img src={imagen} alt=''></img>
        <h4 className='card-title'> {titulo}</h4>
         <p className='card-text text-secondary'> 
           instructor: {instructor}
         </p>
         <h5 className='card-title'> {precio}</h5>
         <a href={url} className='btn btn-outline-secondary rounded-0'> 
          ir al sitio web
         </a>
         </div>
         </div>
       
  )
}
