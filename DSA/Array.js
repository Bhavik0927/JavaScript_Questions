// Subarray with given sum (Brute force approach);
const findSum = (arr, sum) => {
    let n = arr.length;

    for(let i = 0; i< n; i++){
        for(let j = i+1; j<n; j++){
            if(arr[i] + arr[j] === sum){
                return [i, j];
            }
        }
    }
    return -1;
}

// console.log(findSum([15,2,4,8,9,5,10,23], 23)); 


// Optimal Approch
const subArraySum = (arr,sum) =>{
    let currentSum = 0;
    let j = 0;

    for(let i = 0; i < arr.length; i++){
        currentSum += arr[i];

        while(currentSum > sum && j < i){
            currentSum -= arr[j];
            j++;
        }
        if(currentSum === sum){
            return [j, i];
        }
    }
    return -1;
}

console.log(subArraySum([15,2,4,8,9,5,10,23], 23));