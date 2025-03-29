// first learn lexical Scope

/* function outer(){
    let username = "Bhavik Tembhare";

    function inner(){
        console.log(username);
    }
    inner();
}

outer(); */


// Closure Here

/* function makeFunc(){
    const name = "Bhavik"

    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myfunction = makeFunc();
myfunction(); */

// from Here
/*function clickHandler(color){
    return function(){
        console.log("return")
        document.body.style.backgroundColor = `${color}`;
    }
}
document.getElementById("orange").onclick = clickHandler("orange");

document.getElementById("blue").onclick = clickHandler("blue"); */

function createCounter(){
    let count = 0;

    return {
        increment: function (){
            count++;
            console.log(`count after increment : ${count}`)
        },
        decrement: function (){
            count--;
            console.log(`count after decrement : ${count}`)
        },
        reset: function (){
            count = 0;
            console.log(`count after reset : ${count}`)
        },
        totalCount:function(){
            console.log(`Total count is ${count}`)
        }
    }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement()
counter.totalCount(); 
counter.reset();
counter.totalCount();




