 
/* In Javascript there is not a stack data structure but the javascript array is so powerful:
 1) push &
 2) Pop 
 Operation are inbuild
 but for peek() functionality 
 we can get by manually like
 
 let top = stack[stack.length - 1];

*/
let stack = [];

stack.push(10);
stack.push(1120);
stack.push(450);
stack.push(0);


console.log(stack);
stack.pop();
console.log(stack);

let top = stack[stack.length - 1];
console.log(top);
