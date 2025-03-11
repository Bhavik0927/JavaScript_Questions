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

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// Brute force approach 
// Time Complexity = O(n^2)  
const findMissingNum = (arr,N) =>{
    for(let Num = 1; Num < N; Num++){
        let found = false;
        for(let i = 0; i< arr.length; i++){
            if(arr[i] === Num){
                found = true;
                break;
            }
        }
        if(!found){
            return Num;
        }
    }
}

// console.log(findMissingNum([1,2,3,5,6,7,8,10], 9))


// Optimal approach
const findMissingNumOptimal = (arr,N) =>{
    const totalSum = (N * (N+1))/2;
    const currentSum = arr.reduce((acc,curr) => acc+ curr,0);
    const diff = totalSum - currentSum;
    return diff;
}

// console.log(findMissingNumOptimal([1,2,3,5], 5))


// # Merge two sorted array #
const mergeArray = (arr1,arr2) =>{
    return [...arr1, ...arr2].sort((a,b) => a-b);
}

let arr1 =  [ 1, 3, 5 ]
let arr2 =  [ 2, 4, 6 ]
// console.log(mergeArray(arr1,arr2));

// Optimal Approch
const mergeArrayOptimal = (arr1,arr2) =>{
    let result = [];
    let i = 0, j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

let arr3 =  [ 1, 3, 5 ]
let arr4 =  [ 2, 4, 6 ];

console.log(mergeArrayOptimal(arr3,arr4));






