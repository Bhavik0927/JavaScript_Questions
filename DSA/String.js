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
const reverseString = (str) => {
    return str.split(' ').reverse().join(' ');
}

// console.log(reverseString("If the world is ending "));

// Reverse By Two Pointers
const reverseStringTwoPointers = (str) => {
    const chars = str.split('');
    let start = 0;

    const reverse = (start, end) => {
        while (start < end) {
            const temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            start++;
            end--;
        }
    }

    reverse(0, chars.length - 1);

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === ' ') {
            reverse(start, i - 1);
            start = i + 1;
        }
    }

    reverse(start, chars.length - 1);
    return chars.join('');
}

// console.log(reverseStringTwoPointers("If the world is ending "));


// ## Permute String ##

const permuteString = (str) => {
    let result = [];

    const swap = (arr,i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const permute = (arr, left) => {
        if (left === arr.length - 1) {
            result.push(arr.join(""));
            return;
        }


        for (let i = left; i < arr.length; i++) {
            swap(arr,i,left);
            permute(arr, left + 1);
            swap(arr, i,left);
        }
    }

    permute(str.split(""),0);
    return result;

}

// console.log(permuteString("ABC"))


// Truncate the string
// String str = "Hello world!"; maxLength = 4;
// Output: "Hell..."

const truncate = (str,maxLength) =>{
    if(str.length >= maxLength){
        return str.slice(0,maxLength) + "...";
    }else return str;
}

// console.log(truncate("Helloooooooooo world!",3)); // Hell...


// Is Palindrome Number

const isPalindrome = (num) =>{
    return num === Number(num.toString().split("").reverse().join("")) ;
}

 console.log(isPalindrome(901)); // true      