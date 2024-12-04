const user = {
    username: "SAndeep",
    price: 999,
    welcomeMessage : function(){
       // console.log(`${this.username} , welcome to website`);
        // console.log(this);

    }

}
//  user.welcomeMessage();
// user.username = "Sandy";
// user.welcomeMessage();
// console.log(this)

// function chai(){
//     let username = "Sandeep"
//     console.log(this.username) ;   // if  we do this inside a  function then more content will come.
// }

// chai()


// const chai = function () {
//     let username = " Sandeep"
//     console.log(this.username);
    
// }
// chai()

const chai = function () {
    let username = " Sandeep"
   // console.log(this);
    
}
chai()

//if you use { then you have to write the rturn keyword}

// const addTwo = (num1, num2) =>{
//     return  num1 + num2  
// }


// implicit return  means there is no need to  use return keyWord
// const addTwo = (num1, num2) => num1 + num2

// const addTwo  = (num1, num2) => (num1 +  num2)
const addTwo  = (num1, num2) => ({username : "Sandeep"})





console.log(addTwo(3, 4))
