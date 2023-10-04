import React, { useState, useEffect } from 'react';
import ItemCard from '../itemCard/ItemCard';
import { getItems } from '../../api';
import './ItemList.scss';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoriteContext';
import InfiniteList from './InfiniteList';

const ItemList = () => {
  const { favorites, addToFavorites } = useFavorites();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const loadMoreItems = async () => {
    const newItems = await getItems(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <>
      <Link to="/">
        <button>Назад</button>
      </Link>
      <div className="item-list">
        <InfiniteList loadMoreItems={loadMoreItems}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.url}
              addToFavorites={addToFavorites}
              isFavorite={favorites.some((fav) => fav.id === item.id)}
            />
          ))}
        </InfiniteList>
      </div>
    </>
  );
};

export default ItemList;
