const MAH = (arr) =>{
    let stack = [];
    let maxArea = 0;
    arr.push(0);

    for(let i = 0; i< arr.length; i++){
        while(stack.length && arr[i] < arr[stack[stack.length -1]]){
            let height = arr[stack.pop()];
            let width;
            if(stack.length > 0){
                width = i - stack[stack.length - 1] -1;
                // console.log(`width for ${i}`,width);
            }else{
                width = i;
                
            }
            console.log(`width for index ${i} =>`,width);
            console.log(`height for index ${i} =>`,height);
            console.log("-----------------------");
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

const MaxAreaOfRectangle = (matrix) =>{
    if(!matrix.length || !matrix[0].length) return 0;

    let column = matrix[0].length;
    let height = new Array(column).fill(0);
    let maxRectangle = 0;

    for(let row of matrix){
        for(let i = 0; i < column; i++){
            
            if(row[i] === 0){
                height[i] = 0;
            }else{
                height[i] = height[i] + 1;
            }
        }
        maxRectangle = Math.max(maxRectangle, MAH(height));

    }
    return maxRectangle;
}

const matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
];

console.log(MaxAreaOfRectangle(matrix));
