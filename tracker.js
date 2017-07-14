const quantityOfDailyQuestions = 10;
const displayQuestionDIV = document.getElementById("display_question");
const timesDIV = document.getElementById("times");
const avgTimeDIV = document.getElementById("avg_time");
const arrayOfQuestions =[];

var Question = function () {
  this.avgTime = "0:00";
  this.times = [];

}

Question.prototype.getAverageTime = function (){
    var sum = this.times.reduce(add,0);
    function add(a,b){
      return a+b;
    }
    this.avgTime = (sum/this.times.length) || 0;

    return this.avgTime;
  }
var array = [ 'Sum All Numbers in a Range',
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




for(var i = 0; i<array.length; i++){
  var newObj = new Question();
  newObj.name = array[i];
  arrayOfQuestions.push(newObj);
}
arrayOfQuestions[0]["times"].push(1)
arrayOfQuestions[0]["times"].push(2)

function printOutObjects(callback,func,amount){
  amount = (amount === undefined) ? arrayOfQuestions.length : amount;
  for(var i =0; i<amount; i++){
    if(typeof arrayOfQuestions[i][func] == "function"){
      callback.innerHTML += arrayOfQuestions[i][func]() + '<br>';
    }else
    callback.innerHTML += arrayOfQuestions[i][func] + '<br>';
  }
}

printOutObjects(displayQuestionDIV,"name",quantityOfDailyQuestions);
printOutObjects(timesDIV,"times",quantityOfDailyQuestions);
printOutObjects(avgTimeDIV,"getAverageTime",quantityOfDailyQuestions);
