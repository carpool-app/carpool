'use strict';

let sectionEl = document.getElementById('discoverSection');
let tableEl = document.createElement('table');
sectionEl.appendChild(tableEl);
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
  for (let i = 0; i < OffersInfo.length; i++) {
    let thEl = document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent = OffersInfo[i];
  }
  renderOfferRows(existingOfferLocalStorage);
  renderOfferRows(RideOffer.all);
}

function renderOfferRows(offers){
  for (let i = 0; i < offers.length; i++) {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdELImg = document.createElement('td');
    trEl.appendChild(tdELImg);
    let imgEl = document.createElement('img');
    tdELImg.appendChild(imgEl);
    imgEl.src = offers[i].path;
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = offers[i].name;
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = offers[i].from;
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = offers[i].to;
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = offers[i].day;
    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    tdEl5.textContent = offers[i].time;
    let tdEl6 = document.createElement('td');
    trEl.appendChild(tdEl6);
    let tdEl7 = document.createElement('td');
    trEl.appendChild(tdEl7);
    tdEl7.textContent = offers[i].payment;
    let tdEl8 = document.createElement('td');
    trEl.appendChild(tdEl8);
    tdEl8.textContent = offers[i].cost;
    let tdEl9 = document.createElement('td');
    trEl.appendChild(tdEl9);
    tdEl9.textContent = offers[i].phone;
    let tdEl10 = document.createElement('td');
    trEl.appendChild(tdEl10);
    tdEl10.textContent = offers[i].email;
    let tdEl11 = document.createElement('td');
    trEl.appendChild(tdEl11);
    tdEl11.innerHTML = offers[i].fromLocation;
    let tdEl12 = document.createElement('td');
    trEl.appendChild(tdEl12);
    tdEl12.innerHTML = offers[i].toLocation;
  }
}

function setDefaultImg(offers){
  for (let i= 0; i<offers.length;i++){
    offers[i].path = 'img/default.jpg';
  }
  return (offers);
}

render();
