const quantityOfDailyQuestions = 10;
const displayQuestionDIV = document.getElementById("display_question");
const timesDIV = document.getElementById("times");
const avgTimeDIV =  document.getElementById("avg_time");
const windowProbButton =  document.getElementById("window_prob");
const arrayOfQuestions =[];
let solvingProblem=false;
function onBlur() {
  console.log("onBlur");
};

function onFocus(){
  if(solvingProblem)//this will show the pop up
  console.log("onFocus");
};

const array = [ 'Sum All Numbers in a Range',
              'Diff Two Arrays',
              'Roman Numeral Converter',
              'Wherefore art thou',
              'Search and Replace',
              'Pig Latin',
              'DNA Pairing',
              'Missing letters',
              'Boo who',
              'Sorted Union',
              'Convert HTML Entities',
              'Spinal Tap Case',
              'Sum All Odd Fibonacci Numbers',
              'Sum All Primes',
              'Smallest Common Multiple' ];


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


const Question = function () {
  this.avgTime = "0:00";
  this.times = [];

}

Question.prototype.getAverageTime = function (){
    const sum = this.times.reduce(add,0);
    function add(a,b){
      return a+b;
    }
    this.avgTime = (sum/this.times.length) || 0;
    return this.avgTime;
  }





for(let i = 0; i<array.length; i++){
  const newObj = new Question();
  newObj.name = array[i];
  arrayOfQuestions.push(newObj);
}
arrayOfQuestions[0]["times"].push(1);
arrayOfQuestions[0]["times"].push(2);

function printOutObjects(callback,func,amount){
  amount = (amount === undefined) ? arrayOfQuestions.length : amount;
  for(let i =0; i<amount; i++){
    if(typeof arrayOfQuestions[i][func] == "function"){
      callback.innerHTML += arrayOfQuestions[i][func]() + '<br>';
    }else
    callback.innerHTML += arrayOfQuestions[i][func] + '<br>';
  }
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
