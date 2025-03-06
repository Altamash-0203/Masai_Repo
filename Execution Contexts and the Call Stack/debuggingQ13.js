const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {

    item.price=parseFloat(item.price) // convertsed price in string into Number 
    
    if (typeof item.price !== 'number' || isNaN(item.price)) {
    
    console.log("Invalid price.");
    
    return;
    
    }
    
    this.items.push(item);
    
    this.total += item.price;
    
    },
    
    getTotal() {
    
    return `Total: $${parseFloat(this.total).toFixed(2)}`; } };  // back ticks not used
    
    checkout.addItem({ name: "Coffee Maker", price: "99.95" });
    
    checkout.addItem({ name: "Milk", price: 3.50 });
    
    console.log(checkout.getTotal()); // Expected issue !