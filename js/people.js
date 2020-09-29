
function Rating(name, rate) {
  this.name = name;
  this.rate = rate;
  this.starPath = `img/${rate}.png`;
  this.path = `img/${name}.jpg`;
  ratings.push(this);
  scores.push(rate);
}

let ratings = [];
let scores = [];
new Rating('Khaled', 3);
new Rating('Mohammed', 4);
new Rating('Omar', 5);
new Rating('Ayat', 5);
new Rating('Lana', 4);
let idCounter = 5;
let sectionEl = document.getElementById('ratings');
let existingLocalStorage = [];

function getFromLocalStorage() {
  existingLocalStorage = JSON.parse(localStorage.getItem('Rates')) || [];
  for (let i = 0; i < existingLocalStorage.length; i++) {
    let addedRating = new Rating(existingLocalStorage[i].name, existingLocalStorage[i].rate);
    for (let j = 0; j < ratings.length; j++) {
      if (ratings[j] === addedRating) {
        ratings[j].path = 'img/default.png';
      }
    }
  }
}


function saveToLocalStorage(rateStorage) {
  existingLocalStorage.push(rateStorage);
  localStorage.setItem('Rates', JSON.stringify(existingLocalStorage));
}

function render() {
  for (let i = 0; i < ratings.length; i++) {
    let tableEl = document.createElement('table');
    sectionEl.appendChild(tableEl);
    let legendEl = document.createElement('legend');
    tableEl.appendChild(legendEl);
    legendEl.textContent = ratings[i].name;
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    var imgEl = document.createElement('img');
    tdEl1.appendChild(imgEl);
    imgEl.src = ratings[i].path;
    imgEl.id='profileImg';
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    var imgEl2 = document.createElement('img');
    tdEl2.appendChild(imgEl2);
    imgEl2.src = ratings[i].starPath;
  }
}
getFromLocalStorage();
render();

function getAvg(scores) {
  for (let i = 0; i < scores.length; i++) {
    var avg = (scores[i] / scores.length) * scores.length;

  }
  return avg;
}

function renderForm() {
  var sectionEl2 = document.getElementById('formSection');
  var formEl = document.createElement('form');
  sectionEl2.appendChild(formEl);
  var labelEl = document.createElement('label');
  formEl.appendChild(labelEl);
  labelEl.textContent = 'Name';
  var inputEl = document.createElement('input');
  formEl.appendChild(inputEl);
  inputEl.type = 'text';
  inputEl.id = 'name';
  var pEl = document.createElement('p');
  formEl.appendChild(pEl);
  for (var i = 1; i < 6; i++) {
    var iEl = document.createElement('i');
    pEl.appendChild(iEl);
    iEl.id = idCounter;
    idCounter -= 1;
    iEl.className = 'star';
  }
}
renderForm();
let star1El = document.getElementById('1');
let star2El = document.getElementById('2');
let star3El = document.getElementById('3');
let star4El = document.getElementById('4');
let star5El = document.getElementById('5');

star1El.addEventListener('click', handleRating);
star2El.addEventListener('click', handleRating);
star3El.addEventListener('click', handleRating);
star4El.addEventListener('click', handleRating);
star5El.addEventListener('click', handleRating);

function handleRating(event) {
  event.preventDefault();
  let nameEl = document.getElementById('name');
  let name = nameEl.value;
  console.log(name);
  console.log(event.target.id);
  let newRating = new Rating(name, event.target.id);
  let ratingIndex = ratings.indexOf(newRating);
  ratings.splice(ratingIndex, 1);
  newRating.path = 'img/default.png';
  ratings.push(newRating);
  saveToLocalStorage(newRating);
  sectionEl.innerHTML = '';
  render();
}


// function setDefaultImg(ratings) {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].path = '../img/default.png';
//   }
//   return (ratings);
// }
