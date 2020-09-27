'use strict';

let matchedOffers = [];
const findForm = document.getElementById('findForm');
findForm.addEventListener('submit', handleFindSubmit);
let existingRequestLocalStorage = '';
let existingOffers = '';


render();
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
      existingOffers[i].path = 'img/default.jpg';
      matchedOffers.push(existingOffers[i]);
      console.log('yay*2!');
    }
  }
}
function clearFindForm() {
  findForm.textContent = '';
}

function showOffers() {
  const OffersInfo = ['Image', 'Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost', 'Phone', 'Email', 'Starting Point', 'Ending Point'];
  let sectionEl = document.getElementById('findFormSection');
  let tableEl = document.createElement('table');
  sectionEl.appendChild(tableEl);
  let aEl = document.createElement('a');
  sectionEl.appendChild(aEl);
  for (let i = 0; i < OffersInfo.length; i++) {
    let thEl = document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent = OffersInfo[i];
  }
  for (let i = 0; i < matchedOffers.length; i++) {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdELImg = document.createElement('td');
    trEl.appendChild(tdELImg);
    let imgEl = document.createElement('img');
    tdELImg.appendChild(imgEl);
    imgEl.src = matchedOffers[i].path;
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = matchedOffers[i].name;
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = matchedOffers[i].from;
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = matchedOffers[i].to;
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = matchedOffers[i].day;
    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    tdEl5.textContent = matchedOffers[i].time;
    let tdEl6 = document.createElement('td');
    trEl.appendChild(tdEl6);
    let tdEl7 = document.createElement('td');
    trEl.appendChild(tdEl7);
    tdEl7.textContent = matchedOffers[i].payment;
    let tdEl8 = document.createElement('td');
    trEl.appendChild(tdEl8);
    tdEl8.textContent = matchedOffers[i].cost;
    let tdEl9 = document.createElement('td');
    trEl.appendChild(tdEl9);
    tdEl9.textContent = matchedOffers[i].phone;
    let tdEl10 = document.createElement('td');
    trEl.appendChild(tdEl10);
    tdEl10.textContent = matchedOffers[i].email;
    let tdEl11 = document.createElement('td');
    trEl.appendChild(tdEl11);
    tdEl11.innerHTML = matchedOffers[i].fromLocation;
    let tdEl12 = document.createElement('td');
    trEl.appendChild(tdEl12);
    tdEl12.innerHTML = matchedOffers[i].toLocation;
  }
  let buttonEl = document.createElement('button');
  aEl.appendChild(buttonEl);
  buttonEl.id = 'findAgain';
  buttonEl.textContent = 'Find Another Ride';
  aEl.href = 'find.html';
}

function setDefaultImg(offers){
  for (let i= 0; i<offers.length;i++){
    offers[i].path = 'img/default.jpg';
  }
  return (offers);
}