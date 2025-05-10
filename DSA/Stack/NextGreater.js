
const nextGreater = (arr) =>{
    let stack = [];
    let vector = [];
    
    for(let i = arr.length - 1; i>= 0; i--){
        while(stack.length > 0 && stack[stack.length -1] <= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            vector.push(-1);
        }else{
            vector.push(stack[stack.length -1]);
        }
        stack.push(arr[i]);
    }
    return vector.reverse();
}

let arr1 = [1,3,2,4];
console.log(nextGreater(arr1));
