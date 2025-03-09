function processproduct(item)
{
    let arr=item.map(asso=>asso.name)

    item.forEach(asso => {
        if(asso.price>50)
        {
            console.log(asso.name,"is above $50")
        }
        else{
            console.log(asso.name,"is below $50")
        }
    });
    
}

processproduct([{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }])