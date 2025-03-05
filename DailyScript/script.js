// Promise Chaining
/* new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
    .then((result) => {
        console.log(result);
        return result * 2;
    })
    .then((result) => {
        console.log(result);
        return result * 3;
    })
    .then((result) => {
        console.log(result);
        return result * 4;
    }) */


// -----Promise.all()-----
// ---------------------------------
/* const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000)
})
const Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(145), 1000)
})


Promise.all([Promise1, Promise2, Promise3]).then((result) => { console.log(result) }).catch((err) => {
    console.log(`the error is found and the error is ${err}`)
})  */



// ----------Promise.race()---------

/*const Promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("1 Sec delay..."),1000)
})
const Promise2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("3 Sec delay..."),500)
})

// will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first

Promise.race([Promise1,Promise2]).then((res) => console.log(res)) */



/* let user = {
    firstName:"Bhavik",
    surName : "Tembhare"
}
console.log(user);

delete user.surName;

console.log(user); */


// console.log(typeof("Strn"));
// console.log( typeof([1,32,4]) );


/* let user = undefined;
console.log(user);
console.log(typeof(user)); */

/* let user = null;
console.log(user);
console.log(typeof(user)); */

// -----eval()------
// console.log(eval("1 + 43 "))

/* const btn1 = document.getElementById('forward');
const btn2 = document.getElementById('backward');

btn1.addEventListener('click',() =>{ window.history.forward(); })

btn2.addEventListener('click',() =>{ window.history.back(); }) */


/* const enterInput = (e) =>{
    var flag = e.getModifierState("CapsLock");
    if(flag){
        document.getElementById('feedback').innerHTML = 'CapsLock activated';
    }else{
        document.getElementById('feedback').innerHTML = "CapsLock not activated";
    }
} */


// console.log(isNaN(100));
// console.log(isNaN("String"));
// let ab;

// console.log(ab);



// console.log(isFinite(Infinity));
// console.log(isFinite(100))

/*const parent = document.querySelector('div');
const child = document.querySelector('button');

parent.addEventListener('click',() =>{
    console.log("parent");
})

child.addEventListener('click',(e) =>{
    console.log("child");
    e.stopPropagation();
})

const list = document.querySelector('.list');

list.addEventListener('click',(e) =>{
    if(e.target.tagName == 'LI'){
        alert(`You clicked on ${e.target.textContent}`);
    }
}) */


// --------Event Capturing---------
/* const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandParent.addEventListener('click',() =>{
    console.log("Capturing Phase");
},true);

parent.addEventListener('click',() =>{
    console.log('bubbling Phase');
})

child.addEventListener('click',() =>{
    console.log("Event Phase");
})  */


/* const input = document.querySelector('input');
console.log( input.getAttribute("value") );
console.log(input.value); */

// const greeting = () =>{alert("You clicked my bro")}

/* const secondDiv = (e) =>{
    console.log("You clicked on button");
    e.stopPropagation();
}

const firstDiv = () =>{console.log("clicked on Div")} */



/*const startTiming = () =>{

    // const time = setInterval(() =>{console.log("....")},2000)

    setTimeout(() => {
        console.log("you did it")
    }, 2000);

}*/


/* let form = document.querySelector('#registration-form');

form.addEventListener("input",(e) =>{
    console.log("The input is ", e.target.value);
},false) */


/* console.log("Start");    // 1)

setTimeout(() => {console.log("Second Line of Code")},1000); // 4)

Promise.resolve().then(() =>{console.log("Third Line of Code")});  // 3)

console.log("End");  // 2) */



// function abc() {
//     return;
// }
// console.log(abc());   // undefined

/* console.log([1,2].map(num =>{
    if(num > 3) return;
    return num * 2;
}))  // [2, 4]  */

// 'use strict'
/* {
    // function abc() {
    //     console.log("Hello")
    // }  // Hello

    const abc = () =>{
        console.log("world");
    }   // abc is undefined
}
 
abc();  */


/* function abc(a,b){
    'use strict';
    a = 100;
    b = 200;
    return arguments[0] , arguments[1];
    console.log(a + b);
}

console.log(abc(500,300)); */

// panNumber can't be changed
/* const user = {
    name: "Bhavik Tembhare",
    panNo: "BUDPTE5329",
    area:"Nagpur"
}

Object.defineProperty(user,"panNo",{
    writable: false
});

user.panNo = "1234";
console.table(user); */


/* let user = {
    name: "Bhavik",
    age: 27
}

const stingyData = JSON.stringify(user);
console.log(stingyData);

const parseData = JSON.parse(stingyData);
console.log(parseData); */


/* var msg;

const greet = () =>{
    alert("Good Morning");
}

const start = () =>{
    msg = setInterval(greet,3000)
}

const stop = () =>{
    clearInterval(msg);
}

start(); */



/* const nextPage = () =>{
    window.location.href = 'newPage.html'
} */

/* let string = "HelloworldNewsApps";
let subString = "Hell";
let news = string.includes(subString);
console.log(news); */


/* const validateEmail = (email) =>{
    let re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

validateEmail() */


// console.log(navigator.platform)

/* const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("rabit")) */

// const first = Math.floor(Math.random() * 100);
// console.log(first);

/* let container = document.querySelector('.container');
var msg = "Hello World";
// let result = msg.search(/World/i);
// let result = msg.replace(/W/i,'N');

let result = msg.split(/\s/);
console.log(result);
result.map((e) =>{
    container.innerHTML += e;
}) */



/* let image = new Image();
image.src = "https://img.pokemondb.net/artwork/large/pikachu.jpg";
image.onload = () =>{
    console.log(this.width + " " + this.length);
} */


// console.log(event.toLocalString())

// const myOverFlowFunction = () =>{
//     if(document.getElementById('age').validity.rangeOverflow){
//         alert('It overflow...');
//     }else{ alert("It's underflow...") }
// }


/* const newObject = {
    a:1,
    b:2,
    c:3
}

console.log(Object.getOwnPropertyNames(newObject)); */

// const newPage = () =>{
//     return window.history.pushState("page2","Title","/newPage.html");
// }


// var namespaceOne = {
//     function func1(){
//         console.log("This is a first definition");
//     }
// }

// namespaceOne.func1();

/* const nameSpace = {
     func1 : function(){
        console.log("no 1")
    }
}

nameSpace.func1(); */
// const nameSpaceOne = {
//     function func1(){
//         console.log("This is function one")
//     }
// }

// const nameSpanceTwo = () =>{
//     const func2 = () =>{
//          console.log("This is functions two")
//     }
// };

// nameSpaceOne.func1();
// nameSpanceTwo.func2();

// It's IIFE
/* (
    function () {
        function func1() {
            console.log("first function");
        }
        func1()
    }
)()  */

/* {
    let myFunction = function fun1() {
        console.log("This is a first definition");
    };
    myFunction();
}

{
    const function1 = function func1() {
        console.log("Hello first One");
    }
    function1();
} */


/* let age = 23;
age = "Age";
age = true;

console.log(typeof(age)); */


/* for(let i = 0; i<4; i++){
    setTimeout(() =>{console.log(i)})
} */

/* var name1= "Raja";

function getName(){
    var name1 = "Rani";
    name1 = "Imaran";
    alert(name1);
}
getName();
console.log(name1);  */


/* let name1 = "Raja";

function getName(){
    let name1 = "Rani";
    name1 = "Imaran";
    alert(name1);
}

getName();
console.log(name1); */


/* const userList = [];
userList.push("Bhavik");
console.log(userList);

userList.push("Raja");
console.log(userList); */

// ES5
/* var calculateArea = (height, width) =>{
    var height = height || 50;
    var width = width || 39;

    return height * width;
}

console.log(calculateArea()); */

// ES6

/* var calculateAre = (height= 29, width=13) =>{
    return height * width;
}

console.log(calculateAre()); */


/* let fistName = "Bhavik";
let lastName = "Tembhare";

console.log(`My Fullname is ${fistName} ${lastName}`) */


/* let [one,two,three] = ["1","2", "3"];

console.log(one);
console.log(two);
console.log(three); */


/* var x = 10;
    y = 20;

[x,y] = [y, x];

console.log(x);
console.log(y); */


/* let arrayIterable = [10,23,35,430,5120];

for(let value of arrayIterable){
    value++;
    console.log(value);
} */


/* const array = [..."Bhavik Tembhare"];
console.log(array); */

// console.log(document.getElementById('checkboxName').checked);


// console.log(String.fromCharCode(66,70));


/* let buffer = new ArrayBuffer(13);
console.log(buffer.byteLength); */


/* function function1 (parameter1,parameter2,parameter3){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

function1("argument1", "argument2", "argument3"); */


/* var arr = [12,4,43,5,34];

var odd = (elm) => elm % 2 !== 0;

console.log(arr.some(odd)); */

/* let veg = ["Tomato","Potato","Onion","Brinjal"];

let non_veg = ["Chicken","Mutton","Fish","Egg"];

let mixVeg = veg.concat(non_veg);

console.log(mixVeg); */


/* let details = {
    name: "Bhavik",
    age: 27,
    employement: "unemployed"
};
 
// It's an Shallow Copy
let DuplicateCopy = details;

DuplicateCopy.age = 30;

console.log(details); */

// Deep Copy
/* let details = {
    name: "Bhavik",
    age: 27,
    employement: "unemployed"
};

let DeepCopy = {
    name: details.name,
    age: details.age,
    employement: details.employement
}

DeepCopy.age = 30;

console.log(details);
console.log(DeepCopy); */


// console.log("Bhavik".repeat(2));


/* const add = (x, y) => x + y;

const Thunk = () => add(12,323);

console.log(Thunk()); */


/* (
    async function (){
        await Promise.resolve(console.log("Hello World"));
    }
)() */


// console.log(this);

/* function global(){
    console.log(this);
}
global(); */

/* const array = () =>{
    console.log(this);
}
array(); */

/* const person = {
    name:"Bhavik",
    fullName: function(){
        console.log(`My Name is ${this.name}`);
    }
}

person.fullName(); */


/* function Counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const increment = Counter();
console.log(increment());
console.log(increment());
console.log(increment()); */


/* const Closure = () =>{
    let outerVariable = "I am outer variable";
    function inner(){
        console.log(outerVariable);
    }
    return inner;
}

const outer = Closure();
outer();  */


/* const counter = (
    function(){
        let count = 0;
        return {
            increment: function(){
                count++;
                console.log(count);
            },
            reset: function(){
                count = 0;
                console.log(count);
            }
        }
    }
)();

counter.increment();  // 1
counter.increment();  // 2
counter.reset();      // 0
counter.increment();  // 1  
*/


/* const createTimer = () =>{
    for(let i = 1; i<= 3; i++){
        setTimeout(() =>{
            console.log(`Timer ${i}`);
        }, i * 3000)
    }
}
createTimer();  */


/* const initialAccount = () =>{
    let mainBalance = 1000;
    let currentBalance = () =>{
        mainBalance = mainBalance - 100;
        alert(mainBalance);
    }
    currentBalance();

} */


/* function outerFunction(){
    let outer_variable = "I'm outer variable";
    function innerFunction(){
        console.log(outer_variable);
    }
    return innerFunction;
}

const inn = outerFunction();
inn(); */


/* function createUser(name){
    let privateData = "Sensitive Information";

    return{
        getName:function(){
            return name;
        },
        getPrivateData:function(){
            return privateData;
        }
    }
}


const user = createUser("Bhavik");

console.log(user.getName());
console.log(user.getPrivateData()); */


/* let setUpButtonClickHandler = (btnId,message) =>{
    let btn = document.getElementById(btnId);

    btn.addEventListener('click',() =>{
        alert(message);
    })
}

const btn1 = setUpButtonClickHandler('btn',"Hello Brother......I'm Here"); */


// Polyfill
/* Array.prototype.myMap = function(cb) {
    let newArray = [];
    for(let i = 0; i< this.length; i++){
        newArray.push(cb(this[i],i,this) );
    }
    return newArray;
}


const nums = [13,4,2,4,55,6];

const multipleByTwo = nums.myMap((nums) =>nums * 2);

console.log(multipleByTwo);  */


/* Array.prototype.myFilter = function(cb){
    let newArray = [];
    for(let i = 0; i< this.length; i++){
        if(cb(this[i],i,this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const nums = [12,3,4,5,6,7,8,9,10];

const evenNumber = nums.myFilter(nums => nums % 2);

console.log(evenNumber); */


// console.log(1<2<3);
// console.log(3>2>1);

/* const obj1 = {a : 1};
const obj2 = {a : 1};

console.log(obj1 == obj2);
console.log(obj1 === obj2); */

/* let x = 10;
let y = (x++, x + 1, x * 2);
console.log(y);  */


/* console.log("A");
setTimeout(() => console.log("B"),0);
Promise.resolve().then(() => console.log("C"));
console.log("D") */


/* function foo(num){
    if(num === 0) return 1;
    return num + foo(num - 1);
}

console.log(foo(3)); */


/* let a= [1,3,4,5];

let b  = a;
b.push(12);

console.log(a);
console.log(b); */


/* function test(){
    console.log(this);
}

test.call(null); */


/* const confirm = () =>{
    let result = window.confirm("Are you sure about me..??");

    if(result === true){
        document.getElementsById(message).textContent = "Okay... fine I'm happy";
        alert("ok")
    }else{
        document.getElementsById('message').textContent = "I'm not... happy";
        alert("not ok");
    }
} */


/* Promise.resolve("promised value").then(() =>{
    throw new Error("error");
});


Promise.reject("Promised Rejected" ).then(() =>{
    throw new Error("Error");
});

new Promise((resolve,reject) =>{
    throw new Error('Error And Rejected');
})  */


/* const newObject = {
    name:"Bhavik Tembhare",
    age:27,
    address:{
        city:"Nagpur",
        state:"Maharashtra"
    }
}


const deepClone = JSON.parse(JSON.stringify(newObject));
console.log(deepClone); */



/* let arr = [12,32,4,13,42,1];

for(let keps of arr){
    keps++;
    console.table(keps);
}  */


/* let hello = [..."newWebStock"];
console.log(hello); */

// console.log(document.getElementById('checkboxName').checked);


/* const arr = [undefined,null, 1, 2, false];

arr.filter(Boolean);

console.log(arr); */


/* const countries = [
   { name: "India", capital: "Delhi", continent: "Asia" },
   { name: "US", capital: "Washington" , continent: "North America"},
   { name: "Russia", capital: "Moscow",continent: "Europe" },
   { name: "Singapore", capital: "Singapore", continent: "Asia" },
   { name: "China", capital: "Beijing", continent: "Asia" },
   { name: "France", capital: "Paris", continent: "Europe" },
];

const cityName = Array.from(countries, ({ continent }) => continent);
console.log(cityName); 


/* const countries = [
   { name: "India", capital: "Delhi" },
   { name: "US", capital: "Washington" },
   { name: "Russia", capital: "Moscow" },
   { name: "Singapore", capital: "Singapore" },
   { name: "China", capital: "Beijing" },
   { name: "France", capital: "Paris" },
];

const cityNames = Array.from(countries, ({ capital }) => capital);
console.log(cityNames); */



/* let cities = ["Singapore", "Delhi", "London"];
cities.length = [];
console.log(cities.length) */

/* let x = 3.141592653;
console.log( x.toFixed(3) ); */

/* let fruits = ["banana", "apple", "orange", "watermelon"];
let objectOfFruits = {...fruits};
console.log(objectOfFruits); */


/* let newArray = new Array(3).fill("Hello");
console.log(newArray); */


/* console.log(
    "%c The text has blue color, with large font and red background",
    "color: blue; font-size: x-large; background: red"
  ); */


/* document.querySelector(".copybutton").onclick = () =>{
    document.querySelector("#input-value").select();
    document.execCommand("copy");
} */


/* console.log(+new Date()); 
console.log(Date.now()) */


/* const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
const finalArr = [].concat(...biDimensionalArr);
console.log(finalArr); */

/* const biDimensionalArr = [11, [22, 33 , [44, 55, [66, 77], 88, 99]]];
const finalArr = biDimensionalArr.flat(Infinity);
console.log(finalArr); */



/* const resolveBtn = document.querySelector("#resolveBtn");
const rejectBtn = document.querySelector("#rejectBtn");
const p = new Promise((resolve,reject) =>{
    resolveBtn.addEventListener('click',() =>{
        resolve("You clicked the button");
    })

    rejectBtn.addEventListener('click',() =>{
        reject('Just reject the Promises');
    })
});

p.then(() =>{
    console.log("Promise resolve");
}).catch(() =>{console.log("Promise Rejected")}); */



/* function outerFunction(){
    console.log(typeof innerFunction);

    function innerFunction(){
        console.log("I'm inner function");
    }

    let innerValue = 20;
    console.log(innerValue);
    
}

outerFunction(); */


/* const outer = () =>{
    let vari = "This is outside variale";

    const inner = () =>{
        console.log(vari);
    }

    return inner;
}

const closure = outer();
closure(); */


/* const counter = () => {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment()); */



/* const addClickListener = () =>{
    let count = 0;
    document.getElementById('nextPage').addEventListener('click',() =>{
        count++;
        console.log(`you click ${count} times`)
    })
}

addClickListener(); */


/* function curriedAdd(a){
    return function(b){
        return a + b;
    }
}

const add = curriedAdd(5);
console.log(add(23)); */


/* function multiply(a){
    return function multiplySecond(b){
        return function multiplyThird(c){
            return a * b * c;
        }
    }
}
console.log(multiply(23)(1)(2)); */


/* function greet(greeting){
    return function(name){
        return `${greeting} ${name}`;
    }
}

const hello = greet("Hello");

console.log(hello("Bhavik"));
console.log(hello("Sahil"));
console.log(hello("sdfbsdhbskdj")); */



/* const createUrl = (domain) =>{
    return (path) =>{
        return (query) =>{
            return `${domain}/${path}?${query}`;
        }
    }
}

const url = createUrl("http://www.google.com");
const path = url("search");
const query = path("q=javascript");

console.log(query); */



/* const person = {
    firstName: "Bhavik",
    lastName: "Tembhare"
}

function greet(greeting, permutation){
    console.log(this);
    console.log(`${greeting}, ${this.firstName} ${this.lastName} ${permutation}`);
}

greet.call(person, "Hello","!"); */ 


/* const person = {
    firstName: "Bhavik",
    lastName: "Tembhare"
}

function greet(greeting, permutation){
    console.log(`${greeting}, ${this.firstName} ${this.lastName} ${permutation}`);
}

greet.apply(person, ["Hello","!"]); */ 


/* const numbers = [3, 5, 7, 2, 8,53];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); */ 



/* const person = {
    firstName: "Bhavik",
    lastName: "Tembhare"
}

function greet(greeting, permutation){
    console.log(`${greeting}, ${this.firstName} ${this.lastName} ${permutation}`);
}

const bountGreet = greet.bind(person, "Welcome");
bountGreet(); */ 



/* const person1 = {name: "Bhavik"};
const person2 = {name: "Sahil"};

function greet(greeting, permutation){
    console.log(`${greeting}, ${this.name}  ${permutation}`);
}

greet.call(person1, "Hello","!");
greet.apply(person2, ["Welcome",","]); */ 



/* const cache = new Map();

const fetchData = async(url) =>{
    if(cache.has(url)){
        return cache.get(url)
    }

    try {
        const response = await fetch(url,{
            headers:{
                "Content-Type":"application/json",
                'Accept-Encoding': 'gzip, deflate, br',
            }
        })
        if(!response.ok){
            throw new Error("HTTP Error! status: " + response.status);
        }
        const data = await response.json();
        cache.set(url,data);
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts");
console.log(cache); */ 


































































































































