'use strickt';
let container = document.getElementById('container');
let maxAttempt = 26;
let attempt = 0;
let arrOfObjects = [];
let arrOfIndex = [];
function Products(name, source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.show = 0;
    arrOfObjects.push(this);
}

newProd = new Products('bag', 'images/bag.jpg')
newProd = new Products('banana', 'images/banana.jpg')
newProd = new Products('bathroom', 'images/bathroom.jpg')
newProd = new Products('boots', 'images/boots.jpg')
newProd = new Products('breakfast', 'images/breakfast.jpg')
newProd = new Products('bubblegum', 'images/bubblegum.jpg')
newProd = new Products('chair', 'images/chair.jpg')
newProd = new Products('cthulhu', 'images/cthulhu.jpg')
newProd = new Products('dog-duck', 'images/dog-duck.jpg')
newProd = new Products('dragon', 'images/dragon.jpg')
newProd = new Products('pen', 'images/pen.jpg')
newProd = new Products('pet-sweep', 'images/pet-sweep.jpg')
newProd = new Products('scissors', 'images/scissors.jpg')
newProd = new Products('shark.', 'images/shark.jpg')
newProd = new Products('sweep', 'images/sweep.png')
newProd = new Products('tauntaun', 'images/tauntaun.jpg')
newProd = new Products('unicorn', 'images/unicorn.jpg')
newProd = new Products('usb', 'images/usb.gif')
newProd = new Products('water-can', 'images/water-can.jpg')
newProd = new Products('wine-glass', 'images/wine-glass.jpg')

function getRandomNum(){
    let ran = Math.floor( Math.random() * arrOfObjects.length );
    return ran;
 }

let left , right , middle;

left = document.createElement('img');
right = document.createElement('img');
middle = document.createElement('img');
left.setAttribute('id', 'leftImage');
right.setAttribute('id', 'rightImage');
middle.setAttribute('id', 'middleImage');
container.appendChild(left)
container.appendChild(right)
container.appendChild(middle)

let leftIndex;
let rightIndex;
let middleIndex;

function render(){
leftIndex = getRandomNum();
rightIndex = getRandomNum();
middleIndex = getRandomNum();
arrOfIndex[3] = rightIndex;
arrOfIndex[4] = middleIndex;
    
    while (leftIndex ===parseInt(arrOfIndex[0]) || leftIndex ===parseInt(arrOfIndex[1]) || leftIndex ===parseInt(arrOfIndex[2]) || leftIndex ===parseInt(arrOfIndex[3]) || leftIndex ===parseInt(arrOfIndex[4])){
        leftIndex = getRandomNum();
    }
    while (rightIndex === parseInt(arrOfIndex[0]) || rightIndex === parseInt(arrOfIndex[1]) || rightIndex === parseInt(arrOfIndex[2]) || rightIndex === leftIndex){
        rightIndex = getRandomNum();
    }
    while (middleIndex === parseInt(arrOfIndex[0]) || middleIndex === parseInt(arrOfIndex[1]) || middleIndex === parseInt(arrOfIndex[2]) || middleIndex === parseInt(arrOfIndex[3]) || middleIndex === leftIndex){
        middleIndex = getRandomNum();
    }


left.setAttribute('src', arrOfObjects[leftIndex].source);
right.setAttribute('src', arrOfObjects[rightIndex].source);
middle.setAttribute('src', arrOfObjects[middleIndex].source);

arrOfObjects[leftIndex].show++;
arrOfObjects[rightIndex].show++;
arrOfObjects[middleIndex].show++;

arrOfIndex[0] = leftIndex;
arrOfIndex[1] = rightIndex;
arrOfIndex[2] = middleIndex;
}
render();

let arrOfName = [];
let arrOfVotes = [];
let arrOfShow = [];

container.addEventListener('click' , clicking)

function clicking (event){
    attempt++;

if (attempt < maxAttempt){

 if ( event.target.id === 'leftImage'){
    arrOfObjects[leftIndex].votes++;

 }else if (event.target.id === 'rightImage'){
    arrOfObjects[rightIndex].votes++;

 }else{
    arrOfObjects[middleIndex].votes++;
 }
render();
}else{
    
for (let j = 0; j < arrOfObjects.length; j++){
arrOfName.push(arrOfObjects[j].name);
arrOfVotes.push(arrOfObjects[j].votes);
arrOfShow.push(arrOfObjects[j].show);
}
    let button = document.createElement('button');
    container.appendChild(button);
    button.textContent = 'View Results';
    button.addEventListener('click', viewResults) 
    function viewResults(event){

        for (let i = 0; i < arrOfObjects.length ; i++){
            let li = document.createElement('li')
            container.appendChild(li)
        li.textContent = `${arrOfObjects[i].name} had ${arrOfObjects[i].votes} votes , and was seen ${arrOfObjects[i].show} times.`
        }
        console.log(arrOfVotes);
        console.log(arrOfShow)
        chart();
        chartStretch();
        button.removeEventListener('click', viewResults)
    }

    container.removeEventListener('click' , clicking)
}

}
function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    
    type: 'bar',

    data: {
        labels: arrOfName,
        datasets: [{
            label: 'Votes',
            backgroundColor: '#1e212d',
            hoverBackgroundColor: '#b68973',
            data: arrOfVotes,
        },
    {  label: 'Shows',
    backgroundColor: '#faf3e0',
    hoverBackgroundColor: '#eabf9f',
    data: arrOfShow,

    }]
    },

    options: {}
});
}
function chartStretch() {
    let arrOfLove = [];
    for (let i = 0; i < arrOfVotes.length; i++){
        arrOfLove.push((arrOfVotes[i]/arrOfShow[i])*100)
    }
    var ctx = document.getElementById('myChartTwo').getContext('2d');
    var chart = new Chart(ctx, {
    
    type: 'line',

    data: {
        labels: arrOfName,
        datasets: [{
            label: 'Love Percentage',
            backgroundColor: 'rgb(132, 94, 194, 0.3)',
            pointBackgroundColor: '#845ec2',
            borderWidth: 2,
            borderColor: '#ff5e78',
            hoverBackgroundColor: '#ff5e78',
            hoverBorderColor: '#845ec2',
            fill: 'origin',
            pointRadius: 7,
            pointHoverRadius: 12,
            data: arrOfLove,
        },
    ]
    },

    options: {}
});
}