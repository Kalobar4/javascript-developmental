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
/// Single Element Selector Methods on the document object ///  .getElementById() and .querySelector()

let element = document.getElementById('task-title')

// get attributes on a DOM element
console.log(document.getElementById('task-title').className);

// change style on a DOM element
element.style.background = '#333'
element.style.color = '#fff';
element.style.padding = '5px';

// document.getElementById(task - title).style.display = "none";  // to make an element disappear (typically hooked to an event such as onclick etc.)

///  textContent, innerText, innerHTML

element.textContent = `Task List for ${new Date()}`

///  document.querySelector( )
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h2'))  // will select by . # or by element name.  But will only return the first element matching criteria  //  bc This is a single element selector.
// you can also select nested elements
document.querySelector('ul li').style.color = 'blue';
// and use pseudo to select parent/child elements
// document.querySelector('li: last-child').style.color = 'blue'
// specify nth child using css 3
// document.querySelector('li: nth-child(3)').style.color = 'green';
// document.querySelector('li: nth-child(4)').textContent = '4th element new child name';


////  DOM Manipulation //// 
/// Multi Element Selector Methods on the document object ///  .getElementsByClassName() and .getElementsByTagName()

// const items = document.getElementsByClassName("card-title");
// console.log(items)
// console.log(items[0])
// items[0].style.color = 'green';
// items[3].textContent = '4th element new child name'

const listItems = document.querySelector('ul').getElementsByClassName('card-title')

console.log(listItems, 'limited range selector')

// document.getElementsByTagName
let lis = document.getElementsByTagName("li");
console.log(lis)
console.log(lis[0])
lis[0].style.color = 'blue';
lis[3].textContent = '4th element new child name'

// Note However that html collections are not arrays  - so you will get xxx is not a function if you try and use array methods on it.

//
lis = Array.from(lis)  //  to convert array-obj into true array
lis.reverse()  // execute array reverse method on it
console.log(lis);

// lis.forEach(function(li){
//   console.log(li.className);
//   li.textContent = `Index: ${index} now reversed order`
// })   // to loop through list items and change their content...


/////  QuerySelectorAll

const items = document.querySelectorAll('ul.collection.li.collection-item')  // same as li now output as a node list
console.log(items);
// array method on node list
items.forEach(function (item) {
  // item.textContent = `Index: ${index} now reversed order`;
  console.log(item)
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc'
});
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.backgroun = '#f4f4f4'
};






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

// // continue
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('Two is my favorite number, but I won\'t print it');
//     continue;    //  continue returns that iteration w o executing anything further for that round
//   }
//   console.log('Number :' + i);
// }

// // while  // only condition goes in (); increment should be inside execution block.  === best to use a while loop when you don't know for certain the number of iterations that you will need.  a for loop when it is defined.
// // let i = 0
// // while (i < 10) {
// //   console.log('Number ' + i);
// //   i++
// // };

// // do while -- same as while loop but always runs 1x
// // let i = 0;
// // do {
// //   console.log('Number: ' + i)
// // }
// // while (i < 10);




// // Array for loops
// const cars = ['ford', 'chevy', 'mazda', 'toyota', 'bmw']

// /// LOOP THROUGH AN ARRAY
// /// For Loop
// // for (i = 0; i < cars.length; i++) {
// //   console.log(cars[i])
// // };

// ///For Each Loop - takes in a cb to execute on each item

// // cars.forEach(function (car, index, array) {
// //   console.log(`Index ${index}: ${car}`)
// //   console.log(array)
// // })

// ////  For In Loop for Objects
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for (let x in user) {
//   console.log(`key is ${x}`)  // x is the key
//   console.log(`value is ${user[x]}`)  // x is the value
//   console.log(`object is ${x} : ${user[x]}`)
// }





















