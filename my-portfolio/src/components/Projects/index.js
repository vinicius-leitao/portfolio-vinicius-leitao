import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import cards from '../../projects.json';


import "./Projects.css";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="projects-container">
      <div className="projects-info">
        <h2>Meus projetos</h2>
        <div className="projects-card">
          {cards.cards.slice(currentIndex, currentIndex + 3).map((card) => (
            <Link className='card-link' to={`/projects/${card.url}`}>
              <Card
                className="card-element"
                title={card.title}
                image={card.image}
                description={card.description}
                tool={card.tool}
              />
            </Link>
          ))}
          <button
            id="previousButton"
            onClick={() =>
              currentIndex <= 0
                ? setCurrentIndex(0)
                : setCurrentIndex(currentIndex - 3)
            }
          >
            {"<"}
          </button>
          <button
            id="nextButton"
            onClick={() =>
              currentIndex >= cards.length
                ? setCurrentIndex(currentIndex + 3)
                : setCurrentIndex(3)
            }
          >
            {"/>"}
          </button>
        </div>
      </div>
    </section>
  );
}
