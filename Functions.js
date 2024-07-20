function test()
{
    console.log("Harsh")
}
//test()

function add(num1,num2)
{
    console.log(num1+num2)
}
//add(2,5)

function addnum(n1,n2)
{
    let res=n1+n2
    return res
}
const result=addnum(5,5)
//console.log("Result:", result);

function login(username)
{
    return `${username} is a cricketer`
}
//console.log(login("Virat"))
//console.log(login())

function calculate(val1,val2,...num1)
{
 return num1
}

//console.log(calculate(200,500,800,2000))

const user={
 username:"Harsh"

}

function obj(anyobject)
{
  console.log(`name is ${anyobject.username}`);
}

//obj(user)

obj({
    username:"Harsh"
})

const arr=[100,200,300]
function returnvalue(arr)
{
return(arr[2])
}

console.log(returnvalue(arr))

