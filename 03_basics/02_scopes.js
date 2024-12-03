// // let a = 10;
// // const b = 20;
// // var c = 30;
// let a = 300;

// if (true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log("Inner :", a);

// } // its scope

// //console.log(a);
// //console.log(b);
// console.log(c); // only var will print


///////Nested scope......................

// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website);

//     two() // this  isexecuting the 2nd function.

// }

// one()

if(true){
    const username = "sndeep"
    if(username== "sndeep"){
        const website = "youtube"
        //console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

// ++++++++++++++++Interesting +++++++++++++++++++++
//if we only declare the function then we can s=call anywhere
// but if we assign it to any variable then we have to call after only the declearation .

addone(5)
function addone(num){
    return num +1
}



const addTwo = function(num)
{
    return  num + 1;
}
addTwo(5);


 