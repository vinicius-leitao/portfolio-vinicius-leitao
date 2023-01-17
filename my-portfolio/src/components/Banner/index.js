import React from 'react'
import './Banner.css'

export default function Banner(){
    return (
        <section id="banner-container">
            <div className='banner-info'>
                <div className='banner-text'>
                    <h1>Olá, eu sou o Vinícius Leitão. Desenvolvedor Front-end em busca de uma oportunidade.</h1>
                    <p>Esse é o meu site portfólio. Nele você encontrará projetos relacionados a desenvolvimento web, entre outros que desenvolvi ao longo da minha experiência como programador.</p>
                    <button className='contact-button'>Entre em contato</button>
                </div>
                <div className='banner-img'>
                    <img src='assets/perfil.jpg' alt="Minha foto" title='Minha foto'></img>
                </div>
            </div>
        </section>
    );
}