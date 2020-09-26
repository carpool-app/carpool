
'use strict';

let matchedOffers = [];
const findForm = document.getElementById('findForm');
findForm.addEventListener('submit', handleFindSubmit);

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
  request.saveToLocalStorage();
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
}
function clearFindForm(){
  findForm.textContent = '';
}
function showOffers(){
  const OffersInfo = ['Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost'];
  let sectionEl = document.getElementById('findFormSection');
  let tableEl = document.createElement('table');
  sectionEl.appendChild(tableEl);
  for (let i=0;i<OffersInfo.length;i++){
    let thEl = document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent = OffersInfo[i];
  }
  // add things *******
  for (let i = 0; i<matchedOffers.length;i++){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
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
    tdEl7.textContent = matchedOffers[i].cost;
  }
}
