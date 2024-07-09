
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

var dd = 2;
{
 var ee = 20;
}
console.log(dd) // 2

try {
  console.log(ee) // undefined
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

//Array Spread Operator
const list = [1, 2, 3];
foo(...list);
const myfoo = (a, b, c) =>{ 
//do something 
 }

//Object Spread Operator vs Object.assign:
const obj1 = { name: 'Fabio' } 
const obj2 = { surname: 'Rossi' }
// clone objects
const cloneda = { ...obj1 }
const clonedb = Object.assign ({}, obj1)
// merge objects
const mergea = Object.assign ({}, obj1, obj2, { id: 123 } )
const mergeb = {...obj1, ...obj2, id: 123}

//Arrow Functions
const pow = a => a * a;
const add = (a, b) => a + b;
const divide = (a = 0, b = 1) => {
 return a / b
}
 
const getUser = () => ({name: "Paolo"})

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
   const mylist2 = [
    { label: 'Fabio' },
    { label: 'Lisa' },
   ];
   // ES5 for...in (avoid, you should use it just for objects)
   for (const key in mylist2) {
    console.log( list[key].label ); // 0 Fabio, 1 Lisa
   }
   // ES6 for...of 
   for (const user of mylist2) {
    console.log( user.label ); // Fabio, Lisa
   }

   //Map
   const usersmap7 = new Map();
const myInstance = {}; // any instance
usersmap7.set( 100, { label: 'Silvia' } );
usersmap7.set( myInstance, { someValue: 123 } );
console.log(usersmap7.get( 100 )); // { "label": "Silvia" }
console.log(usersmap7.get( myInstance )); // { “someValue”: 123 }
console.log(usersmap7.size); // 2

// Promise

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
   const ab = new MyClass()
   ab.hello('Fabio') // Hi Fabio
   
//   Module: import / export
//import { doSomething } from ‘./path/fileName’
//export function doSomething() { }

//Module: export default
//import AnyName from ‘./path/fileName’
// export class
//export default class MyComponent { }
// or functions:
//const myadd = (a, b) => a + b;
//export default myadd;
// or more concise:
//export default (a, b) => a + b;

//Module: import all
//import * as Utils from ‘./path/fileName’

//Immutability

const users = [
    { id: 1, name: 'Silvia' },
    { id: 2, name: 'Fabio' },
    { id: 3, name: 'Lorenzo' }
   ];
   // ADD
   //const userz6 = { id: 5, name: 'Lisa' }
   //const resultz1 = [...userz6, userz6] //TODO: why does not work?

   // DELETE
   const id = 2;
   const resultz2 = users.filter(user => user.id != id)
   // EDIT
   const updatedUser = {id: 1, name: 'Paolo' }
   const resultz3 = users.map(user => {
    return user.id === updatedUser.id ? updatedUser : user
   })
   