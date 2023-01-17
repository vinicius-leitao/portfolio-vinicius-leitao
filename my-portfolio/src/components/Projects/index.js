import React, { useEffect, useState } from "react";

import Card from "../Card";

import "./Projects.css";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "IA do Ramo",
      image: "assets/ia-do-ramo.svg",
      description: "Detecção de máscaras de proteção contra a COVID 19",
      tool: "assets/python.png"
    },
    {
      title: "BorAdotar",
      image: "assets/boradotar.png",
      description: "Site para adoção de animais",
      tool: "assets/js.png"
    },
    {
      title: "Óticas Vida",
      image: "assets/oticas.png",
      description: "Description for card 3",
      tool: "assets/react.png"
    },
    {
        title: "Card 4",
        image: "https://via.placeholder.com/300x200",
        description: "Description for card 4",
        tool: "assets/js.png"
    }
  ];

  return (
    <section id="projects-container">
      <div className="projects-info">
        <h2>Meus projetos</h2>
        <div className="projects-card">
        {cards.slice(currentIndex, currentIndex+3).map(card => (
            <Card className='card-element'
            title={card.title}
            image={card.image}
            description={card.description}
            tool={card.tool}
          />
        ))}
          <button id="previousButton" onClick={() => (currentIndex <= 0) ? setCurrentIndex(0) : setCurrentIndex(currentIndex - 3)}>
            {'<'}
          </button>
          <button  id="nextButton" onClick={() => (currentIndex >= cards.length) ? setCurrentIndex(currentIndex + 3) : setCurrentIndex(3)}>
            {'/>'}
          </button>
        </div>
      </div>
    </section>
  );
}
