// Polyfill for map

/* Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i = 0; i< this.length; i++){
        temp.push((cb(this[i],i,this)))
    }
    return temp;
}

const nums = [12,3,4,231,1];

const multyThree = nums.myMap((nums,i) =>{
    return nums;
})

console.log(multyThree); */


// polyfill for filter 

/* Array.prototype.myfilter = function(cb){
    let temp = [];
    for(let i = 0; i<this.length; i++){
        if(cb(this[i],i,this)) temp.push(this[i]);
    }
    return temp;
}

const nums = [1,3,34,98];

const moreThanTwo = nums.myfilter((num) =>{
    return num > 2;
})

console.log(moreThanTwo);  */


// Polyfill for Reduce

// arr.reduce(() => {},initialValue)   

/* Array.prototype.myReduce = function(cb,initialValue){
    var accumulator = initialValue;

    for(let i = 0; i<this.length; i++){
        accumulator = accumulator? cb(accumulator,this[i],i,this) : this[i];
    }

    return accumulator;
}

const nums = [1,3,34,98];

const sum = nums.myReduce((acc,curr,i,nums) =>{
    return acc + curr;
})

console.log(sum); */


/*----------------------------------------------------------------------------- */
// Call, Apply & Bind Methods in Polyfill

// 1) Call 

/* const car1 = { 
    color:"Red",
    company:"Jaguar"
}

function purchaseCar(currency,price){
    console.log(`I have purchesed ${this.color} - ${this.company} car for ${price} ${currency} `);
}

Function.prototype.myCall = function(context = {},...args){
    if(typeof this !== "function"){
        throw new Error(this + "It is not Callable");
    }
    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car1,"$",40);
purchaseCar.call(car1,"₹",500000); // Normal call function */

// 2) Apply method 

/* const car1 = { 
    color:"Black",
    company:"Mustang"
}

function purchaseCar(currency,price){
    console.log(`I have purchesed ${this.color} - ${this.company} car for ${price} ${currency} `);
}

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== "function"){
        throw new Error(this + "It is not Callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike called ")
    }

    context.fn = this;
    context.fn(...args)
}

purchaseCar.myApply(car1,["₹",400000]); */

// 3) Bind Method 

/* const car1 = { 
    color:"Red",
    company:"Jaguar"
}

function purchaseCar(currency,price){
    console.log(`I have purchesed ${this.color} - ${this.company} car for ${price} ${currency} `);
}

Function.prototype.myBind = function(context = {},...args){
    if(typeof this !== "function"){
        throw new Error(this + "cannot be bound as it's not callable")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    }
}

const newFunc = purchaseCar.myBind(car1,"$",482984000);

console.log(newFunc())  */

/*-------------------------------------------- */






