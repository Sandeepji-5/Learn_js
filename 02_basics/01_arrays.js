// // Arrays 
// const myArr = [1,2,3,4,5,6,7]
// const myHeros = ["Shaktiman","naagraj"];

// const myArr2 =  new Array(12,34,33,32);
// console.log(myArr[0]);


// // Array Method

// myArr.push(78)
// myArr.push(56)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.indexOf(2))



// slice and Splice 
// slice - = it simply give the section of  the array
// splice- it basically remove the elements  from the arrays and show the remove part in this the last boundary includes.

const myn1 = [1,2,3,4,5,6]
console.log("A",myn1);

const myn2 =  myn1.slice(0,3)
console.log("B",myn2);

const myn3 =  myn1.splice(0,3);
console.log("C",myn3)
console.log("The Values  has Changed ","A",myn1);
