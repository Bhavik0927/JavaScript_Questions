// Remove paranthesis from a string

const removeParanthesis = (str) => {
    let result = '';
    let depth = 0;

    for (let char of str) {
        if (char === '(') {
            if (depth > 0) {
                result += char;
            }
            depth++;
        }
        else if (char === ')') {
            depth--;
            if (depth > 0) {
                result += char;
            }
        }
    }
    return result;

}

// console.log(removeParanthesis("(()())(())"));

// Reverse String;
const reverseString = (str) =>{
    return str.split(' ').reverse().join(' ');
}

// console.log(reverseString("If the world is ending "));

// Reverse By Two Pointers
const reverseStringTwoPointers = (str) =>{
    const chars = str.split('');
    let start = 0;

    const reverse = (start,end) =>{
        while(start < end){
            const temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            start++;
            end--;
        }
    }

    reverse(0,chars.length - 1);

    for(let i = 0; i< chars.length; i++){
        if(chars[i] === ' '){
            reverse(start, i - 1);
            start = i + 1;
        }
    }

    reverse(start, chars.length - 1);
    return chars.join('');
}

console.log(reverseStringTwoPointers("If the world is ending "));