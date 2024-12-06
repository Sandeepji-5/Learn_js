const coding = ["JS ", "ruby", "java", "python", "cpp"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {console.log(item)});


function printMe(item){
    //console.log(item);
}

//coding.forEach( printMe);


coding.forEach((item, inde, arr) =>{
    //console.log(item,index, arr);
})
// forEach also contains the  item, index and arr
// JS  0 [ 'JS ', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'JS ', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'JS ', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'JS ', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'JS ', 'ruby', 'java', 'python', 'cpp' ]

const myCoding1 = [
    {
    languageName: " JavaScript",
    languageFileName :" js"
    },
    {
    languageName: " Java",
    languageFileName :" java"
    },
    {
    languageName: " C++",
    languageFileName :"cpp"
    }
]




myCoding1.forEach(  (item) => {
    console.log(item.languageName);
   // console.log(item);
}  
)