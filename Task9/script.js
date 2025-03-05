/* function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(() =>{resolve("Data is fetched")},3000)
    })
};

fetchData().then(console.log); */


// const user = fetch('https://jsonplaceholder.typicode.com/photos');

// console.log(user);


// async function foo(){
//     return "Bhavik Tembhare";
// }

// const result = foo().then(console.log);

// console.log(result);


// console.log([1,3] == [1,3]);

// let a = [1, 2];
// let b = a;

// console.log(a === b);  // true


// import { greet, PI } from './utils.js';

// console.log(greet("Bhavik"));
// console.log(PI);


// const p = new Promise((resolve,reject) =>{
//     resolve("Hello it's an Promise");
// });

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }

// handlePromise();




// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello it's an Promise");
//     }, 50000)

// });

// function GetData(){
//     p.then((res) => console.log(res));
//     console.log("Bhavik Tembhare")
// }

// GetData();




/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello it's first Promise");
    }, 5000)

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello it's second Promise");
    }, 10000)

});



async function handlePromises(){
    console.log("Hello World");

    const val1 = await p1;
    console.log("Bhavik Tembhare");
    console.log(val1);

    const val2 = await p2;
    console.log("Sahil Tembhare");
    console.log(val2);
}

handlePromises(); */ 


/* async function handlePromise(){
    const res = await fetch('https://api.github.com/users/Bhavik0927');
    const data = await res.json();
    console.log(data);
}

handlePromise().catch(err => console.log(err)); */


/* fetch('https://api.github.com/users/Bhavik0927')
.then((res) =>{
    if(!res.ok){
        throw new Error("request API is not correct")
    }
    return  res.json();
})
.then((data) => console.log(data)).catch(err => console.log(err));  */ 


/* let name = {
    firstName:"Bhavik",
    lastName:"Tembhare",
}

let name2 = {
    firstName:"Harvey",
    lastName:"Specter"
}

let fullname = function(hometown,state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown +" "+ state);
}

// fullname.call(name);
fullname.call(name2,"New York","USA");

fullname.apply(name2,["New York","USA"]);

const newArr = fullname.bind(name2,"Chicago","New Jursey");
// console.log(newArr);
newArr(); */ 



/* const obj = { name: "Bhavik", details: { age: 25 } };

const copy = JSON.parse(JSON.stringify(obj));

obj.details.age = 30;

console.log(copy); */ 


// Write a JavaScript program that takes a string (e.g., "Hello world") and returns the string with its characters reversed skipping consecutive 1 character. For example, if the input string is "Hello world", the output should be "drwolH"

const reverseString = (str) =>{
    const char = str.split('');

    const reverse = char.reverse();

    return reverse.filter((_,index) => index % 2 === 0).join('');
    // return reverse;
}

console.log(reverseString("Hello World"));
