import React from 'react'
import './About.css'

export default function About(){
    return (
        <section id="about-container">
            <div className='about-info'>
                <div className='about-me'>
                    <h2>Sobre mim</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. .</p>
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
                    <a href='#'>Perfil do Linkedin</a>
                </div>

            </div>
        
        </section>
    );
}