// //  Function Declarations
// function greet(firstName = 'John', lastName = 'Doe') {
//   return 'Hello ' + firstName + ' ' + lastName;
// }
// console.log(greet('Ruby'));

// // Function Expressions
// const square = function (x = 3) {
//   return x * x
// }
// console.log(square())  // Remember that expressions have benefits re: hoisting and closures.

/// IIFE  Immediately Invokable Function Expressions  === an anonymous function wrapped in parenthesis to make them invokable.
// (function (name) {
//   console.log('Hello ' + name)
// })('Brad')

/// PROPERTY METHODS
// const todo = {
//   add: function (id) {
//     console.log(`Add todo ${id}`)
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`)
//   }
// }

// todo.add(5)
// todo.edit(22)

// // define a method outside of object on the fly
// todo.delete = function (id) {
//   console.log(`Deleting todo id ${id}`)
// }





///  LOOPS /// FOR, WHILE, DO WHILE and FOR IN

// continue
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('Two is my favorite number, but I won\'t print it');
    continue;    //  continue returns that iteration w o executing anything further for that round
  }
  console.log('Number :' + i);
}

// while  // only condition goes in (); increment should be inside execution block.  === best to use a while loop when you don't know for certain the number of iterations that you will need.  a for loop when it is defined.
// let i = 0
// while (i < 10) {
//   console.log('Number ' + i);
//   i++
// };

// do while -- same as while loop but always runs 1x
// let i = 0;
// do {
//   console.log('Number: ' + i)
// }
// while (i < 10);




// Array for loops
const cars = ['ford', 'chevy', 'mazda', 'toyota', 'bmw']

/// LOOP THROUGH AN ARRAY
/// For Loop
// for (i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// };

///For Each Loop - takes in a cb to execute on each item

// cars.forEach(function (car, index, array) {
//   console.log(`Index ${index}: ${car}`)
//   console.log(array)
// })

////  For In Loop for Objects
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`key is ${x}`)  // x is the key
  console.log(`value is ${user[x]}`)  // x is the value
  console.log(`object is ${x} : ${user[x]}`)
}













