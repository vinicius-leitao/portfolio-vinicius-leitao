import React from 'react'
import './About.css'

export default function About(){
    return (
        <section id="about-container">
            <div className='about-info'>
                <div className='about-me'>
                    <h2>Sobre mim</h2>
                    <div>
                        <p>Meu nome é Vinícius Leitão, tenho 22 anos e sou estudante de Ciência da Computação no CEFET-RJ. Começando do zero, meu primeiro contato com desenvolvimento web foi no ano de 2020, após participar do processo seletivo para o Ramo Estudantil CEFET-RJ. Meu primeiro projeto foi o BorAdotar, um site de adoção de animais totalmente responsivo e acessível. Desde então tenho buscado me desenvolver na área e meu objetivo é me tornar um profissional de excelência. Atualmente busco uma oportunidade para ganhar experiência no mercado de trabalho atuando como desenvolvedor front-end e, futuramente, terei como meta me aprofundar nos estudos para me tornar um desenvolvedor fullstack.</p>
                    </div>
                </div>
                <div className='about-list'>
                    <p>Tenho experiência com desenvolvimento de landing pages, blogs e sites fictícios. Com boa base em HTML, CSS e Javascript, meu objetivo atual é me aprofundar nas seguintes tecnologias:</p>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                    </ul>
                    <p>Procuro sempre me atualizar e buscar mais conhecimento na área que gosto de atuar. Dessa forma, é possível que essa lista aumente em breve. Se deseja me conhecer mais e obter mais detalhes sobre o meu perfil e experiência profissional, você pode acessar o meu perfil do LinkedIn através do link abaixo. Mas que tal dar uma olhada nos projetos que já participei?</p>
                    <a href='https://www.linkedin.com/in/vinicius-leitao/'>{'< Perfil do LinkedIn />'}</a>
                </div>
            </div>
        
        </section>
    );
}