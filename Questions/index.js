// 1) Give length of the nested array

const nestedArray = (arr) =>{
    return arr.reduce((count,val) =>{
        return count + (Array.isArray(val) ? nestedArray(val) : 1);
    },0)
}

const arr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray(arr));