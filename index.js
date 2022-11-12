import { menuArr } from "./scripts/data.js";

const orderArr = [];

// site event listeners
document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    handleAddClick(e.target.dataset.id);
  }
  if (e.target.dataset.remove) {
    handleDeleteClick(e.target.dataset.remove);
  }
});

// site functions
const handleAddClick = (itemId) => {
  // find obj in arr matching id
  const targetItemObj = menuArr.filter((item) => item.id === Number(itemId))[0];
  // increment numberOrdered property
  targetItemObj.numberOrdered++;
  orderArr.push(targetItemObj);
  renderOrderDetails();
};

const handleDeleteClick = (itemId) => {
  const targetOrderObj = orderArr.filter(
    (item) => item.id === Number(itemId)
  )[0];
  // decrement numberOrdered property
  targetOrderObj.numberOrdered--;
  // remove from orderArr
  // find the index to use splice
  const indexOfItemToBeRemoved = orderArr.indexOf(targetOrderObj);
  const updatedOrderArr = orderArr.splice(indexOfItemToBeRemoved, 1);
  renderOrderDetails();
  // TODO: Shows the correct item is being removed, need to update the orderDetailsHtml and totalPrice
  // orderArr.
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
            <p class="number-ordered">x ${item.numberOrdered}</p>
            <i class="fa-solid fa-plus add-btn" title="Add another!" aria-label="Add another!" data-addMore="${item.id}"></i>
            <i class="fa-sharp fa-solid fa-delete-left delete-btn" title="Remove" aria-label="Remove item" data-remove="${item.id}"></i>
          </div>
          <p>$${item.price}</p>
        </li>
        </div>
      </ul>
    </div>
  `;
  });
  orderArr.map((item) => {
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
