'use strict';

let matchedOffers = [];
const findForm = document.getElementById('findForm');
findForm.addEventListener('submit', handleFindSubmit);
let existingRequestLocalStorage = '';
let existingOffers = '';


function render() {
  getFromLocalStorage();
}

function getFromLocalStorage() {
  existingRequestLocalStorage = JSON.parse(localStorage.getItem('RideRequests')) || [];
  existingOffers = setDefaultImg(JSON.parse(localStorage.getItem('RideOffers'))) || [];
}

function saveToLocalStorage(request) {
  existingRequestLocalStorage.push(request);
  localStorage.setItem('RideRequests', JSON.stringify(existingRequestLocalStorage));
}
function handleFindSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let from = event.target.from.value;
  let to = event.target.to.value;
  let day = event.target.day.value;
  let time = event.target.time.value;
  let payment = event.target.payment.value;
  let driverGender = event.target.driverGender.value;
  let request = new RideRequest(name, from, to, day, time, payment, driverGender);
  saveToLocalStorage(request);
  matchRequestToOffer(request);
  clearFindForm();
  showOffers();
}

function matchRequestToOffer(request) {
  for (let i = 0; i < RideOffer.all.length; i++) {
    if (request.from === RideOffer.all[i].from && request.to === RideOffer.all[i].to && request.day === RideOffer.all[i].day && request.time === RideOffer.all[i].time && request.payment === RideOffer.all[i].payment && (request.driverGender === RideOffer.all[i].gender || request.driverGender === 'None')) {
      matchedOffers.push(RideOffer.all[i]);
      console.log('yay!');
    }
  }
  for (let i = 0; i < existingOffers.length; i++) {
    if (request.from === existingOffers[i].from && request.to === existingOffers[i].to && request.day === existingOffers[i].day && request.time === existingOffers[i].time && request.payment === existingOffers[i].payment && (request.driverGender === existingOffers[i].gender || request.driverGender === 'None')) {
      existingOffers[i].path = 'img/default.png';
      matchedOffers.push(existingOffers[i]);
      console.log('yay*2!');
    }
  }
}
function clearFindForm() {
  findForm.textContent = '';
  let mainEl = document.getElementsByTagName('main')[0];
  mainEl.style.backgroundImage = '../img/map.png';
}

function showOffers() {
  const OffersInfo = ['Image', 'Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost', 'Phone', 'Email', 'Starting Point', 'Ending Point'];
  let sectionEl = document.getElementById('findResultsSection');
  for (let i = 0; i < matchedOffers.length; i++) {
    let tableEl = document.createElement('table');
    sectionEl.appendChild(tableEl);
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdElImg = document.createElement('img');
    trEl.appendChild(tdElImg);
    tdElImg.src = matchedOffers[i].path;
    tdElImg.className = 'driverImage';
    let tdElInfo = document.createElement('td');
    trEl.appendChild(tdElInfo);
    tdElInfo.innerHTML = `<b>${matchedOffers[i].name}</b> is going from <b>${matchedOffers[i].from}</b> to <b>${matchedOffers[i].to}</b> on <b>${matchedOffers[i].day}</b> at <b>${matchedOffers[i].time}</b>.
    The ride with <b>${matchedOffers[i].name}</b> costs <b>${matchedOffers[i].cost}</b> and the accepted payment method is <b>${matchedOffers[i].payment}</b> payment. Call at <b>${matchedOffers[i].phone}</b> or contact <b>${matchedOffers[i].email}</b>  `;
    let tdElFromMap = document.createElement('td');
    trEl.appendChild(tdElFromMap);
    tdElFromMap.innerHTML = matchedOffers[i].fromLocation;
    let tdElToMap = document.createElement('td');
    trEl.appendChild(tdElToMap);
    tdElToMap.innerHTML = matchedOffers[i].toLocation;
  }
  let aEl = document.createElement('a');
  sectionEl.appendChild(aEl);
  let buttonEl = document.createElement('button');
  aEl.appendChild(buttonEl);
  buttonEl.id = 'findAgain';
  buttonEl.textContent = 'Find Another Ride';
  aEl.href = 'find.html';
}


function setDefaultImg(offers) {
  for (let i = 0; i < offers.length; i++) {
    offers[i].path = '../img/default.png';
  }
  return (offers);
}

render();
