//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
 //   console.log(num);
}

const greetings="Good Morning"
for (const greet of greetings) {
//    console.log(greet);
}

//maps

const map=new Map()
map.set('a',"Virat")
map.set('b',"Dhoni")
map.set('c',"Sachin")

//console.log(map);

for (const [key] of map) {
  //  console.log(key);
}

//for of cannot be used with object


//for in
const obj={
    a:"virat",
    b:"dhoni",
    c:"sachin"
}
for (const value in obj) {
//    console.log(obj[value]);
}

const test=[1,2,3,4,5]

for (const key in test) {
  // console.log(key);
}

// for in loop cannot be used with map


//for each

const ar =["virat","Dhoni","Sachin"]

ar.forEach((value) => {
    console.log(value);
});

ar.forEach((value,index,array) => {
    console.log(value,index,array);
});