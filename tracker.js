const quantityOfDailyQuestions = 10;
const displayQuestionDIV = document.getElementById("display_question");
const timesDIV = document.getElementById("times");
const avgTimeDIV =  document.getElementById("avg_time");
const windowProbButton =  document.getElementById("window_prob");
const arrayOfQuestions =[];
let solvingProblem=false;

const array = [
                {
                  name : 'Sum All Numbers in a Range',
                  link : 'https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range'
                },
                {
                  name : 'Diff Two Arrays',
                  link : "https://www.freecodecamp.org/challenges/diff-two-arrays"
                },
                {
                  name : 'Roman Numeral Converter',
                  link : "https://www.freecodecamp.org/challenges/roman-numeral-converter"
                },
                {
                  name: 'Wherefore art thou',
                  link : 'https://www.freecodecamp.org/challenges/wherefore-art-thou'
                },
                {
                  name: 'Search and Replace',
                  link :  ''
                },
                {
                  name: 'Pig Latin',
                  link :  ''
                },
                {
                  name: 'DNA Pairing',
                  link :  ''
                },
                {
                  name: 'Missing letters',
                  link :  ''
                },
                {
                  name: 'Boo who',
                  link :  ''
                },
                {
                  name: 'Sorted Union',
                  link :  ''
                },
                {
                  name: 'Convert HTML Entities',
                  link :  ''
                },
                {
                  name: 'Spinal Tap Case',
                  link :  ''
                },
                {
                  name: 'Sum All Odd Fibonacci Numbers',
                  link :  ''
                },
                {
                  name: 'Sum All Primes',
                  link :  ''
                },
                {
                  name: 'Smallest Common Multiple',
                  link :  ''
                },
                {
                  name : "Reverse",
                  link : "https://repl.it/HaJU"
                },
                {
                  name : "Factorial",
                  link : "https://repl.it/HaJO"
                },
                {
                  name : "Longest Word",
                  link : "https://repl.it/H7HZ/1"
                },
                {
                  name: "Sum Nums",
                  link :  ''
                },
                {
                  name: "Time Conversion",
                  link :  ''
                },
                {
                  name: "Count Vowels",
                  link :  ''
                },
                {
                  name: "Palindrome",
                  link :  ''
                },
                {
                  name: "Nearby AZ",
                  link :  ''
                },
                {
                  name: "Two Sum",
                  link :  ''
                },
                {
                  name: "Is Power of 2?",
                  link :  ''
                },
                {
                  name: "Third Greatest",
                  link :  ''
                },
                {
                  name : "Most Common Letter",
                  link :  ''
                },
                {
                  name : "Dasherize Number",
                  link :  ''
                },
                {
                  name : "Capitalize Words",
                  link :  ''
                },
                {
                  name : "Scramble String",
                  link :  ''
                },
                {
                  name : "Is Prime?",
                  link :  ''
                },
                {
                  name : "Nth Prime",
                  link :  ''
                },
                {
                  name : "Longest Palindrome",
                  link :  ''
                },
                {
                  name : "Greatest Common Factor",
                  link :  ''
                },
                {
                  name : "Caesar Cipher",
                  link :  ''
                },
                {
                  name: "Number of Repeated Letters",
                  link :  ''
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


const Question = function (name,link) {
  this.avgTime = "0:00";
  this.times = [];
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
  const newObj = new Question(array[i].name, array[i].link);
  arrayOfQuestions.push(newObj);
}

arrayOfQuestions[0]["times"].push(1);
arrayOfQuestions[0]["times"].push(2);

function printOutObjects(callback,func,amount){
  amount = (amount === undefined) ? arrayOfQuestions.length : amount;
  for(let i =0; i<amount; i++){
    if(typeof arrayOfQuestions[i][func] == "function"){
      //will execute functions

      callback.innerHTML += arrayOfQuestions[i][func]() + '<br>';
    }else{
      //will display variables
    callback.innerHTML += arrayOfQuestions[i][func] + '<br>';
    }
  }
}

function createDynamicHTMLElement(element,obj,parent){

  var a = document.createElement(element);
  var t = document.createTextNode(obj.title);
  a.appendChild(t);
  a.href = obj.link;
  parent.appendChild(a)

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
