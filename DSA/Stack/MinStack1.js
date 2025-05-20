const MinStack1 = () =>{
    let stack = [];
    let minElm;

    let push =  (x) =>{
        if(stack.length === 0){
            stack.push(x);
            minElm = x;
        }else{
            if(x >= minElm){
                stack.push(x);
            }else if(x < minElm){
                stack.push(2*x - minElm);
                minElm = x;
            }
        }
    }

    let pop = () =>{
        if(stack.length === 0) return -1;
        else{
            if(stack[stack.length - 1] > minElm){
                stack.pop();
            }else if(stack[stack.length -1] < minElm){
                minElm = 2 * minElm - stack[stack.length - 1];
                stack.pop();
            }
        }
    }

    let peek = () =>{
        if(stack.length === 0) return -1;
        else if(stack[stack.length -1] < minElm){
            return minElm;
        }else{
            return stack[stack.length - 1];
        }
    }

    let getMin = () =>{
        return minElm;
    }

    return {push,pop,peek,getMin,stack};
}

const st = MinStack1();

st.push(5);
st.push(2);
st.push(1);
st.pop();

console.log(st.stack);
console.log(st.getMin())




