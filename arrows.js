const user={
    username:"Harsh",
    price: 999,

    welcomeuser: function()
    {
      console.log(`${this.username} , is a user`);
    }
}
//user.welcomeuser();
user.username="Sam"
//user.welcomeuser();

//console.log(this);

//function chai()
{
    const username="Harsh"
    console.log(this.username);
}
//chai();

//const chaii= function chai()
{
    const username="Harsh"
    console.log(this.username);
}
//chai();

 chaii = () => 
{
    const username="Harsh"
    console.log(this);
}
chaii();

const addtwo= (num1,num2) => ({username:"Harsh"})

console.log(addtwo(2,5));





