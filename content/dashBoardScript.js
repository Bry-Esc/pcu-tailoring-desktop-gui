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
    '<div class="log-content-items left-part">' +
    "              <img" +
    '                class="default-profile-img"' +
    '                src="../images/defaultProfilePic.png"' +
    '                alt=""' +
    "              />" +
    "            </div>" +
    '            <div class="log-content-items right-part">' +
    '              <div class="upper-part">' +
    "                <p>Name:</p>" +
    "                <p>Course:</p>" +
    "                <p>Year:</p>" +
    "              </div>" +
    '              <div class="lower-part">' +
    "                <p>PCU Email:</p>" +
    "              </div>" +
    "            </div>";

  const logBtn = document.querySelectorAll(".nav-button").item(0);
  logBtn.style.cssText = "background-color: rgba(157, 157, 157, 0.79);";
}
function ordersClicked() {
  clearContent();
  buttonReset();

  const logBtn = document.querySelectorAll(".nav-button").item(1);
  logBtn.style.cssText = "background-color: rgba(157, 157, 157, 0.79);";
}
function inventoryClicked() {
  clearContent();
  buttonReset();

  const logBtn = document.querySelectorAll(".nav-button").item(2);
  logBtn.style.cssText = "background-color: rgba(157, 157, 157, 0.79);";
}
function archiveClicked() {
  clearContent();
  buttonReset();

  const logBtn = document.querySelectorAll(".nav-button").item(3);
  logBtn.style.cssText = "background-color: rgba(157, 157, 157, 0.79);";
}
