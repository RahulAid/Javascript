// HigherOrderFunctions

//Assign a function to a variable originalFunc
//const originalFunc = (num) => { return num + 2 };

//Re-assign the function to a new variable newFunc
//const newFunc = originalFunc;

//Access the function's name property
//newFunc.name; //'originalFunc'

//Return the function's body as a string
//newFunc.toString(); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
//newFunc.isMathFunction = true;

//Pass the function as an argument
//const functionNameLength = (func) => { return func.name.length }; 
//functionNameLength(originalFunc); //12

//Return the function
//const returnFunc = () => { return newFunc };
//returnFunc(); //[Function: originalFunc]

//===============================================================================

//The .reduce() Method - The .reduce() method iterates through an array and returns a single value.

//const arrayOfNumbers = [1, 2, 3, 4];

//const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  //return accumulator + currentValue;
//});

//console.log(sum); // 10

//==============================================================================

//The .forEach() Method - The .forEach() method executes a callback function on each of the elements in an array in order.

//const numbers = [28, 77, 45, 99, 27];

//numbers.forEach(number => {  
  //console.log(number);
//}); 

//===============================================================================

//The .filter() Method - The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

//const randomNumbers = [4, 11, 42, 14, 39];
//const filteredArray = randomNumbers.filter(n => {  
  //return n > 5;
//});

//====================================================================================================

//The .map() Method - The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.The original array does not get altered, and the returned array may contain different elements than the original array.

//const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
//const announcements = finalParticipants.map(member => {
  //return member + ' joined the contest.';
//})

//console.log(announcements);