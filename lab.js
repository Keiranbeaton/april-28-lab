'use strict';

// LAB: SORTING AND CAMPY SCI-FI

// Be sure to read all the comments!
// That's where the instructions are!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |
*/
    function Blob(blobName) {
    this.blobName = blobName;
  }
var blob = new Blob(blob);

function consumeDowington(population, peoplePerHour){
  var remainingPopulation = population;
  var currentRate = peoplePerHour;
  var hours = 0;
  while(remainingPopulation > 0) {
    remainingPopulation -= currentRate;
    currentRate += 1;
    hours += 1;
  }
  return hours;
}

var hoursSpentInDowington = 45;

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hours = 0;
  while(population > 0) {
    population -= peoplePerHour;
    peoplePerHour += 1;
    hours += 1;
  }
  return hours;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

assert(blob.hoursToOoze(10, 1) === 4, 'It should take 4 hours to eat this many people');
assert(blob.hoursToOoze(-1, 1) === 0, 'While loop should not run with a negative population');
assert(blob.hoursToOoze(40, 50) === 1, 'Should only take one hour to eat a population less than peoplePerHour');

// *********************************************************
// PROBLEM 2: Universal Translator
// *********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

function SentientBeing (homePlanet, spokenLanguage) {
  this.homePlanet = homePlanet;
  this.spokenLanguage = spokenLanguage;
}

SentientBeing.prototype.sayHello() = function(sb) {
  console.log('"' + hello[this.spokenLanguage] + '" from ' + this.homePlanet + ' to ' + sb.homePlanet);
  return (hello[sb.spokenLanguage]);
};

function Klingon() {};
function Romulan() {};
function Human() {};

Klingon.prototype = new SentientBeing('Qon\'nos', 'klingon');
Romulan.prototype = new SentientBeing('Romulus', 'romulan');
Human.prototype = new SentientBeing('Earth', 'federation standard');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    var lengthA = a.length;
    var lengthB = b.length;
    var lastA = a[lengthA - 1];
    var lastB = b[lengthB - 1];
    if (lastA < lastB) {
      return -1;
    } else if(lastA > lastB) {
      return 1;
    } else {
      return 0;
    }
  }
  stringArray.sort(byLastLetter);
}

function sumArray(numberArray) {
  var sum = 0;
  function addToSum(currentValue, index, array) {
    sum += currentValue;
  }
  numberArray.forEach(addToSum);
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    sumArray(item);
  });

}
