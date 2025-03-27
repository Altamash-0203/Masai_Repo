function createInventoryitem(name,category,price)
{
return{
    name: name,
    category: category,
    price: price,

    describe:function(){
        console.log("item:"+name+"category:"+category+"price:"+price)
    },
   
}


}
function addItemDiscount(items,dis)
{
    let after=items.price-((items.price/100)*2)
    return{
        ...items,
        after,
        applyDiscount()
        {
    console.log("discounted price for "+this.name+"is- "+after)
        }
    }
}

const item = createInventoryitem("Laptop ", "Electronics, ", 1500);
item.describe();


const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();

