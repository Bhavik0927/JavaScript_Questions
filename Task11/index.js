// Here it's PASS_BY_VALUE & PASS_BY_REFERENCE

let a = 10;

const modifiedValue = (x) =>{
    x = 20;
    return x;
}

modifiedValue(a);
// console.log(a);
// console.log(modifiedValue(10))


// ## PASS_BY_REFERENCE
let obj = { name: "Bhavik"};

let modifiedReferance = (new1) =>{
    new1.name = "Bhavik Tembhare";
}

modifiedReferance(obj);
// console.log(obj)


let obj2 = { name: "Bhavik"};

let modifiedReferance2 = (new1) =>{
    new1 = { name: "Bhavik Tembhare"};
}

modifiedReferance2(obj2);
console.log(obj2);