const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
            let rs=Number(item.price)   //converted into number 
    if (typeof rs !== 'number' || isNaN(rs)) {
    
    console.log("Invalid price.");
    
    
    return;
    
    }
    
    else{
    this.items.push(item);   // placed inside else block
    
    this.total +=rs;
    }
    },
    
    getTotal() {
    
    return Total=parseFloat(this.total).toFixed(2)} };   // removed unessecary $$ and curly bracket


    
    checkout.addItem({ name: "Coffee Maker", price:"99.95"});  // the price is declared as string
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    
    console.log("Total bill is:",checkout.getTotal()); // Expected issue !