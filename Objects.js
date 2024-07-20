//const it= new Object()
const it={}
it.id=101
it.name="Harsh"
it.college="ITER"
//console.log(it)
const regularUser={
    email:"hkop966@gmail.com",
    fname:{
        uname:{
            firstname:"harsh",
            lastname:"kumar"
        }
    }
}
//console.log(regularUser.fname.uname.firstname)
 
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3={...obj1,...obj2}
//console.log(obj3)

//console.log(Object.keys(it))

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"Harsh"
}
const{courseInstructor:instructor}=course

console.log(instructor)


