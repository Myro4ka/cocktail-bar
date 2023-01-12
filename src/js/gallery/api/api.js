export const fetchProductsRandom = async link => {
  const data = await fetch(link);
  const newData = await data.json();
  return newData;
};
