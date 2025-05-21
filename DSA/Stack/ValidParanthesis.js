const validParanthesis = (s) =>{
    let stack = [];

    for(let i = 0; i< s.length; i++){
        let char = s[i];
        if(char == '{' || char == '(' || char == '['){
            stack.push(char)
        }else{
            if(stack.length === 0) return false;
            else{
                if(
                   ( stack[stack.length -1] === '{' && char === '}' ) ||
                   ( stack[stack.length -1] === '(' && char === ')' ) ||
                   ( stack[stack.length -1] === '[' && char === ']' ) 
                   
                ){
                    stack.pop()
                }else{
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}

console.log(validParanthesis("()[]{}"));