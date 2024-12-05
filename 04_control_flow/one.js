// if

// const isUserloggedIn  = true;
// if(2 == "2"){
//     console.log("executed");
// }

// if(2 === "2"){
//     console.log("executed");
// }


// console.log(typeof 2);

  
// // <, > ,<= , >=, ==, !=, === this check the type also.

// const balance   = 1000;

// if(balance > 500)  console.log("test"), console.log("test2");  // not good practice..

// if( balance < 500){
//     console.log(" Less than 500");
// }else if (balance < 750){
//     console.log(" less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{ console.log("less than 1200");}



const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;
if(userLoggedIn  && debitCard && 2==3){
    console.log(" Allow to buy the Course");
}

if(userLoggedIn || loggedInEmail){
    console.log("User Logged in");
}


