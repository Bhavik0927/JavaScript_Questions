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