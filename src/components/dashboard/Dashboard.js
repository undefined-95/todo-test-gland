import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoriteContext';
import ItemCard from '../itemCard/ItemCard';

const Dashboard = () => {
  const { favorites, addToFavorites } = useFavorites();

  return (
    <div className="dashboard">
      <h1>Избранные</h1>
      {favorites.length ? (
        <>
          {favorites.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              addToFavorites={addToFavorites}
              isFavorite={favorites.some((fav) => fav.id === item.id)}
            />
          ))}
        </>
      ) : (
        <p>У вас нет избранных</p>
      )}
      <Link to="/list">
        <button>Перейти к списку</button>
      </Link>
    </div>
  );
};

export default Dashboard;
