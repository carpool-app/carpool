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
    let legendEl =document.createElement('legend');
    tableEl.appendChild(legendEl);
    legendEl.innerHTML = `<h2>${offers[i].name}</h2>`;
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdElImg = document.createElement('img');
    trEl.appendChild(tdElImg);
    tdElImg.src = offers[i].path;
    tdElImg.className = 'driverImage';
    let overlayEL = document.createElement('div');
    trEl.appendChild(overlayEL);
    overlayEL.className = 'overlay';
    let overlayName = document.createElement('div');
    overlayEL.appendChild(overlayName);
    overlayName.className = 'overlayName';
    let tdElInfo = document.createElement('td');
    trEl.appendChild(tdElInfo);
    tdElInfo.className = 'info';
    tdElInfo.innerHTML = `<b>${offers[i].name}</b> is going from <b>${offers[i].from}</b> to <b>${offers[i].to}</b> on <b>${offers[i].day}</b> at <b>${offers[i].time}</b>.
    The ride with <b>${offers[i].name}</b> costs <b>${offers[i].cost}</b> and the accepted payment method is <b>${offers[i].payment}</b> payment. Call at <b>${offers[i].phone}</b> or contact <b>${offers[i].email}</b>  `;
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
    offers[i].path = '../img/default.png';
  }
  return (offers);
}

render();
