import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newItem) => {
    setFavorites((prevFavorites) => {
      const { id } = newItem;

      const isAlreadyInFavorites = prevFavorites.some((fav) => fav.id === id);

      return isAlreadyInFavorites
        ? prevFavorites.filter((fav) => fav.id !== id)
        : [...prevFavorites, newItem];
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
};
