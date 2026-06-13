import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './CategorySelector.css';

function CategorySelector({ selectedCategory, onCategoryChange, onGenerateNew }) {
  const categories = ['Any', 'General', 'Programming', 'Knock-knock', 'Misc', 'Dark', 'Pun'];

  return (
    <div className="category-selector">
      <div className="mb-3">
        <label className="form-label text-white fw-bold mb-3">📂 Wähle eine Kategorie:</label>
        <div className="category-buttons">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "primary" : "outline-light"}
              size="sm"
              onClick={() => onCategoryChange(cat)}
              className="me-2 mb-2"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button 
          variant="success" 
          size="lg"
          onClick={onGenerateNew}
          className="mt-3"
        >
          🎲 Neuer Witz aus {selectedCategory}
        </Button>
      </div>
    </div>
  );
}

export default CategorySelector;
