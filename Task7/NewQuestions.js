// const dt =  new Date();
// console.log(dt.getFullYear());


// let first = "bhavik";
// let second = "Tembhare";

// console.log(first.concat(second));

// const PI = Math.PI;
// console.log(PI);

// let a = 12;
// a= 34;
// console.log(a);

// console.log(typeof null)

// for(let i = 1; i<=50; i++){
//     console.log(i);
// }

// let a = 1;
// let sum = 1;

// while(a <= 10){
//     sum += a;
//     a++;
// }

// console.log(sum);


// let word = "javascript";

// for(let n of word){
//     console.log(n);
// }


// for(let i = 1; i<=20; i++){
//     if( i%2 === 0){
//         console.log()
//     }else{ console.log(i)}

// }



// let a = 5;
// do{
//     console.log(a);
//     a--;
// } 
// while(a >= 1);

// let fact = 1;
// for(let i = 5; i > 0; i--){
//     fact = fact * i;
// }
// console.log(fact);

/* let hold = 1;

for(let i = 1; i<4; i++){
    let str = '';
    for(let j = 1; j < 4; j++){
        str += `${hold} `;
        hold++;
    }
    console.log(str);
} */

// Reverse an array

// let arr = [1,2,3,4,5];
// let sort = arr.sort((aa, b) => b - aa);
// console.log(sort)

/* let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length - 1 - i] = temp;
}
console.log(arr); */ 

/* let num = 1;

while(num < 50){
    if(num%5 == 0){console.log(num);}
    num++;
} */ 

// let obj = {
//     name: "Bhavik Tembhare",
//     age: 27,
//     degree: "BE"
// }

// for(let key  in obj){
//     console.log(key);
// }


// let arr = ["1","5456","aasdsfad","adf"];

// arr.forEach((val) =>{ console.log(val)} );


// console.log(NaN == NaN);
// console.log(NaN === NaN);


/* let ab = { a : 3 }

const vl = JSON.stringify(ab);
console.log(vl);

let ba = {a:3};

const isObjectCompare = (obj1,obj2) =>{
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isObjectCompare(ab,ba));

console.log(ab == ba);
console.log(ab === ba); */ 


// console.log(1 + 23 - "Hello" );
// console.log(1 + 23 - Number("Hello") );

/* console.log(1 + "Hello")
console.log(1 - "Hello")
console.log(1 * "Hello")
console.log(1 * "2")
console.log(1 / "2")
console.log(typeof("2"));
console.log(typeof("Hello"))

let a ;
console.log(typeof(a)) */


// console.log(typeof(NaN));
// console.log(typeof(null));


// let x = null;

// console.log(typeof(x));
// console.log(x == null)
// console.log(x === null)
// console.log(x == undefined);
// console.log(typeof(undefined))
// console.log(x === undefined);


// console.log(null == undefined);
// console.log(null === undefined);




/* const createBankAccount = (initialBalance) =>{
    let balance = initialBalance;
    return {
        deposit : (amount) =>{
            balance += amount;
            console.log(`deposit money: ${amount} & new Balance is ${balance}`)
        },
        withdraw: (amount) =>{
            if(balance >= amount){
                balance -= amount;
                console.log(`withdraw money: ${amount} & new Balance is ${balance}`)
            }else{
                console.log("Insufficient balance")
            }
        },
        getCurrentBalance:() =>{
            console.log(`Current Balance is ${balance}`);
        }
    }
}

const myAccount = createBankAccount(100);
// myAccount.getCurrentBalance();
myAccount.deposit(200);
myAccount.getCurrentBalance();
myAccount.withdraw(50); */


/* for(var i = 1; i <= 4; i++){
    setTimeout(() =>{console.log(i)},1000);
}

console.log("--------------------------------")
for(var i = 1; i<= 4; i++){
    ((i)=>{
        setTimeout(() =>{
            console.log(i);
        },1000);
    })(i);
} */

// for(var i = 1; i <=4; i++){
//     setTimeout((i) =>{
//         console.log(i);
//     },1000,i)
// }


// function leakfunction(){
//     let bigData = new Array(10000).fill('⭕');
//     bigData = null;

//     return function(){
//         console.log("Data is fetching");
//     }
// }

// const le = leakfunction();



/* const outer = () =>{
    let a = 21;
    return inner = () =>{
        let b = 43;
        return inner3 = () =>{
            let c = 85;
            console.log(a+b+c);
        }
    }
}

const sum = outer()()(); */



// ..Lexical Scope.. //
/* const outerfunction = () =>{

    let outervariable = "Hey outer";
    let  inner =() =>{
        let innerVarible = "Hey Inner";
    }

    console.log(innerVarible);
}

outerfunction(); */ 


// const delayGreet = () =>{
//     let name = "Bhavik Tembhare";

//     setTimeout(() =>{
//         console.log(`My name is ${name}`)
//     },3000)
// }

// delayGreet();



/* const testScope = () =>{
    if(true){
        var v1 = "Hello, its var variable";
        let v2 = "Hello, its let variable";
        const v3 = "Hello, its const variable";
    }

    console.log(v1);  // function scope
    // console.log(v2);
    // console.log(v3);
}

testScope(); */ 



const arr = [2,4,6,2,113];

const sum = arr.reduce((acc,curr) =>{
    acc = acc + curr;
    return acc;
},0)

console.log(sum);























