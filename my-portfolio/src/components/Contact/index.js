import React from 'react'

import './Contact.css'

export default function Contact(){
    return (
        <section id='contact-container'>
            <div >
                <h2>Entre em contato!</h2>
                <div className='contact-content'>
                    <div className='contact-image'>
                        <img src='assets/contact.svg'></img>
                    </div>
                    <div className='contact-info'>
                        <div className='info-divs'>
                            <h3>Minhas redes sociais</h3>
                            <ul>
                                <div className='detailed-info'>
                                    <img src='assets/github-sign.png'></img>
                                    <a href="https://github.com/vinicius-leitao" target="_blank"><li>Github</li></a>
                                </div>
                                <div className='detailed-info'>
                                    <img src='assets/devmedia.png'></img>
                                    <a href="https://www.devmedia.com.br/perfil/vinicius-leitao-santos" target="_blank"><li>Perfil do DevMedia</li></a>
                                </div>
                                <div className='detailed-info'>
                                    <img src='assets/linkedin-logo.png'></img>
                                    <a href="https://www.linkedin.com/in/vinicius-leitao/" target="_blank"><li>LinkedIn</li></a>
                                </div>
                            </ul>
                        </div>
                        <div className='info-divs'>
                            <h3>Contato</h3>
                            <ul>
                                <div className='detailed-info'>
                                    <img src='assets/o-email.png'></img>
                                    <li>vinileitao2000@gmail.com</li>
                                </div>
                                <div className='detailed-info'>
                                    <img src='assets/o-email.png'></img>
                                    <li>vini.devfrontend@gmail.com</li>
                                </div>
                                <div className='detailed-info'>
                                    <img src='assets/tel.png'></img>
                                    <li>+55 (21) 97076-0611</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    );
}