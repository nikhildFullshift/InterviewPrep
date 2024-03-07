// Js has 2 version ES5 and ES6

// let, const were added in ES6

// Scope - Var is function scoped  ,let/const are block scoped

function abc() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  //var i is accessible through out the function
  // let here will give error
  console.log(i);
}

abc();

//var adds itself to window object ,but others don't exposes data to browser

//The window object is a global object that has the properties pertaining to the
// current DOM document, which is what's in the tab of a browser.

//has features related to browser and dom

// ---- Browser Context API
// It has window,stack and heap memory

// to store intermediary values and data -- heap memory is stored

// Execution Context is a container which gets created where the function is executed,
// 1. variables
// 2. functions inside scope
// 3. Lexical Env (shows which things can be accessed)

function solve() {
  var a = 1;
  function solve2() {
    var a = 2;
    console.log("Avalue", a);
  }
  solve2();
  console.log("ABVCA", a);
  // console.log(b); -- gives not defined
}

solve();

// How to copy reference array
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];
arr2.pop();

if (-1) {
  console.log("TRUE");
}
console.log(arr1, arr2);

// Truthy  and falsy
// false - 0,false,undefined,null,document.all,Nan
// true - rest all are

// Switch case

switch (1) {
  case 1:
    break;
}

// foreach forin
const a = [1, 2, 3];
// immutable
a.forEach((item) => console.log(item));

for (const item of a) {
  console.log(item);
}

// of gives value -- in gives index in arrays
const obj = {
  name: "Nikhil",
  age: "23",
};

for (const key in obj) {
  console.log(key, obj[key]);
}

//callbacks --  when you depend on 3rd party for work
//                or response time is not predictable
setTimeout(() => {
  console.log("Arrived");
}, 1000);

//first class function -- store function as value
const firstclass = function (a) {
  a();
};

firstclass(function () {
  console.log("HEYY");
});

//array are objects

var arr = [1, 2, 3];
// arr = {
//     0 : 1,
//     1 : 2,
//     2 : 3
// }
arr[-1] = 8;
console.log(arr);

//delete object prop

const newObj = {
  name: "Nikhil",
  age: 22,
};

delete newObj.age;
console.log(newObj);
