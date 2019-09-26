
/////// WINDOWS / OBJECTS / PROPERTIES  ===  DOM interaction in client side JS window engine using v8 ///////


/// DOM Dimensions
let val;
val = window.outerHeight;
val2 = window.outerWidth;
val3 = window.innerHeight;
val4 = window.innerWidth;

val5 = window.scrollY  // <div style = "margin-top: 1000px"></div>
val6 = window.scrollX  // <div style = "margin-left: 1000px"></div>   // good for those websites when you scroll down and have animations to let you know where the user is.

val = window.location;
val = window.location.hostname
val = window.location.port
val = window.location.href
///  User query parameters to interact!!!
val = window.location.search  //  the user's query info ?id =1&name=Brad&member=standard etc.

/// Using the window object to reload and redirect w in a function (not globally or it will keep refreshing)
//  window.location.reload()
// window.location.href = 'http://google.com'

// window.history.go(-1);  
// val = window.history.length;

/// Navigator Object /// geolocation, userAgent browser type, .platform  - Darwin for Mac win32 for Windows


///  Window.document properties
val = document;
console.log(val);

// html collection, node lists 
val = document.all
console.log(val);
val = document.body;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;  // returns an array of all forms in the DOM
// val = document.forms[0].method  // get post etc
// val = document.forms[0].action
// val = document.forms[0].id

// val = document.links  // array of links in the DOM
// console.log(val);
// val = document.links[0].id
// val = document.links[0].className
// val = document.links[0].classList

// val = document.scripts // array of scripts in an window DOM
// val = document.scripts[1]
// val = document.scripts[1].getAttribute('src')
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'))
// })
// console.log(val);


////  DOM Manipulation //// 
/// Single Element Selector Methods ///  .getElementById() and 

// get attributes on a DOM element
console.log(document.getElementById('task-title').className);

// change style on a DOM element
document.getElementById('task-title').style.background = '#333'
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';














//////////  FUNCTION REVIEW  ///////////



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





















