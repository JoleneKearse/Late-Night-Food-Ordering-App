import { menuArr } from "./data.js";

export const handleAddClick = (itemId) => {
  const targetItemObj = menuArr.filter((item) => item.id === Number(itemId))[0];
  console.log(targetItemObj);
};
