function deepclone(obj)
{
    let stringify=JSON.stringify(obj)
    let cloneobj=JSON.parse(stringify)
    
    cloneobj.hobbies.push("coading")
    
    
    console.log(obj)
    console.log(cloneobj)
}

deepclone({ name: "Alice", hobbies: ["reading", "traveling"] })