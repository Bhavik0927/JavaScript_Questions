
/* for (let i = 0, getI = () => i,
    increment = () => i++;
    getI() < 3;
    increment()
) {
    console.log(i)
} */ 


function reverseString(str){
    return str.split("").reverse().join('');
}


console.log(reverseString("Hello"))
console.log(reverseString("Alphabate"))
console.log(reverseString("Javascript"))