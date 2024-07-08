
// node myScript.js

// let
let a=1;
a=2;
console.log(a);

//const
const b={name:'Fabio'}

try {
    b={name:'Paolo'} //generate exception
} catch (error) {
  console.log(error.message);
}

b.name='Ciro'; // allow but don't do it
console.log(b);

//Block Scope
const mylist  = [1, 2, 3];
const foo = (a, b, c) => { 
    // do something 
    console.log(a,b,c);
 }
 foo(...mylist);
//Array Spread Operator
let d = 2;
{
 let e = 20;
}
console.log(d) // 2
try {
console.log(e) // undefined
} catch (error) {
  console.log(error.message);
}


//Template Literals
const name2 = 'Fabio';
const age2 = 21;
console.log( `${name2} is ${age2 * 2}` ); 
// clone objects
const object1 = { name: 'Fabio' } 
const object2 = { surname: 'Rossi' }
const cloned0 = { object1 }
const cloned1 = { ...object1 }
const cloned2 = Object.assign ({}, object2)
console.log(JSON.stringify(cloned0));
console.log(JSON.stringify(cloned1));
console.log(JSON.stringify(cloned2));

// merge objects
const merge1 = Object.assign ({}, object1, object2, { id: 123 } )
console.log(merge1);
const merge2 = {...object1, ...object2, id: 123}
console.log(merge2);

// Object Spread Operator vs Object.assign: 
const user = {
 name2: 'Fabio',
 surname2: 'Rossi',
 coords2: { lat: 43, lng: 12 }
};


// Fabio Rossi Admin 43 12
//Destructuring
const name4 = 'Fabio'
const surname4 = 'Rossi'
const params = { name4, surname4 }
/*
//Array Spread Operator
const list = [1, 2, 3];
foo(...list);
foo(a, b, c) { 
//do something 
 }

//Object Spread Operator vs Object.assign:
const obj1 = { name: 'Fabio' } 
const obj2 = { surname: 'Rossi' }
// clone objects
const cloned1 = { ...obj1 }
const cloned2 = Object.assign ({}, obj1)
// merge objects
const merge1 = Object.assign ({}, obj1, obj2, { id: 123 } )
const merge2 = {...obj1, ...obj2, id: 123}

Arrow Functions
const pow = a => a * a;
const add = (a, b) => a + b;
const divide = (a = 0, b = 1) => {
 return a / b
}
 
const getUser = () => ({name: ‘Paolo})

//Array methods (map, filter, …)
const userstot = [
    {"name": "Lisa", "age": 35},
    {"name": "Silvia", "age": 2},
    {"name": "Fabio", "age": 25},
   ]
   const resulttot = userstot.filter(user => user.age > 18)
    .map(user => user.name)
   // output ["Lisa", "Fabio"]

  // For…in vs For…of
   const list = [
    { label: 'Fabio' },
    { label: 'Lisa' },
   ];
   // ES5 for...in (avoid, you should use it just for objects)
   for (const key in list) {
    console.log( list[key].label ); // 0 Fabio, 1 Lisa
   }
   // ES6 for...of 
   for (const user of list) {
    console.log( user.label ); // Fabio, Lisa
   }

   //Map
   const usersmap = new Map();
const myInstance = {}; // any instance
usersmap.set( 100, { label: 'Silvia' } );
usersmap.set( myInstance, { someValue: 123 } );
console.log(usersmap.get( 100 )); // { "label": "Silvia" }
console.log(usersmap.get( myInstance )); // { “someValue”: 123 }
console.log(usersmap.size); // 2

// Promise
/*
const doStuff = new Promise((resolve, reject) => {
    // asynchronous stuff (i.e. XHR request, timers, ...)
    setTimeout(() => resolve('hello'), 2000);
   });
   doStuff.then(
    res => console.log(res), // hello
    err => console.log(err), // some error messages
   );

   //Class
   class MyClass {
    hello(name) {
    console.log(`Hi ${name}`)
    }
   }
   const a = new MyClass()
   a.hello('Fabio') // Hi Fabio
   
//   Module: import / export
import { doSomething } from ‘./path/fileName’
export function doSomething() { }

Module: export default
import AnyName from ‘./path/fileName’
// export class
export default class MyComponent { }
// or functions:
const add = (a, b) => a + b;
export default add;
// or more concise:
export default (a, b) => a + b;

Module: import all
import * as Utils from ‘./path/fileName’

Immutability

const users = [
    { id: 1, name: 'Silvia' },
    { id: 2, name: 'Fabio' },
    { id: 3, name: 'Lorenzo' }
   ];
   // ADD
   const user = { id: 5, name: 'Lisa' }
   const result = [...users, user]
   // DELETE
   const id = 2;
   const result = users.filter(user => user.id != id)
   // EDIT
   const updatedUser = {id: 1, name: 'Paolo' }
   const result = users.map(user => {
    return user.id === updatedUser.id ? updatedUser : user
   })
   */