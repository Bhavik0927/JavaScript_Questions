// Pure function
/* const pure = (value) =>{
    return value * value;
}

console.log(pure(4)); */

// Impure function
/* let count = 0;

const increase = () =>{
    count +=1;
    return count;
}

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase()); */


// Currying
// Def-- A currying a technque in functional programming where a function with multiple arguments transformed into the series of function with a single arguments...

// Without Currying
const add = (a, b) => {
    return a + b;
}

// with currying 
// function add1(a){
//     return  function (b){
//         return a + b;
//     }
// }

/*const add1 = (a) =>{
    return (b) =>{
        return a + b;
    }
}

const addition = add1(2);
console.log(addition(34)); */

// Scoping

// 1) Global Scop

/* var privateVariable ="Hey I'm an Private Variables";

const access = () =>{
    console.log("line 54: " + privateVariable);
    privateVariable = "It's new variables";
}

access();
console.log("line 59: "+ privateVariable); */

// 2) Function's scope
/* const calculateSum = () =>{
    let result = 0;
    for(let i = 0; i<=5; i++){
        result += i;
    }
    console.log("Line 67:" + result);
}

calculateSum();
console.log("Outside function is " + typeof(result)); */

// 3) Block Scope
// Varible decleared with let and const are blocked scope we only access between the block

/* const demostrateBlockScope = () => {
    if (true) {
        let block = "Hello I'm let varible";
        const newVar = "Hey...It's Const varible";

        console.log(block);
        console.log(newVar);
    }
    console.log(typeof (block));
}
console.log(block); // it gives me an error
demostrateBlockScope(); */

// 4) Lexical Scope
/* const outerScopefunction = () =>{
    let value = "Its an outer varible";
    return innerFunction = () =>{
        console.log(value);
    }
}

outerScopefunction()// it's just returning a innerfunction() but doesn't execute the function;

// for explicitly invoke the innerfunction();
const funct = outerScopefunction();
funct(); // It gives us the desired value */

// 5) Variable Shodowing

/* let name = "Outer variables";
const displayName = () =>{
    let name = "inner scope";
    console.log(name);
}
displayName();
console.log(name); */

// 6) Closures

/* const outerFuc = () =>{
    let counter = 0;
    return innerfunct = () =>{
        counter += 1;
        console.log(counter);
    }
}

const increase = outerFuc();
increase(); // 1 
increase(); // 2  */


// scoping through loops

/*for(var i = 0; i<=3; i++){
    // console.log("value of i: ",i);
    // console.log("-----------------");
    setTimeout(() =>{console.log("v of i: ",i)},100)  // 3,3,3
}
console.log("*--------------------*")
for(let j = 0; j<=3; j++){
    // console.log("value of j: ",j);
    // console.log("----------------------");
    setTimeout(() =>{console.log("v of j: ",j)},100);  // 1,2,3
} */


// If you must use var, you can achieve the desired behavior by creating a closure:
/*for(var i = 0; i<=3; i++){
    (function (x){
        setTimeout(() =>{console.log("Fixed var i: " , x)},100)
    })(i);
} */

// Scope with Hoisting
/* {
    console.log(a); // undefined due to hoisting
    var a = 5;
    let b = 10;
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
  } */

// Immediate Invocation (IIFE) and Scope Isolation

/* (
    function (){
        let privateVarible = "I'm Private"
        console.log(privateVarible);
    }
)()

console.log(typeof(privateVarible));  // undefined */


/* ARRAY METHODS  */

/* let fruits = ['mango',"orange","banana","apple"];
// fruits.push("chiku");
// fruits.pop();
// fruits.shift();
// fruits.unshift();
// let newSlice = fruits.slice(1,3);
// console.log(newSlice);
// fruits.splice(1,1,"cherry");
// const map = fruits.map((x) => {return x; })
// console.log("new way:-> ",map)

console.log(fruits); */


// const numbers = [12,4,22,1];
// let index = numbers.findIndex(x => x > 14);
// let check = numbers.every(x => x % 2 === 0);
// let check = numbers.some(x => x % 2 === 0);
// console.log(check);
// const eventNumber = numbers.filter((x) => x % 5 === 0 );
// console.log(eventNumber);

// const sum = numbers.reduce((acc,curr) => (acc + curr),0);
// console.log(sum); // 46

// let fruits = ['Apple', 'Banana', 'Mango'];
// let result = fruits.join('! ');
// console.log(result);
// fruits.forEach(x => console.log(x));
// console.log(fruits.includes("cherry") );

// -----------------------------------------------------------------------

// merge two string alternately
/* const mergeString = (str1,str2) =>{
    let result = '';
    let maxLength = Math.max(str1.length, str2.length);

    for(let i = 0; i < maxLength; i++){
        if(i < str1.length){
            result += str1[i];
        }

        if(i < str2.length){
            result += str2[i];
        }
    }
    return result;
}

let string1 = "Bhavik";
let string2 = "Tembhare";

console.log( mergeString(string1,string2) ); */


// How to handle asynchronous operations...
// 1) Handle By Callback

/* function fetchData(callBack){
    setTimeout(() =>{
        console.log("Data is fetched");
    },1000)
}

fetchData((data) =>{
    console.log(data);
}) */


// 2) Using Promises
/* const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data is fetched")
            } else { reject("there is some problems") }
        }, 1000)
    })
}

fetchData()
    .then((data) => console.log(data))
    .catch(error => console.log(error)); */


/* const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            if(!res.ok){console.log("There is some problems in API")}
            return res.json();
        })
        .then(posts =>{
            console.log(posts);
        }).catch(err =>{
            console.log(err);
        })
}

fetchPosts(); */

/* console.log("Script start"); // 1

setTimeout(() =>{
    console.log("SetTimeOut Task"); // 4
},0);

Promise.resolve().then(() =>{
    console.log("Promise resolved"); // 3
});

console.log("Script End"); // 2
*/



/* let numbers = [12, 323, 4, 2, 13, 1];

console.log(numbers.sort((a,b) => a - b));// asending order

console.log(numbers.sort((a,b) => b-a)); */

/*"use strict"
function strict(){
    console.log(this);
}

strict();*/

// "use strict";
// a = 5;
// console.log(a);


// let a = null;
// // console.log(a);
// console.log(typeof(a));

// console.log(a == undefined);

// let b;
// console.log(b);

// console.log(typeof(b));

// console.log(5 == '5');  // true
// console.log(5 === '5'); // false

// console.log('5' == 'five');
// console.log('5' === 'five');

// console.log(1 == true);
// console.log(1 === true);

// console.log(null == undefined)
// console.log(null === undefined)

/* class Calculator{
    add(a,b){
        return a + b;
    }
    add(a,b,c){
        return a + b + c;
    }
}

const calc = new Calculator();
console.log(calc.add(2,4,1)); // NaN */


// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1); // 2
// console.log(null + 1)


// console.log(Number("123")); // String to Number
// console.log(String(123)); // Number to String
// console.log(Boolean(1));
// console.log(parseInt("42px"))


// if([]){
//     console.log("truthy")
// }else{
//     console.log("falsy");
// }


// console.log(typeof("123"));
// console.log(typeof(123));
// console.log(typeof(true))


/* const deepFreeze = (obj) =>{
    Object.freeze(obj);

    Object.keys(obj).forEach((key) =>{
        if(typeof obj[key] === "object" && obj[key] != null && !Object.isFrozen(obj[key])){
            deepFreeze(obj[key]);
        }
    })

    return obj;

}
const person = {
    name: "Bhavik",
    age: 27,
    occupation: "unemployed",
    education:{
        degree: "BE"
    }
}


deepFreeze(person);
person.education.degree = "MS";

console.log(person); */ 




// var x = 0;
// var y= 23;

// if(y){
//     console.log("truthy")
// }else{console.log("falsy")}


// var x = 220;
// var y = "Hello";
// var z = undefined;

// // console.log(y|| z);
// console.log(x && y);


/* const multiplyBy = (num1) =>{
    return (num2) =>{
        return num1 * num2;
    }
};

const x = multiplyBy(2);

const arr = [24,3,12,4];

const doubled_Value = arr.map(x);
console.log(doubled_Value); */

// write a function to merge the string

const mergeString = (str1,str2) =>{
    let maxLength = Math.max(str1.length, str2.length);

    let result = '';

    for(let i = 0; i <= maxLength; i++){
        if(i < str1.length){
            result += str1[i];
        }

        if(i < str2.length){
            result += str2[i];
        }
    }
    return result;
}

let str1 = "Bhavik";
let str2 = "Tembhare"

console.log(mergeString(str1,str2));




