import React from 'react'
import { useParams } from 'react-router-dom'

import './ProjectsPage.css'
import projects from '../../projects.json'

export default function ProjectsPage(){

    const {url} = useParams()
    const project = projects.cards.find(p => p.url === url)
    console.log(project.image)

    return (
        <div>
            <main className="projects-page-container">
                <div className='projects-basic-info'>
                    <img src={project.image} alt="#" title={project.title}></img>
                    <h1>{project.title}</h1>
                    <p>{project.date}</p>

                    <div>
                        <span>Tecnologias: </span>
                        <img src={project.tool}></img>
                    </div>
                </div>
                <div className='projects-page-description'>
                    <h2>Descrição</h2>
                    <p>{project.text}</p>
                </div>
            </main>
        </div>
    );
}