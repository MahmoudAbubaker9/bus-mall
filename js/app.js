'use strict';

let allElement = document.getElementById('partOne')
let leftElement = document.getElementById('img1')
let centerElement = document.getElementById('img2')
let rightElement = document.getElementById('img3')
let ul = document.getElementById('unList')

let leftImg ;
let centerImg ;
let rightImg ;
let rounds = 25;
let counter = 0;
let allInput = [];
let arrayOfNames = [];
let arrayOfVotes = [];
let arrayOfSeen =[];
let nonDupimg = [];
// let storageArray = [];

class Imgmall {
    constructor(name, source) {

        this.name = name;
        this.source = source;
        this.shown = 0;
        this.votes = 0;
        allInput.push(this);
        arrayOfNames.push(this.name)
        // storageArray.push(this);
    }
}

function storageSave(){
    let changetype = JSON.stringify(allInput);
    localStorage.setItem('unList',changetype);
    // console.log(changetype);
}

function storageData(){
    let data = localStorage.getItem('unList')
    let parseData = JSON.parse(data)
    // console.log(parseData);

    if(parseData){
        allInput=parseData
        
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
    
    
    while(leftImg === centerImg || leftImg === rightImg || rightImg === centerImg || nonDupimg.includes(leftImg) || nonDupimg.includes(centerImg) || nonDupimg.includes(rightImg)){
        leftImg = randomNamber() ;
        centerImg = randomNamber();
        rightImg = randomNamber() ;
    }
    // console.log(nonDupimg.includes(leftImg));
    // console.log(nonDupimg.includes(centerImg));
    // console.log(nonDupimg.includes(rightImg));
    nonDupimg = [leftImg,centerImg,rightImg]
    

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
    storageSave()
}

}

function listOfrusalt(){
    // let ul = document.getElementById('unList')
    ul.textContent = '';
    
    for(let i = 0 ; i <allInput.length; i++ ){
        arrayOfVotes.push(allInput[i].votes);
        arrayOfSeen.push(allInput[i].shown);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${allInput[i].name} has ${allInput[i].votes} Votes and has ${allInput[i].shown} shown`;
        ul.appendChild(li);
        
}
}


    

function listcall() {
    listOfrusalt();
    myChart();
    document.getElementById('buttom').removeAttribute("onClick");
  }

  function myChart(){

    let ctx = document.getElementById('voteChart')
    let voteChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayOfNames,
            datasets: [{
                label: '# of Votes',
                data: arrayOfVotes,
                backgroundColor: [
                    'rgba(0, 102, 0, 0.7)',
                ],
                borderWidth: 1
            },{
              label: '# of Seen',
              data: arrayOfSeen,
              backgroundColor: [
                  'rgba(0, 200, 0, 0.7)',
              ],
              borderWidth: 1
          }
          ]
        },
    });
    }
    
    storageData()