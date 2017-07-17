const quantityOfDailyQuestions = 10;
const displayQuestionDIV = document.getElementById("display_question");
const timesDIV = document.getElementById("times");
const avgTimeDIV =  document.getElementById("avg_time");
const windowProbButton =  document.getElementById("window_prob");
const arrayOfQuestions =[];
const linkHTML = "a"
let solvingProblem=false;
let randomArrayIndex = [];
const array = [
                {
                  name : 'Sum All Numbers in a Range',
                  link : 'https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range',
                  times : [9]
                },
                {
                  name : 'Diff Two Arrays',
                  link : "https://www.freecodecamp.org/challenges/diff-two-arrays",
                  times : []
                },
                {
                  name : 'Roman Numeral Converter',
                  link : "https://www.freecodecamp.org/challenges/roman-numeral-converter",
                  times : []
                },
                {
                  name: 'Wherefore art thou',
                  link : 'https://www.freecodecamp.org/challenges/wherefore-art-thou',
                  times : []
                },
                {
                  name: 'Search and Replace',
                  link :  '',
                  times : []
                },
                {
                  name: 'Pig Latin',
                  link :  '',
                  times : []
                },
                {
                  name: 'DNA Pairing',
                  link :  '',
                  times : []
                },
                {
                  name: 'Missing letters',
                  link :  '',
                  times : []
                },
                {
                  name: 'Boo who',
                  link :  '',
                  times : []
                },
                {
                  name: 'Sorted Union',
                  link :  '',
                  times : []
                },
                {
                  name: 'Convert HTML Entities',
                  link :  '',
                  times : []
                },
                {
                  name: 'Spinal Tap Case',
                  link :  '',
                  times : []
                },
                {
                  name: 'Sum All Odd Fibonacci Numbers',
                  link :  '',
                  times : []
                },
                {
                  name: 'Sum All Primes',
                  link :  '',
                  times : []
                },
                {
                  name: 'Smallest Common Multiple',
                  link :  '',
                  times : []
                },
                {
                  name : "Reverse",
                  link : "https://repl.it/HaJU",
                  times : []
                },
                {
                  name : "Factorial",
                  link : "https://repl.it/HaJO",
                  times : []
                },
                {
                  name : "Longest Word",
                  link : "https://repl.it/H7HZ/1",
                  times : []
                },
                {
                  name: "Sum Nums",
                  link :  'https://repl.it/HaIs',
                  times : [1]
                },
                {
                  name: "Time Conversion",
                  link :  'https://repl.it/HaJg',
                  times : []
                },
                {
                  name: "Count Vowels",
                  link :  'https://repl.it/HaK8/1',
                  times : [5]
                },
                {
                  name: "Palindrome",
                  link :  'https://repl.it/HaKw/2',
                  times : []
                },
                {
                  name: "Nearby AZ",
                  link :  'https://repl.it/HaLe/0',
                  times : [3]
                },
                {
                  name: "Two Sum",
                  link :  'https://repl.it/HaLr/1',
                  times : []
                },
                {
                  name: "Is Power of 2?",
                  link :  'https://repl.it/HaMG/1',
                  times : []
                },
                {
                  name: "Third Greatest",
                  link :  '',
                  times : []
                },
                {
                  name : "Most Common Letter",
                  link :  '',
                  times : []
                },
                {
                  name : "Dasherize Number",
                  link :  '',
                  times : []
                },
                {
                  name : "Capitalize Words",
                  link :  '',
                  times : []
                },
                {
                  name : "Scramble String",
                  link :  '',
                  times : []
                },
                {
                  name : "Is Prime?",
                  link :  '',
                  times : []
                },
                {
                  name : "Nth Prime",
                  link :  '',
                  times : []
                },
                {
                  name : "Longest Palindrome",
                  link :  '',
                  times : []
                },
                {
                  name : "Greatest Common Factor",
                  link :  '',
                  times : []
                },
                {
                  name : "Caesar Cipher",
                  link :  '',
                  times : []
                },
                {
                  name: "Number of Repeated Letters",
                  link :  '',
                  times : []
                }
            ];


const randomDaily = function (){
  const min = Math.ceil(0);
  const max = Math.floor(40);
  return Math.floor(createDate() * (max - min + 1)) + min;
}

const createDate = function (){
  const date   =  new Date();
  const month  =  date.getMonth();
  const day    =  date.getDate();
  const year   =  date.getFullYear();
  return (month+day+year)/10000;
}


const Question = function (name,link,times) {
  this.avgTime = "0:00";
  this.times = times;
  this.link = link;
  this.name = name;

}

Question.prototype.getAverageTime = function (){
    const sum = this.times.reduce(add,0);
    function add(a,b){
      return a+b;
    }
    this.avgTime = (sum/this.times.length) || 0;
    return this.avgTime;
  }

  function onBlur() {
    console.log("onBlur");
  };

  function onFocus(){
    if(solvingProblem)//this will show the pop up
    console.log("onFocus");
  };


for(let i = 0; i<array.length; i++){
  const newObj = new Question(array[i].name, array[i].link, array[i].times);
  arrayOfQuestions.push(newObj);
}



function createTenRandom(amount){
  var array =[];
  for(var i =0; i<amount; i++){
    array.push(Math.floor(Math.random() * ((arrayOfQuestions.length-1) - 0 + 1)) + 0)
  }
  return array;
}

randomArrayIndex = createTenRandom(quantityOfDailyQuestions);
function printOutObjects(div,callback,amount){


  var amount = (amount === undefined) ? arrayOfQuestions.length : amount;


  for(let i =0; i<amount; i++){
    if(typeof arrayOfQuestions[randomArrayIndex[i]][callback] == "function"){
      //will execute functions
      div.innerHTML += arrayOfQuestions[randomArrayIndex[i]][callback]()  + '<br>' ;
    }else if(div == displayQuestionDIV){
      createDynamicHTMLElement(linkHTML,arrayOfQuestions[randomArrayIndex[i]],div, "problem_names")

    }else{
      //will display variables
    div.innerHTML += arrayOfQuestions[randomArrayIndex[i]][callback] + '<br>' ;
    }
  }
}

function createDynamicHTMLElement(element,obj,parent,className,idName){
  var div = document.createElement("div");
  div.className = "div_"+className;
  var a = document.createElement(element);
  var t = document.createTextNode(obj.name);
  a.appendChild(t);
  a.className = className;
  a.href = obj.link;
  a.target = "_blank"
  div.appendChild(a);
  parent.appendChild(div)
}

printOutObjects(displayQuestionDIV,"name",quantityOfDailyQuestions);
printOutObjects(timesDIV,"times",quantityOfDailyQuestions);
printOutObjects(avgTimeDIV,"getAverageTime",quantityOfDailyQuestions);


windowProbButton.addEventListener("click", function(){
  window.onfocus = onFocus;
  //window.onblur = onBlur;
  solvingProblem =true;
  window.open("https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range");
});
