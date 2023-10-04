import React, { useState } from 'react';
import './ItemCard.scss';

const ItemCard = ({ id, title, imageUrl, addToFavorites, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToFavorite = () => {
    addToFavorites({ id, title, imageUrl });
  };

  return (
    <div
      className={`item-card ${isHovered ? 'hovered' : ''} ${
        isFavorite ? 'favorite' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} />
      <div className="item-info">
        <div className="item-title">{title}</div>
        <div className="item-id">ID: {id}</div>
      </div>
      <button onClick={handleAddToFavorite}>
        {isFavorite ? 'Удалить из избранных' : 'Добавить в избранные'}
      </button>
    </div>
  );
};

export default ItemCard;
