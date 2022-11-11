import { menuArr } from "./data.js";

export const orderedItems = [];
export const orderedPrices = [];

export const handleAddClick = (itemId) => {
  const targetItemObj = menuArr.filter((item) => item.id === Number(itemId))[0];
  orderedItems.push(targetItemObj.name);
  orderedPrices.push(targetItemObj.price);
  console.log(orderedItems);
  console.log(orderedPrices);
};
