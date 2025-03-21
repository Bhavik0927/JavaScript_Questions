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

// console.log(mergeArrayOptimal(arr3,arr4));



// # Rearranged Array alternative #

const Rearranged = (arr) =>{
    let temp = [];

    let low = 0;
    let high = arr.length -1;

    while(low <= high){
        if(low !== high){
            temp.push(arr[high--]);
        }
        temp.push(arr[low++]);
        
    }
    return temp;
}

// console.log(Rearranged([1, 2, 3, 4, 5, 6, 7]))




// **  Sort an array of 0s, 1s and 2s **

// Brute force method
const sorted = (arr) =>{
    return arr.sort((a,b) => a-b);
}

// console.log(sorted([2, 0, 2, 1, 1, 0]))

// Optimal Approch method
const sorted1 = (arr) =>{
    let low = 0, mid = 0, high = arr.length -1;
    let temp;

    while(mid <= high){
        if(arr[mid] == 0){
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}

// console.log(sorted1([2, 0, 2, 1, 1, 0]))


// ## Equilibrium index of an Array ##

// Brute forced approch
const eqilibrim = (arr) =>{
    let n = arr.length; 
    
    for(let i = 0; i<n; i++){

        let leftSum = 0, rightSum = 0;

        for(let j = 0; j<i; j++){
            leftSum += arr[j];
        }

        for(let j = i+1; j<n; j++){
            rightSum += arr[j];
        }

        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
}


// console.log(eqilibrim([1, 3, 5, 2, 2]));

// Optimal Approch

const eqilibrimOptimal = (arr) =>{

    const totalSum = arr.reduce((acc,curr) => acc+ curr, 0 )
    let leftSum = 0;

    for(let i = 0; i< arr.length; i++){
        let rightSum = totalSum - leftSum - arr[i];
        if(leftSum === rightSum){ return i;}``
        leftSum += arr[i];
    }
}

// console.log(eqilibrimOptimal([1, 3, 5, 2, 2]));



// ## Leaders in an Array ##

// Brute forced 
const findLeaders = (arr) =>{
    let n = arr.length;
    let result = [];

    for(let i = 0; i<n; i++){
        let leader = true;

        for(let j = i+1; j<n; j++){
            if(arr[i] < arr[j]){
                leader = false;
                break;
            }
        }
        if(leader){
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(findLeaders([16, 17, 4, 3, 5, 2]))


// Optimal Approch
// we started from right to left
const findLeadersByOptimal = (arr) =>{
    let n = arr.length;
    let leaders = [];
    let maxRight = arr[n-1];
    leaders.push(maxRight);

    for(let i = n-2; i>=0; i--){
        if(arr[i] > maxRight){
            maxRight = arr[i];
            leaders.push(maxRight);
        }
    }
    return leaders.reverse();
}

// console.log(findLeadersByOptimal([16, 17, 4, 3, 5, 2]))




// ## Minimum Platforms Required for Trains ##

// Brute forced Method
const findPlatforms = (arr,dep) =>{
    let n = arr.length;
    let maxPlatform = 1;

    for(let i = 0; i<n; i++){
        let Platforms = 1;  // current train req. platform
        for(let j = i+1; j<n; j++){
            if(arr[j] <= dep[i] && dep[j] >= arr[i]){
                Platforms++;
            }
        }

        maxPlatform = Math.max(maxPlatform,Platforms);
    }
    return maxPlatform;
}

// console.log(findPlatforms([900, 940, 950, 1100, 1500, 1800], 
//     [910, 1200, 1120, 1130, 1900, 2000]));


// Optimal Approch (Sorting + Two pointers)
const findPlatformsOptimal = (arr,dep) =>{
    let n = arr.length;
    arr.sort((a,b) => a-b);
    dep.sort((a,b) => a-b);

    let platforms = 1, maxPlatform = 1;
    let i=0, j = 0;

    while(i < n && j< n){
        if(arr[i] <= dep[j]){
            platforms++;
            i++;
        }else{
            platforms--;
            j++;
        }
    }
    maxPlatform = Math.max(platforms,maxPlatform);
    return maxPlatform;
}

// console.log(findPlatformsOptimal([900, 940, 950, 1100, 1500, 1800],      [910, 1200, 1120, 1130, 1900, 2000]));



// ## Reverse array in groups ##

// Brute force 
const reverseArrayInGroup = (arr,k) =>{
    let n = arr.length;
    let result = [];

    for(let i = 0; i< n; i = i+k){
        let temp = arr.slice(i,i+k).reverse();
        result.push(...temp);
    }
    return result;
}

// console.log(reverseArrayInGroup([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));



//  Optimal Approch
const reverseArrayInGroupOptimal = (arr,k) =>{
    let n = arr.length;

    for(let i = 0; i<n; i = i+k){
        let left = i;
        let right = Math.min(i+k-1, n-1);

        while(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

// console.log(reverseArrayInGroupOptimal([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));


// ## Partition of an array ##

const partitionOfArray = (arr,pivot) =>{
    // 0 - i-1 ==> <= pivot
    // i - j-1 ==> >= pivot
    // j - n ==> unknown

    console.log("Pivot point is ->", pivot);

    let i = 0, j=0;
    while(i < arr.length){
        if(arr[i] > pivot){
            i++;
        }else{
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        }
    }
    console.log("pivot index is => ", j-1);
    return arr;

}

let arr12 = [32,33,31,4,5,1,2];


console.log(partitionOfArray(arr12,5));





