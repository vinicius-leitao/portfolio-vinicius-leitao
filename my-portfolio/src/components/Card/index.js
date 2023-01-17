import React from 'react'

import './Card.css'

export default function Card({image, title, description, tool}){
    return (
        <div className='card-container'>
            <img className="card-main-image" src={image} alt="Imagem do card" title={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tools'>
                <img src={tool}></img>
            </div>
        </div>
    );
}