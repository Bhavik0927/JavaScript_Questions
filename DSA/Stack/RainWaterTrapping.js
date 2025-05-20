const RainWaterTrappng = (arr) => {
    let n = arr.length;
    let arrOfmaxL = new Array(n).fill(0);
    let arrOfmaxR = new Array(n).fill(0);
    let sum = 0;


    arrOfmaxL[0] = arr[0];
    for (let i = 1; i < n; i++) {
        arrOfmaxL[i] = Math.max(arrOfmaxL[i - 1], arr[i]);
        console.log(arrOfmaxL);
    }

    console.log('--------------------------');

    arrOfmaxR[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        arrOfmaxR[i] = Math.max(arrOfmaxR[i + 1], arr[i]);
    }


    let water = [n];

    for (let i = 0; i < n; i++) {
        water[i] = Math.min(arrOfmaxL[i], arrOfmaxR[i]) - arr[i];
        sum = sum + water[i];
    }

    return sum;
}


let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(RainWaterTrappng(arr));