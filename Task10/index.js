// Custom Map function

const customMap = (arr,fn) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i],i));
    }
    return result;
}


const arr = [1,2,3,4,5];
const newArr = customMap(arr,(num) => num * 2);
console.log(newArr);


// Custom Filter function

const customFilter = (arr,fn) =>{
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const evens = customFilter(numbers, (element) => element % 2 === 0);
console.log('Even numbers:', evens);

