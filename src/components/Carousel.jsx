import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/App.css";
import Loader from "../utils/Loader";
import API from "../services/api";

// Componente para cada tarjeta de juego
const GameCard = ({ name, image, score }) => {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image} alt={`${name} cover`} />
        <span className="game-score">{score}</span>
        <h1 className="game-title">{name}</h1>
      </div>
    </div>
  );
};

// Componente para los botones personalizados del carrusel
const CustomArrow = ({ onClickHandler, direction, label }) => (
  <button
    type="button"
    onClick={onClickHandler}
    className={`custom-arrow ${direction === "left" ? "left-arrow" : "right-arrow"}`}
    title={label}
  >
    {direction === "left" ? "<" : ">"}
  </button>
);

// Componente para mostrar el carrusel de juegos populares
const PopularGamesCarousel = ({ games }) => (
  <Carousel
    showArrows={true}
    showThumbs={false}
    showStatus={false}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && <CustomArrow onClickHandler={onClickHandler} direction="left" label={label} />
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && <CustomArrow onClickHandler={onClickHandler} direction="right" label={label} />
    }
  >
    {games.map((game) => (
      <GameCard
        key={game.id}
        name={game.name}
        image={game.background_image || "default-image.png"} // Imagen por defecto en caso de que falte la imagen
        score={game.rating || "N/A"} // Muestra "N/A" si no hay rating disponible
      />
    ))}
  </Carousel>
);

const PopularGames = () => {
  const [games, setGames] = useState([]); // Estado para almacenar los juegos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Asegúrate de activar el loader al inicio
        const topGamesData = await API.getPopularGames(); // Llama a la API para obtener los juegos populares
        setGames(topGamesData);
      } catch (error) {
        console.error("Error obteniendo juegos populares:", error);
        setError("Hubo un problema al cargar los juegos. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false); // Desactiva el loader al finalizar la petición
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Muestra el loader mientras se están cargando los datos
      ) : error ? (
        <div className="error-message">{error}</div> // Muestra un mensaje de error si ocurre
      ) : games.length > 0 ? (
        <div className="popular-games">
          <PopularGamesCarousel games={games} />
        </div>
      ) : (
        <div className="no-games-message">No hay juegos disponibles.</div> // Mensaje alternativo cuando no hay juegos
      )}
    </>
  );
};

export default PopularGames;
