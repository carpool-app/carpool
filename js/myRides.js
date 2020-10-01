'use strict';

let requestsSectionEl = document.getElementById('myRequests');
let offersSectionEl = document.getElementById('myOffers');
let tableElRequests = document.createElement('table');
let tableElOffers = document.createElement('table');
let h2ElR = document.createElement('h2');
requestsSectionEl.appendChild(h2ElR);
let h2ElO = document.createElement('h2');
offersSectionEl.appendChild(h2ElO);
requestsSectionEl.appendChild(tableElRequests);
offersSectionEl.appendChild(tableElOffers);
let myRequestsLocalStorage = '';
let myOffersLocalStorage = '';
let myRequestsHeader = ['Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Preferred Driver'];
let myOffersHeader = ['Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost', 'Phone', 'Email'];
let toRemove = '';

function render() {
  getFromLocalStorage();
  renderMyRequests();
  renderMyOffers();
}

function getFromLocalStorage() {
  myRequestsLocalStorage = JSON.parse(localStorage.getItem('RideRequests')) || [];
  myOffersLocalStorage = JSON.parse(localStorage.getItem('RideOffers')) || [];
}

function saveToLocalStorage(name, array) {
  localStorage.setItem(`${name}`, JSON.stringify(array));
}

function renderMyRequests() {
  if (myRequestsLocalStorage.length) {
    h2ElR.textContent = 'My Requests';
    h2ElR.id = 'requestsH';
    let thElRemove = document.createElement('th');
    tableElRequests.appendChild(thElRemove);
    for (let i = 0; i < myRequestsHeader.length; i++) {
      let thEl = document.createElement('th');
      tableElRequests.appendChild(thEl);
      thEl.textContent = myRequestsHeader[i];
    }
    for (let i = 0; i < myRequestsLocalStorage.length; i++) {
      let trEl = document.createElement('tr');
      tableElRequests.appendChild(trEl);
      let tdElRemove = document.createElement('td');
      trEl.appendChild(tdElRemove);
      let imgElRemove = document.createElement('img');
      tdElRemove.appendChild(imgElRemove);
      imgElRemove.src = 'img/trash.jpg';
      imgElRemove.id = i;
      toRemove = myRequestsLocalStorage[i];
      imgElRemove.addEventListener('click', removeRequest);
      imgElRemove.className = 'trash';
      let tdElName = document.createElement('td');
      trEl.appendChild(tdElName);
      tdElName.textContent = myRequestsLocalStorage[i].name;
      let tdElFrom = document.createElement('td');
      trEl.appendChild(tdElFrom);
      tdElFrom.textContent = myRequestsLocalStorage[i].from;
      let tdElTo = document.createElement('td');
      trEl.appendChild(tdElTo);
      tdElTo.textContent = myRequestsLocalStorage[i].to;
      let tdElDay = document.createElement('td');
      trEl.appendChild(tdElDay);
      tdElDay.textContent = myRequestsLocalStorage[i].day;
      let tdElTime = document.createElement('td');
      trEl.appendChild(tdElTime);
      tdElTime.textContent = myRequestsLocalStorage[i].time;
      let tdElPayment = document.createElement('td');
      trEl.appendChild(tdElPayment);
      tdElPayment.textContent = myRequestsLocalStorage[i].payment;
      let tdElGender = document.createElement('td');
      trEl.appendChild(tdElGender);
      tdElGender.textContent = myRequestsLocalStorage[i].driverGender;
    }
  }
  else {
    requestsSectionEl.id = 'noRequests';
    requestsSectionEl.textContent = 'No Ride Requests to Show! ';
    let aElFind = document.createElement('a');
    requestsSectionEl.appendChild(aElFind);
    aElFind.innerHTML = `<br> Find a Ride`;
    aElFind.href = 'find.html';
  }
}

function renderMyOffers() {
  if (myOffersLocalStorage.length) {
    h2ElO.textContent = 'My Offers';
    h2ElO.id = 'offersH';
    let thElRemove = document.createElement('th');
    tableElOffers.appendChild(thElRemove);
    for (let i = 0; i < myOffersHeader.length; i++) {
      let thEl = document.createElement('th');
      tableElOffers.appendChild(thEl);
      thEl.textContent = myOffersHeader[i];
    }
    for (let i = 0; i < myOffersLocalStorage.length; i++) {
      let trEl = document.createElement('tr');
      tableElOffers.appendChild(trEl);
      let tdElRemove = document.createElement('td');
      trEl.appendChild(tdElRemove);
      let imgElRemove = document.createElement('img');
      tdElRemove.appendChild(imgElRemove);
      imgElRemove.src = 'img/trash.jpg';
      imgElRemove.id = i;
      toRemove = myOffersLocalStorage[i];
      imgElRemove.addEventListener('click', removeOffer);
      imgElRemove.className = 'trash';
      let tdElName = document.createElement('td');
      trEl.appendChild(tdElName);
      tdElName.textContent = myOffersLocalStorage[i].name;
      let tdElFrom = document.createElement('td');
      trEl.appendChild(tdElFrom);
      tdElFrom.textContent = myOffersLocalStorage[i].from;
      let tdElTo = document.createElement('td');
      trEl.appendChild(tdElTo);
      tdElTo.textContent = myOffersLocalStorage[i].to;
      let tdElDay = document.createElement('td');
      trEl.appendChild(tdElDay);
      tdElDay.textContent = myOffersLocalStorage[i].day;
      let tdElTime = document.createElement('td');
      trEl.appendChild(tdElTime);
      tdElTime.textContent = myOffersLocalStorage[i].time;
      let tdElPayment = document.createElement('td');
      trEl.appendChild(tdElPayment);
      tdElPayment.textContent = myOffersLocalStorage[i].payment;
      let tdElCost = document.createElement('td');
      trEl.appendChild(tdElCost);
      tdElCost.textContent = myOffersLocalStorage[i].cost;
      let tdElPhone = document.createElement('td');
      trEl.appendChild(tdElPhone);
      tdElPhone.textContent = myOffersLocalStorage[i].phone;
      let tdElEmail = document.createElement('td');
      trEl.appendChild(tdElEmail);
      tdElEmail.textContent = myOffersLocalStorage[i].email;
    }
  }
  else {
    offersSectionEl.id = 'noOffers';
    offersSectionEl.textContent = 'No Ride Offers to Show! ';
    let aElOffer = document.createElement('a');
    offersSectionEl.appendChild(aElOffer);
    aElOffer.innerHTML = `<br>Offer a Ride`;
    aElOffer.href = 'offer.html';
  }
}

function removeRequest(event) {
  const index = myRequestsLocalStorage.indexOf(toRemove);
  myRequestsLocalStorage.splice(event.target.id, 1);
  saveToLocalStorage('RideRequests', myRequestsLocalStorage);
  clearTable(tableElRequests);
  renderMyRequests();
}

function removeOffer(event) {
  const index = myOffersLocalStorage.indexOf(toRemove);
  myOffersLocalStorage.splice(event.target.id, 1);
  saveToLocalStorage('RideOffers', myOffersLocalStorage);
  clearTable(tableElOffers);
  renderMyOffers();
}

function clearTable(table) {
  table.textContent = '';
}
render();
