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
// console.log(isTrueValue(arr1));


// 3) Converting Objects to Arrays

const obj = { a: 1, b: 2, c: 3 };

// console.log(Object.keys(obj) );
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const arrayOfAnObjects = Object.entries(obj).map(([key,value]) =>{
    return {[key]: value}
});

// console.log(arrayOfAnObjects);


// 4) Batting Average
const BattingAverage = (games) =>{
    const {hits,Atbats} = games.reduce(
        (total,[h,ab]) =>{
            total.hits += h,
            total.Atbats += ab 
            return total;
        },{hits:0,Atbats:0}
    )
    

    if(Atbats === 0) return 0.000;
    
    const avg = (hits/Atbats).toFixed(3);
    return `.${avg.split('.')[1]}`
}

console.log(BattingAverage([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));

