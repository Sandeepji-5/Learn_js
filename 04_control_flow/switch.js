// const month = 3;
// switch (month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default case switch");
// }




//-------------------------------------------------------------------------------------------------------------
// const Month = "jan";
// switch (Month){
//     case "jan":
//         console.log("January");
//         break;
//     case "f":
//         console.log("feb");
//         break;
//     case "Ma":
//         console.log("March");
//         break;
//     case "Ap":
//         console.log("April");
//         break;

//     default:
//         console.log("Default case switch");
// }
//------------------------------------------------------------------------------------------------------

// falsy Values
// {false  , 0,-0, BigInt , 0n, "", null, undefined, NaN}
list of falsy values:
false
0
-0
0n (BigInt)
"" (empty string)
null
undefined
NaN (Not-a-Number)
//-----------------------------------------------------------------------------------------------------
// truthy values 
// "0" , 'false', " ",[] , {} ,function(){} ----empty function
 a list of truthy values:

"0" (string with zero)
'false' (string with the word false)
" " (string with a space)
[] (empty array)
{} (empty object)
function(){} (empty function)
These values are considered truthy because when evaluated in a boolean context, they are converted to true.

  
//-----------------------------------------------------------------------------------------------------------------------
// const userEmail = "";
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log(" Object is empty ");
// }




  
//------------------------------------------------------------------------------------------------------------ 
// Nullish coalescing Operator (??) : null undefined 
//The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when the left-hand operand is 
//null or undefined. It returns the right-hand operand if the left-hand operand is null or undefined, otherwise, it 
//returns the left-hand operand.

let value = null ?? "default value";
console.log(value); // Output: "default value"

value = undefined ?? "default value";
console.log(value); // Output: "default value"

value = 0 ?? "default value";
console.log(value); // Output: 0

value = "" ?? "default value";
console.log(value); // Output: ""





//-----------------------------------------------------------------------------------------------------------
let val1;
val1 = 5 ?? 10;        // val1 becomes 5 because 5 is not null or undefined
val1 = null ?? 10;     // val1 becomes 10 because null is null
val1 = null ?? 10;     // val1 remains 10 because null is null
val1 = undefined ?? 565; // val1 becomes 565 because undefined is nullish
val1 = null ?? 89 ?? 30; // val1 becomes 89 because null is nullish, 89 is the next operand

console.log(val1);     // Output will be 89
//---------------------------------------------------------------------------------------------------------




// Ternary operator
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log(" Less than 80") : console.log(" More than 80");



