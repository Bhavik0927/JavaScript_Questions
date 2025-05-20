const MinStack = () =>{
    let stack = [];
    let minStack = [];

    let push = (x) => {
        stack.push(x);
        if(minStack.length === 0 || x <= minStack[minStack.length - 1]){
            minStack.push(x);
        }else{
            minStack.push(minStack[minStack.length - 1]);
        }
    }

    let pop = () =>{
        if(stack.length === 0) return -1;
        stack.pop();
        minStack.pop();
    }

    let top = () =>{
        return stack[stack.length - 1];
    }

    let getMin = () =>{
        return minStack[minStack.length - 1];
    }
}


