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

    const swap = (arr, i, j) => {
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
            swap(arr, i, left);
            permute(arr, left + 1);
            swap(arr, i, left);
        }
    }

    permute(str.split(""), 0);
    return result;

}

// console.log(permuteString("ABC"))


// Truncate the string
// String str = "Hello world!"; maxLength = 4;
// Output: "Hell..."

const truncate = (str, maxLength) => {
    if (str.length >= maxLength) {
        return str.slice(0, maxLength) + "...";
    } else return str;
}

// console.log(truncate("Helloooooooooo world!",3)); // Hell...


// Is Palindrome Number

const isPalindrome = (num) => {
    return num === Number(num.toString().split("").reverse().join(""));
}

//  console.log(isPalindrome(901)); // true 


// Hamming Distance
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// input1 = "hello";
// input2 = "hrlle";
// Output: 2;


// 1st implementation
const hammingDistance = (str1, str2) => {
    if (str1.length !== str2.length) return -1;

    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}

console.log(hammingDistance("hello", "hrlle")); // 2

// 2nd Implementation
const hammingDistance2 = (str1, str2) => {
    str1 = str1.toString(2);
    str2 = str2.toString(2);

    if (str1.length < str2.length) {
        while (str1.length !== str2.length) {
            str1 = "0" + str1;
            

        }
    } else {
        while (str1.length !== str2.length) {
            str2 = "0" + str2;
            
        }
    }

    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count;
}

console.log(hammingDistance2(3, 5))