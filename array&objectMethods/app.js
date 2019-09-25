// /// Array and Object METHODS & PROPERTIES  ///


//// ARRAYS ////

// const numbers = [43, 56, 33, 23, 44, 36, 5]
// const numbers2 = new Array(22, 45, 33, 76, 54)
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()]

// let val;

// val = numbers.length;
// val = Array.isArray(numbers);  //confirm if returned object is array
// val = numbers[3];

// /// MUTATING ARRAYS ///
// numbers[2] = 100;  //  NOTE ARRAYS ARE MUTABLE AND VALUES CAN BE HARD CHANGED
// numbers.push(250) // pushes to end of array
// numbers.unshift(120) // pushes to front of array
// numbers.pop() // removes from end
// numbers.shift() // removes from start

// //  splice values 
// numbers.splice(1, 3);
// // reverse an array
// numbers.reverse()  // reverses the order of an array

// // concatenate
// val = numbers.concat(numbers2);

// // sort arrays
// val = fruit.sort() //  sorts alphabetically or numerically by first number

// // Use compare function
// val = numbers.sort(function (a, b) { return a - b })  //  -- if the return number is negative, A will be shown before B  -- if the return number is 0, A and B will remain in the same order as when they entered the loop -- if the return number is positive, B will be shown before A.

// const characters = [
//   { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
//   { name: 'Bart Simpson', birthdate: 1989, death: 2017 },
//   { name: 'Holden Caufield', birthdate: 1951, death: 1992 },
//   { name: 'Tom Joad', birthdate: 1939, death: 1967 },
//   { name: 'Peter Griffin', birthdate: 1999, death: 2017 }
// ];

// const oldestCharacters = characters.sort(function (a, b) {
//   const lastPerson = a.death - a.birthdate;
//   const nextPerson = b.death - b.birthdate;
//   if (lastPerson > nextPerson) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.table(oldestCharacters);



//// OBJECTS ////

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'ss@gmail.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'Florida'
//   },
//   date: new Date(),
//   getBirthYear: function () {
//     return this.date.getFullYear() - this.age;
//   }
// }

// let val;
// val = person
// val = person.firstName;
// console.log(val);
// val = person.age;
// console.log(val);
// val = person.hobbies[1];
// console.log(val);
// val = person.address.state;
// console.log(val);
// val = person.address['city'];
// console.log(val);
// val = person.getBirthYear();
// console.log(val);


/// ARRAYS OF OBJECTS
// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Henry', age: 23 },
//   { name: 'Nancy', age: 40 }
// ]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name)
// }

// /// DATES AND TIMES OBJECTS
// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981')
// birthday = new Date('September 10 1981')
// val = birthday;
// console.log(birthday);

// val = today.getMonth() // this is zero based so January is 0 and October is 9
// val = today.getDate() // returns the date of the month
// val = today.getDay()  // numerical representation Sunday 1, Monday 2 Tuesday 3 Wednesday 4
// val = today.getFullYear() // returns full year of a given date
// val = today.getHours() // returns hour of timestamp
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime()  //  returns the current timestamp as the number of seconds that have passed since January 1, 1970.

// // Setting Date Object values
// birthday.setMonth(10)
// birthday.setDate(25)
// birthday.setFullYear(1985)
// birthday.setHours(2)
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday);







