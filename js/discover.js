'use strict';

let sectionEl = document.getElementById('discoverSection');
let existingOfferLocalStorage = '';
const OffersInfo = ['Image', 'Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost', 'Phone', 'Email', 'Starting Point', 'Ending Point'];


function render() {
  getFromLocalStorage();
  showDiscover();
}

function getFromLocalStorage() {
  existingOfferLocalStorage = setDefaultImg(JSON.parse(localStorage.getItem('RideOffers')) || []);
}

function showDiscover() {
  renderOfferRows(existingOfferLocalStorage);
  renderOfferRows(RideOffer.all);
}

function renderOfferRows(offers) {
  for (let i = 0; i < offers.length; i++) {
    let tableEl = document.createElement('table');
    sectionEl.appendChild(tableEl);
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdElImg = document.createElement('img');
    trEl.appendChild(tdElImg);
    tdElImg.src = offers[i].path;
    let tdElInfo = document.createElement('td');
    trEl.appendChild(tdElInfo);
    tdElInfo.textContent = `${offers[i].name} is going from ${offers[i].from} to ${offers[i].to} on ${offers[i].day} at ${offers[i].time}.
    The ride with ${offers[i].name} costs ${offers[i].cost} and the accepted payment method is ${offers[i].payment} payment. Call at ${offers[i].phone} or contact ${offers[i].email}  `;
    let tdElFromMap = document.createElement('td');
    trEl.appendChild(tdElFromMap);
    tdElFromMap.innerHTML = offers[i].fromLocation;
    let tdElToMap = document.createElement('td');
    trEl.appendChild(tdElToMap);
    tdElToMap.innerHTML = offers[i].toLocation;
  }
}

function setDefaultImg(offers) {
  for (let i = 0; i < offers.length; i++) {
    offers[i].path = 'img/default.jpg';
  }
  return (offers);
}

render();
