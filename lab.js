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
  var hours = 0
  while(remainingPopulation > 0) {
    remainingPopulation -= currentRate;
    currentRate += 1;
    hours += 1;
  }
  return hours;
}

var hoursSpentInDowington = 45; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var remainingPopulation = population;
  var currentRate = peoplePerHour;
  var hours = 0
  while(remainingPopulation > 0) {
    remainingPopulation -= currentRate;
    currentRate += 1;
    hours += 1;
  }
  return hours;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(10, 1) === 4, 'It should take 4 hours to eat this many people');
assert(blob.hoursToOoze(-1, 1) === 0, 'While loop should not run with a negative population');
assert(blob.hoursToOoze(40, 50) === 1, 'Should only take one hour to eat a population less than peoplePerHour');

//*********************************************************
// PROBLEM 2: Universal Translator
//*********************************************************
//
// var hello = {
//   klingon: 'nuqneH',  // home planet is Qo'noS
//   romulan: 'Jolan\'tru', // home planet is Romulus
//   'federation standard': 'hello' // home planet is Earth
// };
//
// // TODO: define a constructor that creates objects to represent
// // sentient beings. They have a home planet, a language that they
// // speak, and method (that you'll place on the prototype) called
// // sayHello.
//
// function SentientBeing (homePlanet, spokenLanguage) {
//   this.homePlanet = homePlanet;
//   this.spokenLanguage = spokenLanguage;
//   // TODO: specify a home planet and a language
//   // you'll need to add parameters to this constructor
// }
//
// // sb is a SentientBeing object
// function sayHello (sb) {
//     // TODO: say hello prints out (console.log's) hello in the
//     // language of the speaker, but returns it in the language
//     // of the listener (the sb parameter above).
//     // use the 'hello' object at the beginning of this exercise
//     // to do the translating
//     console.log(hello.spokenLanguage);
//     return hello.listener;
//     //TODO: put this on the SentientBeing prototype
// }
//
// SentientBeing.prototype.sayHello() = sayHello();
//
// // TODO: create three subclasses of SentientBeing, one for each
// // species above (Klingon, Human, Romulan).
// function Klingon() {
//   this.spokenLanguage = 'klingon';
//   this.homePlanet = 'Qo\'nos';
// }
// Klingon.prototype = Object.create(SentientBeing.prototype);
// Klingon.prototype.constructor = Klingon;
// function Romulan() {
//   this.spokenLanguage = 'romulan';
//   this.homePlanet = 'Romulus';
// }
// Romulan.prototype = Object.create(SentientBeing.prototype);
// Romulan.prototype.constructor = Romulan;
// function Human() {
//   this.spokenLanguage = 'federation standard';
//   this.homePlanet = 'Earth';
// }
// Human.prototype = Object.create(SentientBeing.prototype);
// Human.prototype.constructor = Human;
//
// assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
//   'the klingon should hear nuqneH');
//
// // TODO: write five more assertions, to complete all the possible
// // greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: Sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
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
  // TODO: implement me using forEach
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
