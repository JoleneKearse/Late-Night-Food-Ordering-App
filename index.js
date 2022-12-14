import { menuArr } from "./scripts/data.js";

let orderArr = [];
const orderSubmit = document.getElementById("order-details");
const paymentModal = document.getElementById("payment-modal");
let paymentHtml = "";
const mobilePaymentModal = document.getElementById("mobile-payment-modal");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

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
// one.addEventListener("keyup", moveFocus(one, two));

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

// generate a random numbers for setTimeouts
function firstRandomDelay() {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

function secondRandomDelay() {
  return Math.floor(Math.random() * (6750 - 3750 + 1)) + 3750;
}

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
        <i class="fa-solid fa-plus add-btn" data-id="${element.id}" title="Add to cart" tabindex="0" role="button" aria-label="Add to cart"></i>
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
            <i class="fa-solid fa-plus add-btn" tabindex="0" title="Add another!" role="button" aria-label="Add another!" data-add="${
              item.id
            }"></i>
            <i class="fa-sharp fa-solid fa-delete-left delete-btn" tabindex="0" role="button" title="Remove" aria-label="Remove item" data-remove="${
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
    <button class="order-btn" tabindex="0" role="button" title="Order your yummy treats!" aria-label="Place order">Place Order</button>
  `;
  return orderDetailsHtml;
};

const getPaymentHtml = () => {
  paymentHtml = `
  <div class="payment-modal-display">
    <h3>Pay via WeChat</h3>
    <p id="instructions">Open your app and scan the QR Code to process your payment.</p>
    <img src="images/QRcode.png" alt="QR Code" class="QRcode" id="pay-img">
  </div>
  `;
  return paymentHtml;
};

function simulatePayment() {
  setTimeout(function () {
    document.querySelector(".payment-modal-display").innerHTML = `
        <h3>Processing payment...</h3>
        <img src="images/spinning-circles.svg" alt="" class="spinner">
      `;
  }, firstRandomDelay());
  setTimeout(function () {
    document.querySelector(".payment-modal-display").innerHTML = `
        <h3>Thank you for your order!</h3>
        <p>Expect your snacks in 15-30 minutes!</p>
        <img src="https://img.icons8.com/stickers/100/null/delivery-scooter.png" class="final-img" alt="scooter delivery"/>
      `;
  }, secondRandomDelay());
}

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

// can't use an arrow function here, as needs to be hoisted
function renderPaymentModal(e) {
  e.preventDefault();
  paymentModal.classList.remove("hidden");
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  if (mediaQuery.matches) {
    mobilePaymentModal.classList.remove("hidden");
    // move focus to next input box on keyup
    one.addEventListener("keyup", function () {
      two.focus();
    });
    two.addEventListener("keyup", function () {
      three.focus();
    });
    three.addEventListener("keyup", function () {
      four.focus();
    });
    four.addEventListener("keyup", function () {
      five.focus();
    });
    five.addEventListener("keyup", function () {
      six.focus();
    });
    six.addEventListener("keyup", simulatePayment);
  } else {
    paymentModal.innerHTML = getPaymentHtml();
    simulatePayment();
  }
}

renderMenu();
