'use strict';

// RideRequest constructor.
function RideRequest(name, from, to, day, time, payment, driverGender) {
  this.name = name;
  this.from = from;
  this.to = to;
  this.day = day;
  this.time = time;
  this.payment = payment;
  this.driverGender = driverGender;
  RideRequest.all.push(this);
}
RideRequest.all = [];

RideRequest.prototype.saveToLocalStorage = function () {
  localStorage.setItem('RidesRequests', JSON.stringify(this));
};
RideRequest.prototype.removeRequest = function () {
  const index = RideRequest.all.indexOf(this);
  RideRequest.all.splice(index, 1);
};

// RideOffer contructor.
var RideOffer = function (name, from, to, day, time, payment, gender, cost) {
  this.name = name;
  this.from = from;
  this.to = to;
  this.day = day;
  this.time = time;
  this.payment = payment;
  this.driverGender = gender;
  this.cost = cost;
  RideOffer.all.push(this);
};
RideOffer.all = [];
RideOffer.prototype.saveToLocalStorage = function () {
  localStorage.setItem('RideOffers', JSON.stringify(this));
};
RideOffer.prototype.removeRequest = function () {
  const index = RideOffer.all.indexOf(this);
  RideOffer.all.splice(index, 1);
};

function generateOffers() {
  new RideOffer('Ahmed', 'Amman', 'Zarqa', 'Monday', '00:00', 'Cash', 'Male');
}

generateOffers();
