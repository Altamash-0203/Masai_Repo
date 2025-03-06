  
  const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

      
  function fd(bag) {
    let res = []
    
    for (let i = 0; i < people.length; i++)
         {
        let { name, address } = people[i]

        let { city, street } = address
        
        let { name: streetName } = street
        
  
      res.push(`${name} lives in ${city} on ${streetName}`)
    }
  
    return res;
  }
  
  console.log(fd(people));

  