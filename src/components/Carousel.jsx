import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/App.css";
import Loader from "../utils/Loader";
import API from "../services/api";

const GameCard = ({ name, image, score }) => {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image} alt="Game cover" />
        <span className="game-score">{score}</span>
        <h1 className="game-title">{name}</h1>
      </div>
    </div>
  );
};

const customArrow = (onClickHandler, direction, label) => (
  <button
    type="button"
    onClick={onClickHandler}
    className={`custom-arrow ${direction === "left" ? "left-arrow" : "right-arrow"}`}
    title={label}
  >
    {direction === "left" ? "<" : ">"}
  </button>
);

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener una lista de juegos populares usando el endpoint /games de la API de RAWG
    API.getGames()
      .then((data) => {
        // Guardar los primeros tres juegos en el estado
        setGames(data.slice(0, 5));
        setLoading(false); // Marcamos que los datos han terminado de cargar
      })
      .catch((error) => {
        console.error("Error obteniendo juegos populares:", error);
        setLoading(false); // Marcamos que los datos han terminado de cargar incluso si hay un error
      });
  }, []);

  return (
    <div className="popular-games">
      {loading ? (
        <Loader />
      ) : (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && customArrow(onClickHandler, "left", label)
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && customArrow(onClickHandler, "right", label)
          }
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              image={game.background_image}
              score={game.rating}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default PopularGames;
