import React from 'react';
import { Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import './JokeCard.css';

function JokeCard({ joke, loading, onAddFavorite, isFavorite, onGenerateNew }) {
  const renderJoke = () => {
    if (!joke) return null;

    if (joke.type === 'twopart') {
      return (
        <div>
          <p className="joke-setup">{joke.setup}</p>
          <p className="joke-delivery">{joke.delivery}</p>
        </div>
      );
    } else {
      return <p className="joke-text">{joke.joke}</p>;
    }
  };

  const getJokeCategory = () => {
    if (!joke) return 'N/A';
    const categories = joke.category ? joke.category.split(',') : ['Unknown'];
    return categories[0];
  };

  return (
    <Card className="joke-card shadow-lg">
      <Card.Body className="p-5">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" className="mb-3">
              <span className="visually-hidden">Laden...</span>
            </Spinner>
            <p>Witz wird geladen...</p>
          </div>
        ) : joke ? (
          <>
            <div className="mb-4">
              <span className="badge bg-primary me-2">{getJokeCategory()}</span>
              <span className="badge bg-secondary">{joke.type}</span>
            </div>

            <div className="joke-content mb-4">
              {renderJoke()}
            </div>

            <Row className="g-2">
              <Col xs={6}>
                <Button 
                  variant="success" 
                  size="lg"
                  className="w-100"
                  onClick={onGenerateNew}
                >
                  🔄 Neuer Witz
                </Button>
              </Col>
              <Col xs={6}>
                <Button 
                  variant={isFavorite ? "warning" : "outline-warning"}
                  size="lg"
                  className="w-100"
                  onClick={onAddFavorite}
                  disabled={isFavorite}
                >
                  {isFavorite ? "⭐ Favorit" : "☆ Favorit"}
                </Button>
              </Col>
            </Row>

            <div className="share-section mt-4">
              <Button 
                variant="info" 
                size="sm"
                onClick={() => {
                  const text = joke.type === 'twopart' 
                    ? `${joke.setup} - ${joke.delivery}`
                    : joke.joke;
                  navigator.clipboard.writeText(text);
                  alert('Witz kopiert!');
                }}
              >
                📋 Kopieren
              </Button>
              <Button 
                variant="info" 
                size="sm"
                className="ms-2"
                onClick={() => {
                  const text = joke.type === 'twopart' 
                    ? `${joke.setup} - ${joke.delivery}`
                    : joke.joke;
                  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' 😂')}`;
                  window.open(url, '_blank');
                }}
              >
                🐦 Teilen
              </Button>
            </div>
          </>
        ) : (
          <p className="text-center text-muted">Kein Witz geladen</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default JokeCard;
