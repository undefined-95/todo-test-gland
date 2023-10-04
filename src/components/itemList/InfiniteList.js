import React, { useState, useEffect } from 'react';

const InfiniteList = ({ loadMoreItems, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreItems]);

  return <>{children}</>;
};

export default InfiniteList;
