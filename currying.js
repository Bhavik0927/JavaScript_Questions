console.log("Hello Currying");

/*function Sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(Sum(2)(6)(1) ) */

// -----------------------------------------------------------------------------

/* Question 2 - 
    evaluate("sum")(4)(2) 
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
    evaluate("substract")(4)(2) => 2
*/

/* function evaluate(operation){
    return function(a){
        return function (b){
            if(operation == 'sum') return a + b;
            else if(operation === 'multiply') return a * b;
            else if(operation === 'divide') return a / b;
            else if(operation === 'substract') return a - b;
            else return "Invalid Operation";
        }
    }
}
console.log( evaluate("sum")(4)(2)  );
console.log( evaluate("multiply")(4)(2)   );
console.log( evaluate("divide")(4)(2)  );
console.log( evaluate("substract")(4)(2)  ); */

// -------------------------------------------------------------------------------

/* Infinite Currying */

/* function add(a){
    return function (b){
        if(b) return add(a + b);
        return a;
    }
}

console.log( add(2)(1)(30)() ) */

//----------------------------------------------------------------------------------

// Partial Application

/* function sum(a){
    return function (b,c){
        return a + b + c;
    }
}

console.log(sum(23) (2,12)); */ 

//----------------------------------------------------------------------------------

// Manupulating DOM

/* function updateTextContent(id){
    return function(content){
        document.querySelector("#"+id).textContent = content;
    }
}

const updateHeader = updateTextContent("heading");

updateHeader("Kolaveri D"); */

//---------------------------------------------------------------------------------

//Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c).

function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args,...next);
            }
        }
    }
}

const sum = (a,b,c,d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(2)(1)(45)(9));






