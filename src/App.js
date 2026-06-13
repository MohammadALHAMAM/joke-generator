import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JokeCard from './components/JokeCard';
import CategorySelector from './components/CategorySelector';
import FavoritesList from './components/FavoritesList';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);
  const [category, setCategory] = useState('Any');
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('jokesFavorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Load random joke on mount and category change
  useEffect(() => {
    fetchJoke();
  }, [category]);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/${category}?format=json`
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = () => {
    if (joke && !favorites.some(fav => fav.joke === joke.joke || (fav.setup === joke.setup))) {
      const newFavorite = {
        id: Date.now(),
        ...joke,
      };
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem('jokesFavorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('jokesFavorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = joke && favorites.some(
    fav => fav.joke === joke.joke || (fav.setup === joke.setup)
  );

  return (
    <div className="app-container">
      <Container className="py-5">
        <div className="header-section mb-5 text-center text-white">
          <h1 className="display-3 mb-3">😂 Joke Generator</h1>
          <p className="lead">Lade neue Witze und teile sie mit Freunden!</p>
        </div>

        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <CategorySelector 
              selectedCategory={category}
              onCategoryChange={setCategory}
              onGenerateNew={fetchJoke}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <JokeCard 
              joke={joke}
              loading={loading}
              onAddFavorite={handleAddFavorite}
              isFavorite={isFavorite}
              onGenerateNew={fetchJoke}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="text-center mb-4">
            <button 
              className="btn btn-light btn-lg"
              onClick={() => setShowFavorites(!showFavorites)}
            >
              ⭐ Favoriten ({favorites.length})
            </button>
          </Col>
        </Row>

        {showFavorites && (
          <Row>
            <Col md={12}>
              <FavoritesList 
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
