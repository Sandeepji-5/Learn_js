// [ "", "",""]
// [ {}, {}, {}]


//--------------------------------------------------------------------------------------------------------------------------------------
for...of Loop in JavaScript
The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets,
and more. It provides a simpler and more readable syntax for iterating over elements.
   
const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num);  
};

const greeting  = " Hello world"
for( const greet of greeting){
  //  console.log(`Each char is ${greet}`)
}
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d



//.............................................................................................


Map in JavaScript
A Map is a collection of key-value pairs where keys can be of any type. It maintains the insertion order of the keys.

   
const map = new Map()
map .set(' USA', "United State of America")
map.set('Fr' ,"France")
map.set('In', " India")

console.log(map)

Map(3) {
  'USA' => 'United States of America',
  'Fr' => 'France',
  'In' => 'India'
}


//-------------
for(const key of map)
{
   console.log(key)
}

output:-
   USA United States of America
   Fr France
   In India



//---------------------------------------------------
for(const [key, value] of map)
{
    console.log(key, ':-', value)
}
output :-
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('In', "India");


//-----------------------------------------------------------------------------
for (const [key, value] of map) {
    console.log(key);
}

USA
Fr
In
//---------------------------------------------------------------------------







//--------------------------------------------------


// **********[This Syntax is Not Working ]***********************
//-------------------------------------------------------------------------
for(const [key, value] of myObj){
    console.log(key, ':-', value);
}

USA :- United States of America
Fr :- France
In :- India
//-------------------------------------------------------------------------

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
};

for (const key in myObj) {
    console.log(key);      
}

//----------------------------------------------------------------------------------
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
js
cpp
rb
swift
more


for (const key in myObj) {
    console.log(myObj[key]);      
}
javascript
C++
ruby
swift by apple
Many language are there





//-----------------------------------------------------------------------------------------------------------

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
    more: "Many language are there"
};

// for keys in object
for (const key in myObj) {
    console.log(`${key} : is shortcut for ${myObj[key]}`);
    console.log(myObj[key]);  
}
js : is shortcut for javascript
javascript
cpp : is shortcut for C++
C++
rb : is shortcut for ruby
ruby
swift : is shortcut for swift by apple
swift by apple
more : is shortcut for Many language are there
Many language are there


