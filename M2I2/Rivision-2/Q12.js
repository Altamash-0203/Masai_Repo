const people = [
    {
        name: "Alice",
        address: { city: "New York",
        street: { name: "Broadway", number: 123 } }
    }, 
        
        {
            name: "Bob",
            address: { city: "Los Angeles",
            street: { name: "Sunset Boulevard", number: 456 } }
        }
            
]



let [
    {name:one,address:{city:city1,street:{name:streetname}}},
      {name:two,address:{city:city2,street:{name:streetname2}}}
    ]=people

    let res=[]

    res.push(`${one} lives in ${city1} on ${streetname}, ${two} lives in ${city2} on ${streetname2}`)

console.log(res)
// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]