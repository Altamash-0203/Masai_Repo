fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>response.json())

.then(users=>{
    for(user of users )
{
    console.log(user.name)
}
})

.catch(err=>console.log("error",err))