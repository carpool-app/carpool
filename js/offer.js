'use strict';

const offerForm = document.getElementById('offerForm');
offerForm.addEventListener('submit', handleOfferSubmit);

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
  let offer = new RideOffer(name, from, to, day, time, payment, gender, cost);
  offer.saveToLocalStorage();
}
