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

console.log(removeParanthesis("(()())(())"));