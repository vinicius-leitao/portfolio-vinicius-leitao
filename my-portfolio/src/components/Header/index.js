import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

export default function Header(){
    return (
        <header id="header-container">
            <div>
                <img src="assets/LogoPortfolio.png" alt="Logo com o nome Vini Leitao envolvido por simbolos de menor e maior, representando uma tag de componente em React" title="Logo com o nome Vini Leitao"></img>
                <nav>
                    <a href='#'>Início</a>
                    <a href='#'>Sobre mim</a>
                    <a href='#'>Projetos</a>
                    <a href='#'>Contato</a>
                </nav>
            </div>
        </header>
    );
}