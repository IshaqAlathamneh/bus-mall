'use strickt';
let container = document.getElementById('container');
let maxAttempt = 26;
let attempt = 0;
let arrOfObjects = [];
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
 console.log(getRandomNum())

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
while( leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex){
rightIndex = getRandomNum();
middleIndex = getRandomNum();
}

left.setAttribute('src', arrOfObjects[leftIndex].source);
right.setAttribute('src', arrOfObjects[rightIndex].source);
middle.setAttribute('src', arrOfObjects[middleIndex].source);
arrOfObjects[leftIndex].show++;
arrOfObjects[rightIndex].show++;
arrOfObjects[middleIndex].show++;
}
render();
left.addEventListener('click' , clicking)
right.addEventListener('click' , clicking)
middle.addEventListener('click' , clicking)
function clicking (event){
    attempt++;
    console.log(event.target.id)
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
        button.removeEventListener('click', viewResults)
    }

    left.removeEventListener('click' , clicking)
right.removeEventListener('click' , clicking)
middle.removeEventListener('click' , clicking)
}

}