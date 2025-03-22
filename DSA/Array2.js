// ## Tapping Water ##

const tappingWater = (arr) => {
    let n = arr.length;

    let water = 0;
    for (let i = 0; i < n - 1; i++) {
        let left = arr[i];

        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }

        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }
        
        water = water + Math.min(left, right) - arr[i];
    }
    return water;
}

console.log(tappingWater([3, 0, 0, 2, 0, 4])); // 10