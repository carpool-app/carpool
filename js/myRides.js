'use strict';

let requestsSectionEl = document.getElementById('myRequests');
let offersSectionEl = document.getElementById('myOffers');
let myRequestsLocalStorage = '';
let myOffersLocalStorage = '';
let myRequestsHeader = ['Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Preferred Driver'];
let myOffersHeader = ['Name', 'From', 'To', 'Day', 'Time', 'Payment Method', 'Cost', 'Phone', 'Email'];

function render() {
  getFromLocalStorage();
  renderMyRequests();
}

function getFromLocalStorage() {
  myRequestsLocalStorage = JSON.parse(localStorage.getItem('RideRequests')) || [];
  myOffersLocalStorage = JSON.parse(localStorage.getItem('RideOffers')) || [];
}

function renderMyRequests(){
  let tableEl = document.createElement('table');
  requestsSectionEl.appendChild(tableEl);
  let thElRemove = document.createElement('th');
  tableEl.appendChild(thElRemove);
  for (let i = 0; i<myRequestsHeader.length;i++){
    let thEl = document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent = myRequestsHeader[i];
  }
  for (let i =0; i < myRequestsLocalStorage.length; i++){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdElRemove = document.createElement('td');
    trEl.appendChild(tdElRemove);
    tdElRemove.textContent = 'Cancel';
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

render();
