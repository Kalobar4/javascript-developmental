////////  TRAVERSING THE DOM AND EVENT OBJECTS  ////////////

/////   Children Elements   //// Traversing the DOM using children elements via html and node collections


// let val;
// const list = document.querySelector('ul.collection')
// const listItem = document.querySelector('li.collection-item:first-child');
// val = listItem;
// val = list;
// val = list.childNodes;  // childNodes includes html nodes and text break nodes for tag returns

// /// nodeTypes  ///  1 - Element, 2 - Attribute (deprecated), 3 - Text node, 8 - Comment, 9 - Document itself, 10 - Doctype
// val = list.childNodes[3].nodeType


// val = list.children  //  children returns an html list of all children of the selectors

// val = list.children[2].textContent = 'Hello changed'

// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;   //  eliminates text nodes in what is used
// val = list.lastElementChild


// /////   Parent Elements   //// Traversing the DOM using parent elements via html and node collections


// val = listItem.parentNode  ///listItem = document.querySelector('li.collection-item:first-child')

// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement  ///  Traversing up the DOM hierarchy by finding parent of parent element

// val = listItem.nextElementSibling;  //  traverses across the hierarchy to access next sibling
// val = listItem.previousElementSibling;  //  traverses across the hierarchy to access previous sibling


// ////  Creating Elements and inserting them in the DOM ////
// //create element
// const li = document.createElement('li');
// //create class/id by adding className as a property to the object
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');

// // create a text node and append //  This is cool!!!
// li.appendChild(document.createTextNode('Hello World from inside JS'))

// // create a new link element
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content'
// link.innerHTML = '<i class="fa fa-remove"></i>'
// // Append link to li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li)


// ////  Removing and Replacing Elements in the DOM ////
// const newHeading = document.createElement('h2');
// newHeading.id =
//   'task-title'
// // add a new text node
// newHeading.appendChild(document.createTextNode('Task-List'))
// console.log(newHeading)
// // get old heading
// const oldHeading = document.getElementsById('task-title')
// // identify parent element as a variable
// const cardAction = document.querySelector('card-action')
// // replace old variable with new variable
// cardAction.replaceChild(newHeading, oldHeading)

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// lis[0].remove();
// list.removeChild(lis[3]);


////  DYNAMIC GENERATION OF CLASSES AND ATTRIBUTES ////

/// CLASSES
// const firstLi = document.querySelector(li: first - child);
// const link = firstLi.children[0];
// let val = link.className;  // string of classes
// let val = link.classList  // dom token list which can be accessed like an array
// let val = link.classList[0]
// link.classList.add('test') // to add a class to the dom token list
// link.classList.remove('test') // to remove a class from the dom token list

// /// ATTRIBUTES
// val = link.getAttribute('href')
// val = link.hasAttribute('href')  // true or false
// val = link.setAttribute('href', 'http://google.com')




/////  EVENT LISTENERS AND THE EVENT OBJECT ////

// document.querySelector('.clear-tasks').addEventListener('click', function (e){
//   e.preventDefault()
// })

// function onClick(e) {
//   e.preventDefault();
//   console.log('clicked and screen prevented from refresh')
// }

// document.querySelector('.clear-tasks').addEventListener('click', onClick)  // passes click event name and onClick function

// // let val;
// val = e;  //  the event object
// //  Event target element
// val = e.target  //  
// val = e.target.classList  // list of classes can be used to change bootstrap characteristics etc.
// val = e.target.innerHTML
// val = e.timeStamp
// val = e.clientY  // location relative to window
// val = e.clientX  // location relative to window
// val = e.offsetY  // location relative to button itself (like padding)
// val = e.offsetX  // location relative to button itself (like padding)


//// MOUSE EVENTS ////

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5')

// // Click
// clearBtn.addEventListener('click', runEvent)
// // Double click
// clearBtn.addEventListener('dblclick', runEvent)
// // Mousedown click and hold
// clearBtn.addEventListener('mousedown', runEvent)
// // Mouseup click and release
// clearBtn.addEventListener('mouseup', runEvent)
// // Mouseenter
// card.addEventListener('mouseenter', runEvent)
// //mouseleave
// card.addEventListener('mouseleave', runEvent)
// //mouseover
// card.addEventListener('mouseover', runEvent)
// //mouseout
// card.addEventListener('mouseout', runEvent)
// //mousemove
// card.addEventListener('mousemove', runEvent)


// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`)
//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb ${e.offsetx}, ${e.offsetY}, 40`
// };


// /////  FORMS and INPUT EVENTS /////

// //Set up Selectors as variables to denote elements to change
// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task')
// //Set up Event Handler
// form.addEventListener('submit', runEvent);
// function runEvent(e) {
//   e.preventDefault();
//   console.log(taskInput.value)
//   console.log(`Event Type: ${e.type}`)
//   heading.innerText = e.target.value; //  Important this is like data binding that allows you to real time update the input box with the user input 
//   taskInput.value = ''  // clear input after form submission
// };

// //////  EVENTS
// //Keydown
// taskInput.addEventListener('keydown', runEvent);  //  This will capture every letter pressed down  /// the target.value will add each key as well
// //Keyup
// // taskInput.addEventListener('keyup', runEvent);
// //Keypress
// // taskInput.addEventListener('keypress', runEvent);

// // // Focus event
// // taskInput.addEventListener('focus', runEvent);  // when you click inside an element like to input text

// // // Blur event
// // taskInput.addEventListener('blur', runEvent);  // when you click outside an element like to input text after being inside

// // Cut
// taskInput.addEventListener('cut', runEvent);  // when you ctrl c

// // Paste
// taskInput.addEventListener('paste', runEvent);  // when you ctrl v

// // Input captures all event types
// taskInput.addEventListener('input', runEvent);  // captures all event types


// // Change  notifies of a change in an dropdown value selection
// const select = document.querySelector('select')
// select.addEventListener('change', runEvent2)

// function runEvent2(e) {
//   e.preventDefault();
//   console.log(e.target.value);
// }


// /////  EVENT BUBBLING AND EVENT DELEGATION ///////

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card-title')
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card-content')
// });

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card')
// });

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col')
// });

// /// Click events bubble up the parent hierarchy and sequentially trigger events in each DOM node


// ////  Event Delegation
// // placing event listener on a parent and then delegate down //
// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem);
// function deleteItem() {
//   console.log('item deleted')
// }

// /// Event listeners only work on the first element identified so for cases where you have a list of items, or for cases where the impacted element is dynamically generated,  EVENT HANDLERS NEED TO USE DELEGATION ///

// // document.body.addEventListener('click', deleteItem);
// // function deleteItem(e) {
// //   e.preventDefault()
// //   console.log(e.target)
// //   if (e.target.parentElement.className === 'delete-item secondary-content') {
// //     console.log('items deleted')
// //   }
// // }
// ///// USE THIS METHOD >>>
// document.body.addEventListener('click', deleteItem);
// function deleteItem(e) {
//   e.preventDefault()
//   console.log(e.target)
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

















