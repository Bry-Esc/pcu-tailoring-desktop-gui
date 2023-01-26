function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}

function buttonReset() {
  const selectButton = document.querySelectorAll(".nav-button");

  selectButton.forEach((n) => {
    n.style.cssText = "background-color: rgba(255, 255, 255, 0.79);";
  });
}

const newButtonColor = "background-color: rgba(157, 157, 157, 0.79);";

function clearContent() {
  const studentLogs = document.querySelector(".log-content");
  const orders = document.querySelector(".orders-content");
  const inventory = document.querySelector(".inventory-content");
  const archive = document.querySelector(".archive-content");

  studentLogs.innerHTML = "";
  orders.innerHTML = "";
  inventory.innerHTML = "";
  archive.innerHTML = "";
}

function logClicked() {
  clearContent();
  buttonReset();

  const studentLogs = document.querySelector(".log-content");
  studentLogs.innerHTML =
    '<article class="log-content">' +
    '    <div class="user">' +
    '      <div class="log-content-items left-part">' +
    "        <img" +
    '          class="default-profile-img"' +
    '          src="../images/defaultProfilePic.png"' +
    '          alt="defaultProfilePic"' +
    "        />" +
    "      </div>" +
    '      <div class="log-content-items right-part">' +
    '        <div class="upper-part">' +
    "          <p>Name: John Wick</p>" +
    "          <p>Course: BSCS</p>" +
    "          <p>Year: 3</p>" +
    "        </div>" +
    '        <div class="lower-part">' +
    "          <p>PCU Email: johnWick@pcu.edu.ph</p>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    '    <div class="user">' +
    '      <div class="log-content-items left-part">' +
    "        <img" +
    '          class="default-profile-img"' +
    '          src="../images/defaultProfilePic.png"' +
    '          alt="defaultProfilePic"' +
    "        />" +
    "      </div>" +
    '      <div class="log-content-items right-part">' +
    '        <div class="upper-part">' +
    "          <p>Name: Kevin Stat</p>" +
    "          <p>Course: BSIT</p>" +
    "          <p>Year: 1</p>" +
    "        </div>" +
    '        <div class="lower-part">' +
    "          <p>PCU Email: kevinStat@pcu.edu.ph</p>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    '    <div class="user">' +
    '      <div class="log-content-items left-part">' +
    "        <img" +
    '          class="default-profile-img"' +
    '          src="../images/defaultProfilePic.png"' +
    '          alt="defaultProfilePic"' +
    "        />" +
    "      </div>" +
    '      <div class="log-content-items right-part">' +
    '        <div class="upper-part">' +
    "          <p>Name: Tracey Rose</p>" +
    "          <p>Course: BSN</p>" +
    "          <p>Year: 2</p>" +
    "        </div>" +
    '        <div class="lower-part">' +
    "          <p>PCU Email: traceyRose@pcu.edu.ph</p>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    "</article>";

  const logBtn = document.querySelectorAll(".nav-button").item(0);
  logBtn.style.cssText = newButtonColor;
}

function ordersClicked() {
  clearContent();
  buttonReset();

  const orders = document.querySelector(".orders-content");
  orders.innerHTML =
    "<table>" +
    "  <tr>" +
    "    <th>Order Date</th>" +
    "    <th>Order Details</th>" +
    "    <th>Shipping</th>" +
    "    <th>Status</th>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>" +
    '      <div class="order-container">' +
    '        <p class="order-date">March 2, 2022</p>' +
    '        <p class="order-time">2:53:39 PM PST</p>' +
    "      </div>" +
    "    </td>" +
    '    <td class="order-details-container">' +
    '      <div class="product-name">T-Shirt</div>' +
    '      <div class="quantity">QTY: 4</div>' +
    '      <div class="contact-buyer">Contact Buyer: John</div>' +
    "    </td>" +
    "    <td>" +
    '      <div class="order-shipping-container">' +
    '        <div class="type-of-shipping"></div>' +
    '        <p class="placeholder">Expected Ship Date</p>' +
    '        <div class="expected-ship-date">Mar X, 2022</div>' +
    '        <p class="placeholder">Deliver by:</p>' +
    '        <div class="deliver-by">Mar 19, 2022</div>' +
    "      </div>" +
    "    </td>" +
    '    <td><p class="status">Shipped</p></td>' +
    "  </tr>" +
    "  <tr>" +
    "    <td>" +
    '      <div class="order-container">' +
    '        <p class="order-date">March 3, 2022</p>' +
    '        <p class="order-time">4:03:12 PM PST</p>' +
    "      </div>" +
    "    </td>" +
    '    <td class="order-details-container">' +
    '      <div class="product-name">Uniform-F</div>' +
    '      <div class="quantity">QTY: 4</div>' +
    '      <div class="contact-buyer">Contact Buyer: Kevin</div>' +
    "    </td>" +
    "    <td>" +
    '      <div class="order-shipping-container">' +
    '        <div class="type-of-shipping"></div>' +
    '        <p class="placeholder">Expected Ship Date</p>' +
    '        <div class="expected-ship-date">Mar X, 2022</div>' +
    '        <p class="placeholder">Deliver by:</p>' +
    '        <div class="deliver-by">Mar 20, 2022</div>' +
    "      </div>" +
    "    </td>" +
    '    <td><p class="status">Shipped</p></td>' +
    "  </tr>" +
    "  <tr>" +
    "    <td>" +
    '      <div class="order-container">' +
    '        <p class="order-date">March 4, 2022</p>' +
    '        <p class="order-time">9:53:39 AM PST</p>' +
    "      </div>" +
    "    </td>" +
    '    <td class="order-details-container">' +
    '      <div class="product-name">Skirt</div>' +
    '      <div class="quantity">QTY: 1</div>' +
    '      <div class="contact-buyer">Contact Buyer: Tracey</div>' +
    "    </td>" +
    "    <td>" +
    '      <div class="order-shipping-container">' +
    '        <div class="type-of-shipping"></div>' +
    '        <p class="placeholder">Expected Ship Date</p>' +
    '        <div class="expected-ship-date">Mar X, 2022</div>' +
    '        <p class="placeholder">Deliver by:</p>' +
    '        <div class="deliver-by">Mar 21, 2022</div>' +
    "      </div>" +
    "    </td>" +
    '    <td><p class="status">Shipped</p></td>' +
    "  </tr>" +
    "  <tr>" +
    "    <td>" +
    '      <div class="order-container">' +
    '        <p class="order-date">March 5, 2022</p>' +
    '        <p class="order-time">12:23:29 PM PST</p>' +
    "      </div>" +
    "    </td>" +
    '    <td class="order-details-container">' +
    '      <div class="product-name">T-Shirt</div>' +
    '      <div class="quantity">QTY: 4</div>' +
    '      <div class="contact-buyer">Contact Buyer: John</div>' +
    "    </td>" +
    "    <td>" +
    '      <div class="order-shipping-container">' +
    '        <div class="type-of-shipping"></div>' +
    '        <p class="placeholder">Expected Ship Date</p>' +
    '        <div class="expected-ship-date">Mar X, 2022</div>' +
    '        <p class="placeholder">Deliver by:</p>' +
    '        <div class="deliver-by">Mar 22, 2022</div>' +
    "      </div>" +
    "    </td>" +
    '    <td><p class="status">Shipped</p></td>' +
    "  </tr>" +
    "</table>" +
    "";

  const logBtn = document.querySelectorAll(".nav-button").item(1);
  logBtn.style.cssText = newButtonColor;
}

function inventoryClicked() {
  clearContent();
  buttonReset();

  const inventory = document.querySelector(".inventory-content");
  inventory.innerHTML =
    "<table>" +
    "  <tr>" +
    "    <th>Product Number</th>" +
    "    <th>Product Title</th>" +
    "    <th>Price</th>" +
    "    <th>Units</th>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>00001</td>" +
    "    <td>" +
    '      <div class="product-img">' +
    '        <img src="../images/t-shirt-1.png" alt="t-shirt-1" />' +
    "        <p>T-Shirt</p>" +
    "      </div>" +
    "    </td>" +
    "    <td>₱300</td>" +
    "    <td>10</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>00002</td>" +
    "    <td>" +
    '      <div class="product-img">' +
    '        <img src="../images/pants-1.png" alt="pants-1" />' +
    "        <p>Pants</p>" +
    "      </div>" +
    "    </td>" +
    "    <td>₱400</td>" +
    "    <td>10</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>00003</td>" +
    "    <td>" +
    '      <div class="product-img">' +
    '        <img src="../images/uniform-f-1.png" alt="uniform-f-1" />' +
    "        <p>Uniform</p>" +
    "      </div>" +
    "    </td>" +
    "    <td>₱300</td>" +
    "    <td>10</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>00004</td>" +
    "    <td>" +
    '      <div class="product-img">' +
    '        <img src="../images/skirt-1.png" alt="skirt-1" />' +
    "        <p>Skirt</p>" +
    "      </div>" +
    "    </td>" +
    "    <td>₱400</td>" +
    "    <td>10</td>" +
    "  </tr>" +
    "</table>";

  const logBtn = document.querySelectorAll(".nav-button").item(2);
  logBtn.style.cssText = newButtonColor;
}

function archiveClicked() {
  clearContent();
  buttonReset();

  const logBtn = document.querySelectorAll(".nav-button").item(3);
  logBtn.style.cssText = newButtonColor;
}
