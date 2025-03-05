// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".



function timeLimit(fn,t){
    return async function(...args){
        return new Promise((resolve,reject) =>{
            const timeOut = setTimeout(() =>{
                reject("Time Limit Exceeded");
            },t);

            fn(...args).then((result) =>{
                clearTimeout(timeOut);
                resolve(result);
            }).catch((error) =>{
                clearTimeout(timeOut);
                reject(error)
            })
        })
    }
}

const exampleFunction = async (x) =>{
    await new Promise((res) => setTimeout(res,x));
    return `Completed in ${x}ms`
}

const LimitedFunction = timeLimit(exampleFunction,100);

// LimitedFunction(500).then(console.log).catch(console.error);

LimitedFunction(1500).then(console.log).catch(console.error);