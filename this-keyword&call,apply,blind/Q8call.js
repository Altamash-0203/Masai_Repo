function personalinfo()
{
 console.log("name is",this.name,"and age is",this.age)
}

let obj={
    name:"Shaikh Altamash",
    age:"20"
}

personalinfo.call(obj)