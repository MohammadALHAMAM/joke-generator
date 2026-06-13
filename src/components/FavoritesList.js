import React from 'react';
import { Card, ListGroup, Button, Row, Col, Alert } from 'react-bootstrap';
import './FavoritesList.css';

function FavoritesList({ favorites, onRemoveFavorite }) {
  if (favorites.length === 0) {
    return (
      <Alert variant="info" className="text-center mt-4">
        <p>😢 Noch keine Favoriten. Füge einen Witz hinzu!</p>
      </Alert>
    );
  }

  const renderJoke = (joke) => {
    if (joke.type === 'twopart') {
      return `${joke.setup} - ${joke.delivery}`;
    } else {
      return joke.joke;
    }
  };

  return (
    <Card className="favorites-card shadow-lg">
      <Card.Header className="bg-warning text-dark">
        <h5 className="mb-0">⭐ Meine Favoriten ({favorites.length})</h5>
      </Card.Header>
      <ListGroup variant="flush">
        {favorites.map((favorite) => (
          <ListGroup.Item key={favorite.id} className="p-3">
            <Row className="align-items-center">
              <Col xs={10}>
                <p className="mb-1 joke-text-small">{renderJoke(favorite)}</p>
                <small className="text-muted">
                  <span className="badge bg-secondary me-2">{favorite.category}</span>
                  <span className="badge bg-info">{favorite.type}</span>
                </small>
              </Col>
              <Col xs={2} className="text-end">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onRemoveFavorite(favorite.id)}
                >
                  🗑️
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default FavoritesList;
