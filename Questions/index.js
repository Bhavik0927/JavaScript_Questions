// 1) Give length of the nested array

const nestedArray = (arr) =>{
    return arr.reduce((count,val) =>{
        return count + (Array.isArray(val) ? nestedArray(val) : 1);
    },0)
}

const arr = [1, [2, 3], [4, [5, 6]]];
// console.log(nestedArray(arr));


// 2) How Much is True?
const  isTrueValue = (arr) =>{
    const result = arr.filter((val) =>{
        return val === true;
    })
    return result.length;
}

const arr1 = [true, false, false, true, false];
console.log(isTrueValue(arr1));