import React from 'react'
import './About.css'

export default function About(){
    return (
        <section id="about-container">
            <div className='about-info'>
                <div className='about-me'>
                    <h2>Sobre mim</h2>
                    <div>
                        <p>Meu nome é Vinícius Leitão, tenho 22 anos e sou estudante de Ciência da Computação no CEFET-RJ. Meu primeiro contato com desenvolvimento web foi no ano de 2020 e desde então tenho buscado me desenvolver na área e me tornar um profissional. Atualmente busco uma oportunidade de ganhar experiência no mercado de trabalho atuando como desenvolvedor front-end e, futuramente, me tornar um desenvolvedor fullstack.</p>
                    </div>
                </div>
                <div className='about-list'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <ul>
                        <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</li>
                        <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</li>
                        <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</li>
                        <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</li>
                    </ul>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <a href='https://www.linkedin.com/in/vinicius-leitao/'>Perfil do LinkedIn</a>
                </div>
            </div>
        
        </section>
    );
}