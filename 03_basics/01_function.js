

function sayMyName()
{
console.log("S")
console.log("A")
console.log("N")
console.log("D")
console.log("E")
console.log("E")
console.log("P")
}
//sayMyName();

function addTwoNumbers(number1, number2){// number1 is a parameter
    // console.log(number1 + number2);
    let result =  number1 + number2; // this  the method 
    return result;

    // or return  number1+ number2;
    
}

addTwoNumbers(3, "4");
addTwoNumbers(3, "a "); // here a is argument

// const result = addTwoNumbers(3 ,5 );
// console.log("Result: ", result);

function loginUserMessage(username)
{
    if(username==undefined) // same as if(!username)
        {     
        console.log("Please enter a username");
        return ;// if we comes in this block then nothing will print;
    }
    return `${username} Just logged in  `
}

//console.log(loginUserMessage("Sandeep"))
console.log(loginUserMessage()); // when you not passed any value it returned the Undefoned .