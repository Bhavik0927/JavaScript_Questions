const NextGreaterToLeft = (arr) =>{
    let stack = [];
    let vector = [];

    for(let i = 0; i< arr.length; i++){

        while(stack.length && stack[stack.length - 1] <= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            vector.push(-1);
        }else{
            vector.push(stack[stack.length -1])
        }

        stack.push(arr[i]);
    }
    return vector;
}

const arr = [1,3,2,4];
console.log(NextGreaterToLeft(arr));