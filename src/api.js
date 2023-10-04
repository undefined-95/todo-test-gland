const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getItems = async (page, limit = 10) => {
  const response = await fetch(
    `${BASE_URL}/albums/1/photos?_page=${page}&_limit=${limit}`
  );
  const data = await response.json();
  return data;
};
