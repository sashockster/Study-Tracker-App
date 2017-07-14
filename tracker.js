var Question = function () {
  this.avgTime = "0:00"
  this.times = [];
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
              'Smallest Common Multiple' ]
var displayQuestionDIV = document.getElementById("display_question");
var arrayOfQuestions =[];
for(var i = 0; i<array.length; i++){
  var newObj = new Question();
  newObj.getInstructions = array[i]
  arrayOfQuestions.push(newObj)
}

function printOutObjects(callback,func,amount){
  amount = (amount === undefined) ? arrayOfQuestions.length : amount;
  for(var i =0; i<amount; i++){
    callback.innerHTML += arrayOfQuestions[i][func] + '<br>';
  }
}

printOutObjects(displayQuestionDIV,"getInstructions",10);
