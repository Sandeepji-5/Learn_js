// [ "", "",""]
// [ {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
   // console.log(num);
    
};

const greeting  = " Hello world"
for( const greet of greeting){
  //  console.log(`Each char is ${greet}`)
}

// MAp
const map = new Map()
map .set(' USA', "United State of America")
map.set('Fr' ,"France")
map.set('In', " India")

//console.log(map)



for(const key of map)
{
    //console.log(key)
}

for(const [key, value] of map)
{
    //console.log(key, ':-', value)
}

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }

// **********[This Syntax is Not Working ]***********************

// for(const [key, value] of myObj){
//     console.log(key, ':-', value);
// }

const myObj =
{
    js: 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple',
    more :"Many language are there"

}

// for keys in object

for (const key in myObj) {
    //console.log(key);      
    }

for (const key in myObj) {
    console.log(`${key} : is shortcut  for ${myObj[key]}`);
    // console.log(myObj[key]);  
    }



