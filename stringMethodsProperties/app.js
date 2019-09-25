// /// STRING METHODS & PROPERTIES  ///
// const firstName = "Brad";
// val = firstName.length  // .length is a string property so no () needed
// console.log(val);

// const lastName = " Evans";
// val = firstName.concat(' ', lastName);  // .concat() is a method to concatenate 
// console.log(val);

// // Change case Methods
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// //  Index values of strings
// //  find value of string letter index
// val = firstName[2]
// val = firstName.indexOf('r')
// val = firstName.lastIndexOf('a')

// val = firstName.charAt('2')
// val = firstName.charAt(firstName.length - 1)  // to get the last character of a string

// // substring()
// val = firstName.substr(0, 4);
// //slice()
// val = firstName.slice(0, 4)
// val = firstName.slice(-3)  // starts from the back and takes the last 3 letters

// //split//**** */
// const str = 'hello there. my name is brad'
// val = str.split(' ')
// console.log(val);
// const tags = 'web design, web development, web programming'
// val = tags.split(',')
// console.log(val);

// // replace() - returns a new string, does not transform original
// val = str.replace('hello there.', 'hi ya,')
// console.log(val)

// // includes()  - returns a boolean value
// val = str.includes('hi')
// console.log(str);
// console.log(val)
// val = str.includes('hello')
// console.log(str);
// console.log(val);




/// Appending  ///
// const firstName = "Brad";
// const lastName = " Evans";
// let val;
// val = firstName
// val += lastName

// // Output
// console.log(val);
// console.log(typeof val)
// console.log(val.length)

// /// Escaping ///
// let val = 'That\'s awesome, I can\'t wait'
// console.log(val);


/// String Literals /// Also called Template Literals
//// ES5
// var html =
//   '<ul' +
//   '<li> Name: ' + name + '</li>' +
//   '<li> Age: ' + age + '</li>' +
//   '<li> Email: ' + email + '</li>' +
//   '<li> City: ' + city + '</li>';
// // ES6  // function hello (){return 'hello'};
// var html = `
//   <ul>
//     <li> Name: ${name} </li>
//     <li> Age: ${age} </li>
//     <li> Email: ${email} </li>
//     <li> Math Result: ${2 + 2} </li>
//     <li> Function Output: ${hello()} </li>
//     <li> Ternary Output: ${age > 30 ? 'Over 30' : 'Under 30'}
//   `











/// Math Object Calculations ///

// const num1 = 100;
// const num2 = 50;
// let val;

////Math Object -- includes both properties PI:3.14, and methods ROUND: fn(round a number)
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.1);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);  //8^2
// val = Math.max(2, 33, 4, 55, 6, 3, -2);
// val = Math.min(2, 33, 4, 55, 6, 3, -2);
// val = Math.floor(Math.random() * 20 + 1);


// // Output
// console.log(val);
// console.log(typeof val)
// console.log(val.length)





















///  Console Commands ///

// console.log("Hello World")
// console.log(123)
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting)
// console.log([1, 2, 3, 4, 5, 6]);
// console.log({
//   a: 1, b: 1, c: 1
// });
// console.table({
//   a: 1, b: 2, c: 3
// });
// console.error('This is an error')
// console.warn('This is a warning')
// console.clear();