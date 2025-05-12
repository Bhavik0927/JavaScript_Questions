const MaximumAreaOfHistrogram = (arr) =>{
    const n = arr.length;
    const NSL= [];
    const NSR = [];
    let pseudoIndex_left = -1;
    let pseudoIndex_right = 7;
    let left= [];
    let right = [];

    // Nearest Smaller to Left
    for(let i = 0; i<n; i++){
        
        while(left.length && left[left.length -1][0] >= arr[i]){
            left.pop();
        }
        if(left.length === 0){
            NSL.push(pseudoIndex_left);
        }else{
            NSL.push(left[left.length - 1][1])
        }
        left.push([arr[i],i]);
    }

    // Nearest Smaller to Right
    for(let i = n-1; i>=0; i--){
        while(right.length && right[right.length - 1][0] >= arr[i]){
            right.pop();
        }
        if (right.length === 0) {
            NSR[i] = pseudoIndex_right; // push index outside array
        } else {
            NSR[i] = right[right.length - 1][1];
        }

        right.push([arr[i], i]);
        
    }

    for(let i = 0; i< NSR.length; i++){
        console.log(`${i} ==>`,NSR[i]);
    }
    let maxArea = 0;
    for(let i = 0; i<n; i++){
        const width = NSR[i] - NSL[i] -1;
        const area = arr[i] * width;
        maxArea = Math.max(maxArea,area);
    }
    return maxArea;
}


const arr = [6,2,5,4,5,1,6];

console.log("ANS",MaximumAreaOfHistrogram(arr));