// console.log("Hello World! I Don't Give a Bug");  
// for print on the console


// let const and var are the variable  of the  JavaScript language, but they have different purposes:
// - "var" is used when you want to declare a variable that can change its value throughout its scope (from where it was declared until the
// - "const" is used to declare constants in JavaScript which means that you can not change its value once it has been assigned. It helps prevent
// A constant is a variable that cannot be reassigned. 

// var message = "hello world";
// var age = "Done";
// console.log(age);
// age = 18;
// console.log(age);



// function en() {
//     var message = "hello world";
//     var age = "Done";
//     console.log(age);
//     age = 18;
//     console.log(age);
// }
// en();
// console.log(age);     //this is undefine


// For Loop


// function ev() {
//     for (var i = 0; i < 5; i++) {
//         console.log('--', i);
//     }
//     console.log(i);
// }
// ev();


// var is function scope


// let message = "Hello"
// console.log(message);

//     for (let i = 0; i < 5; i++) {
//         console.log('--', i);
//     }
//     console.log(i);
// ev();

//  let is  { block scope }

// const message="hello";
// console.log(message);

// const can not change  the value and block scope  

// Message = 'world';  // by default it is var....
// console.log(Message);


// let x = '20';
// console.log(typeof x, x)
// x = 20;
// console.log(typeof (x));


// let age = 'abcd';
// age = 'abbd';
// console.log();


// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr[1]);
// console.log(...arr);


// let str = "12";
// let age = 20;
// let and = age + str;
// console.log(and);
// and = str / age;
// console.log(and);


// let str = 12;
// console.log(str + 5);

// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 4))



// let str = '12';
// let p = parseInt(str);
// let n = Number(str);
// console.log(p, n);


// let a = '12';
// let b = 12;
// if (a == b) {
//     console.log("Yes");
// }
// else {
//     console.log("No")
// }
// if (a === b) {
//     console.log('Yes again');
// }
// else {
//     console.log('No again');
// }



// let a = ['a', 'b', 'c']
// let b = [...a];
// if (a == b) {
//     console.log("Yes");
// }
// else {
//     console.log("No")
// }
// if (a === b) {
//     console.log('Yes again');
// }
// else {
//     console.log('No again');
// }


// const str = 'khan';
// const name = 'my name is';
// console.log(name + ": :" + str);

// const str = 'khan';
// const unserName = 'my name';
// const ans = `${unserName} ${str}`;
// console.log(ans);
// const hi = 'hello is'
// const hellow = 'helloworld is';
// const asns = `${unserName} ${str} ${hi} ${hellow}`;
// console.log(asns);


// function in JS


// // function test(x = "nothing is here") {  //default value
// function test(x = "nothing is here") {
//     console.log(x);

// }

// const s = 'hello';
// // test(s);
// test(s);
// // test("hello");



// function sum(a, b) {
//     if (a && b) {
//         console.log(a + b);
//     }
//     else {
//         console.log(a)
//     }

//     // console.log(a + b);
// }
// sum(2,4);


// let a = 1;
// let a = 0;
// let a = undefined;
// let a = null;
// if (a) {
//     console.log('true');
// }
// else {
//     console.log('false')
// }



// function declaration
// print();

// function print() {
//     console.log('---');

// }
// // function assignment  ( anonymous)
// const a = function print() {
//     console.log('++');
// }
// a();
// print();



// arrow function

// prints();

// () => {
//     console.log('---');

// }
// // function assignment  ( anonymous)
// const a = () => {
//     console.log('++');
// }
// a();
// prints();


// Switch cASE


// let a = 1;


// switch (a) {
//     case 1: {
//         console.log("this is 1");
//         break
//     }
//     case 2: {
//         console.log("this is 2");
//         break
//     }
//     case 3: {
//         console.log("this is 3");
//         break

//     }
//     case 4: {
//         console.log("this is 4");

//         break
//     }
//     default: console.log('default');

// }


//  OBJECTS

// const obj = new Object();
// obj[12] = 'twelve';
// obj[1] = 'one';
// obj[2] = 'two';
// obj[10] = 'ten';
// obj['name'] = 'helo';
// console.log(obj);



// const obj = {

//     12: 'twelve',
//     1: 'one',
//     2: 'two',
//     10: 'ten',
//     name: 'hello',
//     2.1: "234"

// };
// console.log(obj);



// const obj = {
//     'firstName': 'Ajay',
//     'lastName': 'Singh',
//     'Age': 20,
// };

// const fulname = obj.firstName + ' ' + obj.lastName+' '+ obj.Age;
// console.log(fulname);


// const x = prompt('Please tell me');
// console.log(x);

const firstName = prompt('enter the first name');
const lastName = prompt('enter the last name');

