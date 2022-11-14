import { menuArr } from "./scripts/data.js";

let orderArr = [];
const orderSubmit = document.getElementById("order-details");
const paymentModal = document.getElementById("payment-modal");

const renderPaymentModal = (e) => {
  e.preventDefault();
  paymentModal.classList.remove("hidden");
  paymentModal.innerHTML = getPaymentHtml();
};

// site event listeners

document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    handleAddClick(e.target.dataset.id);
  }
  if (e.target.dataset.remove) {
    handleDeleteClick(e.target.dataset.remove);
  }
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add);
  }
});

orderSubmit.addEventListener("submit", renderPaymentModal);

// site functions
const handleAddClick = (itemId) => {
  // find obj in arr matching id, use == as it changes from a number
  const targetItemObj = menuArr.filter((item) => item.id == itemId)[0];
  // add to bill if not already there
  if (!orderArr.includes(targetItemObj)) {
    orderArr.push(targetItemObj);
  }
  // increment numberOrdered
  targetItemObj.numberOrdered++;
  renderOrderDetails();
};

const handleDeleteClick = (itemId) => {
  const targetItemObj = orderArr.filter((item) => item.id == itemId)[0];
  // if multiples decrement or else remove from orderArr by finding index to splice
  if (targetItemObj.numberOrdered == 1 || targetItemObj.numberOrdered == 0) {
    const indexOfItemToBeRemoved = orderArr.indexOf(targetItemObj);
    orderArr.splice(indexOfItemToBeRemoved, 1);
  }
  targetItemObj.numberOrdered--;
  renderOrderDetails();
};

// generate dynamic content
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
            <i class="fa-solid fa-plus add-btn" title="Add another!" aria-label="Add another!" data-add="${
              item.id
            }"></i>
            <i class="fa-sharp fa-solid fa-delete-left delete-btn" title="Remove" aria-label="Remove item" data-remove="${
              item.id
            }"></i>
          </div>
          <p>$${item.price * item.numberOrdered}</p>
        </li>
        </div>
      </ul>
    </div>
  `;
  });
  // Calculate totalPrice
  orderArr.map((item) => {
    totalPrice += Number(`${item.numberOrdered}`) * Number(`${item.price}`);
  });
  orderDetailsHtml += `
    <p class ="total">Total  <span class="total-price">$${totalPrice}</span></p>
    <button class="order-btn" title="Order your yummy treats!" aria-label="Place order">Place Order</button>
  `;
  return orderDetailsHtml;
};

const getPaymentHtml = () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (mediaQuery.matches) {
    let paymentHtml = `
    <div class="payment-modal-display">
      <h3>Pay via WeChat</h3>
      <p class="instructions">Open your app and scan the QR Code to process your payment.</p>
      <img src="images/QRcode.png" alt="QR Code" class="QRcode">
    </div>
    `;
    return paymentHtml;
  } else {
    let paymentHtml = `
    <div class="payment-modal-display">
      <h3>Pay via WeChat</h3>
      <p class="instructions">Please enter your password.</p>
      <img src="images/wechat-app-icon.png" alt="QR Code" class="pay-icon">
      <div class="password">
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
        <input inputmode="numeric" name="password" id="password-input" min="0" max="9" required>
      </div>
    </div>
  `;
    return paymentHtml;
  }
};

// render to page
const renderMenu = () => {
  document.getElementById("menu").innerHTML = getMenuHtml();
};

const renderOrderDetails = () => {
  // display if orderArr has items in it, else remove from display
  if (orderArr.length >= 1) {
    document.getElementById("order-details").innerHTML = getOrderHtml();
  } else if (orderArr.length == 0) {
    document.getElementById("order-details").innerHTML = "";
  }
};

renderMenu();
