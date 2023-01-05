import axios from 'axios';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';


export const fetchProductsRandom = async link => {
  const data = await fetch(link);
  const newData = await data.json();
  return newData;
};