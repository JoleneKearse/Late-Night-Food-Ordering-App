import { menuArr } from "./scripts/data.js";

const orderArr = [];

// site event listeners
document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    handleAddClick(e.target.dataset.id);
  }
});

// site functions
const handleAddClick = (itemId) => {
  // find obj in arr matching id
  const targetItemObj = menuArr.filter((item) => item.id === Number(itemId))[0];
  orderArr.push(targetItemObj);
  renderOrderDetails();
};

// generate content for menu section
const getMenuHtml = () => {
  let menuHtml = "";
  menuArr.forEach((element) => {
    menuHtml += `
    <div class="menu-item">
      <img src="${element.img}" alt="${element.name}" class="menu-img">
      <div class="menu-item-description">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
      </div>
      <div class="menu-item-controls">
        <i class="fa-solid fa-plus add-btn" data-id="${element.id}" title="Add to cart"></i>
        <p class="price">$${element.price}</p>
      </div>
    </div>
    `;
  });
  return menuHtml;
};

const getOrderHtml = () => {
  // build the html
  let orderDetailsHtml = `
    <h2>Your Order</h2>
  `;
  let totalPrice = 0;
  orderArr.forEach((item) => {
    orderDetailsHtml += `
    <div class="order-items">
      <ul>
        <li>
          <p>${item.name}</p>
          <p>${item.price}</p>
        </li>
      </ul>
    </div>
  `;
  });
  orderArr.forEach((item) => {
    totalPrice += Number(`${item.price}`);
  });
  orderDetailsHtml += `
    <hr>
    <p>Total<span class="total-price">$${totalPrice}</span></p>
  `;
  return orderDetailsHtml;
};

// render to page
const renderMenu = () => {
  document.getElementById("menu").innerHTML = getMenuHtml();
};

const renderOrderDetails = () => {
  document.getElementById("order-details").innerHTML = getOrderHtml();
};

renderMenu();
