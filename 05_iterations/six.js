// const  coding = ["js", "ruby", "java","python"]

// const values  = coding.forEach( (item ) => {  // forEach return nhi karawata hai. so itsays undefined when function called.

//         console.log(item);
//         return item
// })

// console.log(values);

// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => { // if youare using { } then write  return 
//     return num > 4 
// })


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const  userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks); // will return the object.

//   userBooks = books.filter((bk) => bk.publish === 2009)
//   console.log(userBooks); // we can not reassign the value to a const . so use let userBook for modification.


const myUseNumber = [ 1,2 , 3, 4, 5,6 ,7]

// const newNumber = myUseNumber.map( (num) => { return num + 10})
// console.log(newNumber);

// U can use  multiple operation on nums...

// const newNum = myUseNumber
//                .map( (num) => num*10 )
//                .map((num) => num +1 )
//                .filter((num) => num >= 30)
// console.log(newNum)


const myNums  = [ 1,2,3]

const myTotal  = myNums.reduce( function( acc, currval)
{
    console.log( `acc: ${acc} and currval: ${ currval}`);
    return acc + currval;
},3)

console.log(myTotal);







 