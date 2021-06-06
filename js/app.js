'use strict';

let allElement = document.getElementById('partOne')
let leftElement = document.getElementById('img1')
let centerElement = document.getElementById('img2')
let rightElement = document.getElementById('img3')

let leftImg ;
let centerImg ;
let rightImg ;

let rounds = 10;
let counter = 0;

let allInput = [];

class Imgmall {
    constructor(name, source) {

        this.name = name;
        this.source = source;
        this.shown = 0;
        this.votes = 0;
        allInput.push(this);
    }
}


new Imgmall('bag','../img/bag.jpg')
new Imgmall('banana','../img/banana.jpg')
new Imgmall('bathroom','../img/bathroom.jpg')
new Imgmall('boots','../img/boots.jpg')
new Imgmall('breakfast','../img/breakfast.jpg')
new Imgmall('bubblegum','../img/bubblegum.jpg')
new Imgmall('chair','../img/chair.jpg')
new Imgmall('cthulhu','../img/cthulhu.jpg')
new Imgmall('dog-duck','../img/dog-duck.jpg')
new Imgmall('pet-sweep','../img/pet-sweep.jpg')
new Imgmall('pen','../img/pen.jpg')
new Imgmall('scissors','../img/scissors.jpg')
new Imgmall('shark','../img/shark.jpg')
new Imgmall('sweep','../img/sweep.png')
new Imgmall('unicorn','../img/unicorn.jpg')
new Imgmall('usb','../img/usb.gif')
new Imgmall('water-can','../img/water-can.jpg')
new Imgmall('wine-glass','../img/wine-glass.jpg')

function randomNamber( ){
let randomNumber = Math.floor(Math.random() * 18);
console.log(randomNumber);
return randomNumber;   
}
randomNamber()

function displayPic(){
    leftImg = randomNamber() ;
    centerImg = randomNamber() ;
    rightImg = randomNamber() ;
    
    while(leftImg === centerImg || leftImg === rightImg || rightImg === centerImg){
        leftImg = randomNamber() ;
        centerImg = randomNamber();
        rightImg = randomNamber() ;
    }
    rightElement.src = allInput[rightImg].source;
    centerElement.src = allInput[centerImg].source;
    leftElement.src = allInput[leftImg].source;
    allInput[rightImg].shown++
    allInput[centerImg].shown++
    allInput[leftImg].shown++
}
displayPic()



allElement.addEventListener('click', clickingPic)

function clickingPic(event){
    counter++
    
    if(rounds >= counter){
        
    if(event.target.id === 'img1' ){
        allInput[leftImg].votes++;

        console.log('left');
    }else if(event.target.id === 'img2'){
        allInput[centerImg].votes++;
        console.log('center');
    }else if(event.target.id === 'img3'){
        allInput[rightImg].votes++;
        console.log('right');
    }
    displayPic()
}else{
    allElement.removeEventListener('click',clickingPic);
}

}

function listOfrusalt(){
    let ul = document.getElementById('unList')
    for(let i = 0 ; i <allInput.length; i++ ){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${allInput[i].name} has ${allInput[i].votes} Votes and has ${allInput[i].shown} shown`;
        
}
}

function listcall() {
    listOfrusalt()
    document.getElementById('buttom').removeAttribute("onClick");
  }