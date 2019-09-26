let val;

/////   Children Elements   //// Traversing the DOM using children elements via html and node collections

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;
val = list.childNodes;  // childNodes includes html nodes and text break nodes for tag returns

/// nodeTypes  ///  1 - Element, 2 - Attribute (deprecated), 3 - Text node, 8 - Comment, 9 - Document itself, 10 - Doctype
val = list.childNodes[3].nodeType


val = list.children  //  children returns an html list of all children of the selectors

val = list.children[2].textContent = 'Hello changed'

val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;   //  eliminates text nodes in what is used
val = list.lastElementChild


/////   Parent Elements   //// Traversing the DOM using parent elements via html and node collections


val = listItem.parentNode  ///listItem = document.querySelector('li.collection-item:first-child')

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement  ///  Traversing up the DOM hierarchy by finding parent of parent element

val = listItem.nextElementSibling;  //  traverses across the hierarchy to access next sibling
val = listItem.previousElementSibling;  //  traverses across the hierarchy to access previous sibling


////  Creating Elements and inserting them in the DOM ////
//create element
const li = document.createElement('li');
//create class/id by adding className as a property to the object
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

// create a text node and append //  This is cool!!!
li.appendChild(document.createTextNode('Hello World from inside JS'))

// create a new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content'
link.innerHTML = '<i class="fa fa-remove"></i>'
// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li)


////  Removing and Replacing Elements in the DOM ////
const newHeading = document.createElement('h2');
newHeading.id =
  'task-title'
// add a new text node
newHeading.appendChild(document.createTextNode('Task-List'))
console.log(newHeading)
// get old heading
const oldHeading = document.getElementsById('task-title')
// identify parent element as a variable
const cardAction = document.querySelector('card-action')
// replace old variable with new variable
cardAction.replaceChild(newHeading, oldHeading)










console.log(li
)