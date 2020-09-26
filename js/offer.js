'use strict';

const offerForm = document.getElementById('offerForm');
offerForm.addEventListener('submit', handleOfferSubmit);
let existingLocalStorage = '';

render();
function render() {
  getFromLocalStorage();
}

function getFromLocalStorage() {
  existingLocalStorage = JSON.parse(localStorage.getItem('RideOffers')) || [];
}

function saveToLocalStorage(offer) {
  existingLocalStorage.push(offer);
  localStorage.setItem('RideOffers', JSON.stringify(existingLocalStorage));
}
function handleOfferSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let from = event.target.from.value;
  let to = event.target.to.value;
  let day = event.target.day.value;
  let time = event.target.time.value;
  let payment = event.target.payment.value;
  let gender = event.target.gender.value;
  let cost = event.target.cost.value;
  let phone = event.target.phone.value;
  let email = event.target.email.value;
  //let fromLocation = event.target.fromLocation.value;
  //let toLocation = event.target.toLocation.value;
  let offer = new RideOffer(name, from, to, day, time, payment, gender, cost, phone, email);
  saveToLocalStorage(offer);
  offerForm.style.display = 'none';
  confirmMessage();
  createButton();
}

function confirmMessage() {
  let sectionEl = document.getElementById('anotherOffer');
  let pEl = document.createElement('p');
  sectionEl.appendChild(pEl);
  pEl.textContent = 'Ride Offer Added Successfully!';
}

function createButton(){
  let sectionEl = document.getElementById('anotherOffer');
  let aEl = document.createElement('a');
  sectionEl.appendChild(aEl);
  let buttonEl = document.createElement('button');
  aEl.appendChild(buttonEl);
  buttonEl.id = 'offerAgain';
  buttonEl.textContent = 'Offer Another Ride';
  aEl.href = 'offer.html';
}

