import { menuArr } from "./scripts/data.js";

console.log(menuArr);
// render content to menu section
const getMenuHtml = () => {
  let menuHtml = "";
  menuArr.forEach((element) => {
    menuHtml += `
    <div class="menu-item">
      <img src="${element.img}" alt="dumplings">
      <div class="menu-item-description">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
      </div>
      <div class="menu-item-controls">
        <i class="fa-solid fa-plus"></i>
        <p class="price">${element.price}</p>
      </div>
    </div>
    `;
  });
  return menuHtml;
};

const renderMenu = () => {
  document.getElementById("menu").innerHTML = getMenuHtml();
};

renderMenu();
