import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import PopularGames from "./components/Carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import API from "./services/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [topGames, setTopGames] = useState([]);
  const [currentRoute, setCurrentRoute] = useState("home"); // Agrega un estado para la ruta

  const fetchData = async () => {
    try {
      const topGamesData = await API.getPopularGames();
      setTopGames(topGamesData);
    } catch (error) {
      console.error("Error al obtener los juegos más populares:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  return (
    <Router>
      <div>
        {/* Header se muestra en todas las rutas */}
        <Header onRouteChange={handleRouteChange} />

        {/* Definición de las rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Contenido de la ruta principal */}
                <SearchBar onSearch={handleSearch} />
                <NavBar />
                <PopularGames />
                <Profile />
              </>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
