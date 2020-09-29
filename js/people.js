function Rating (name, rate){
    this.name = name;
    this.rate=rate;
    this.starPath = `img/${rate}.png`;
    this.path = `img/${name}.jpg`;

    ratings.push(this); 
    scores.push(rate);
}

let ratings = [];
let scores=[];
new Rating('Khaled', 3);
new Rating('Mohammed', 4);
new Rating('Omar', 5);
new Rating('Ayat', 5);
new Rating('Lana', 4);

function render(){
    for(let i=0;i<ratings.length;i++){
    let sectionEl = document.getElementById('ratings');
    let tableEl=document.createElement('table');
    sectionEl.appendChild(tableEl);
    let legendEl=document.createElement('legend');
    tableEl.appendChild(legendEl);
    legendEl.textContent=ratings[i].name;
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
let tdEl1=document.createElement('td');
trEl.appendChild(tdEl1);
var imgEl=document.createElement('img');
tdEl1.appendChild(imgEl);
imgEl.src=ratings[i].path;
let tdEl2=document.createElement('td');
trEl.appendChild(tdEl2);
var imgEl2=document.createElement('img');
tdEl2.appendChild(imgEl2);
imgEl2.src=ratings[i].starPath;
}}
render();
function getAvg(scores){
    for (let i=0;i<scores.length;i++){
    var avg = (scores[i] / scores.length) * scores.length;
    
}
  return avg;
}