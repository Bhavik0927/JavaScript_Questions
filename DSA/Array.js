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

// console.log(subArraySum([15,2,4,8,9,5,10,23], 23));




/* Count the triplets */

const countTriplets = (arr,sum) =>{
    let n = arr.length;
    let count = 0;

    for(let i = 0; i< n-2; i++){
        for(let j = i+1; j< n-1; j++){
            for(let k = j+1; k<n; k++){
                if(arr[i] + arr[j] + arr[k] === sum){
                    count++;
                }
            }
        }
    }
    return count;
}

const arr = [1, 2, 3, 4, 5];
const targetSum = 9;
// console.log(countTriplets(arr, targetSum));


// Kadan's Algorithm

const maxSubArraySum = (arr) =>{
    let currentSum = arr[0];
    let totalSum = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(currentSum > 0){
            currentSum += arr[i];
        }else{
            currentSum = arr[i]
        }
        if(currentSum > totalSum){
            totalSum = currentSum;
        }
    }
    return totalSum;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

