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
        <i class="fa-solid fa-plus add-btn" data-id="${element.id}" title="Add to cart" aria-label="Add to cart"></i>
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
        <div class="order-line">
          <div class="order-item-dets">
            <p>${item.name}</p>
            <i class="fa-solid fa-plus add-btn" title="Add another!" aria-label="Add another!"></i>
            <i class="fa-sharp fa-solid fa-delete-left delete-btn" title="Remove" aria-label="Remove item"></i>
          </div>
          <p>$${item.price}</p>
        </li>
        </div>
      </ul>
    </div>
  `;
  });
  orderArr.forEach((item) => {
    totalPrice += Number(`${item.price}`);
  });
  orderDetailsHtml += `
    <p class ="total">Total  <span class="total-price">$${totalPrice}</span></p>
    <button class="order-btn">Place Order</button>
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
