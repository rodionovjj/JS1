const fizzBuzz = (begin, end) => {              
    for (let i = begin; (i-1) < end; i++){       
        if (i % 3 === 0 && i % 5 === 0) {       
            console.log ("FizzBuzz");           
        }
        if (i % 3 === 0){
            console.log ("Fizz");
        }
        if (i % 5 === 0){
            console.log ("Buzz");
        }
        else{
            console.log (i);
        }
    }
}
console.log (fizzBuzz (1, 25))