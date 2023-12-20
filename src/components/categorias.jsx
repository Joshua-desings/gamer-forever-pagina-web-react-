// CategoriesList.jsx
import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API para obtener las categorías
    fetch("https://api.rawg.io/api/genres?key=f91db0b1d11143638d9547da8056c0b4")
      .then(response => response.json())
      .then(data => {
        // Guarda las primeras 6 categorías en el estado
        setCategories(data.results.slice(0, 6));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="categories-list">
      <h2>Categorías</h2>
      <div className="category-container">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img
              src={category.image_background} // Utiliza la propiedad que contenga la URL de la imagen de la categoría
              alt={category.name}
              style={{ maxWidth: '100%', height: '350px', }} // Ajusta el tamaño según tus necesidades
            />
            <div className="category-name-overlay">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
