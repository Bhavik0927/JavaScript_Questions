const StockSpan = (arr) =>{
    const stack = [];
    const vector = [];

    for(let i = 0; i<arr.length; i++){

        while(stack.length && stack[stack.lenght - 1][0] <= arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            vector.push(-1);
        }else{
            vector.push(i - stack[stack.length -1][1]);
        }

        stack.push([arr[i],i])
    }
    return vector;
}