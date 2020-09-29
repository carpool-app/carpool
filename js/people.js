
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
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        var imgEl2 = document.createElement('img');
        tdEl2.appendChild(imgEl2);
        imgEl2.src = ratings[i].starPath;
    }
}
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
    var buttonEl = document.createElement('button');
    formEl.appendChild(buttonEl);
    buttonEl.textContent = 'Rate us';
}
renderForm();
star1El = document.getElementById('1');
star2El = document.getElementById('2');
star3El = document.getElementById('3');
star4El = document.getElementById('4');
star5El = document.getElementById('5');

starsArray = [star1El, star2El, star3El, star4El, star5El];

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
    ratingIndex = ratings.indexOf(newRating);
    ratings.splice(ratingIndex, 1);
    newRating.path = `img/default.png`;
    ratings.push(newRating);
    sectionEl.innerHTML = '';
    render();
}


/* <p>
  <i class="star"></i>
  <i class="star"></i>
  <i class="star"></i>
</p> */

