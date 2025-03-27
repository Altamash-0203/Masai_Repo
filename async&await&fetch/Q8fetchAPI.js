async function fetchProducts() {
    try {
       
        let response = await fetch("https://fakestoreapi.com/products")  // fetching api data

        if (!response) {
            throw new Error("failed")   // if response is false err show
        }

       
        let products = await response.json()  //converting response to JSON

        
        console.log(products)       //printing products in the console

       
        let  tot = products.reduce((sum, product) => sum + product.price, 0)   //sum of all product price

       
        console.log("sum- ",tot) //printing sum of all [roduct price]

    } 
    
    catch (error)
    // catch block for if api call fails
     {
        console.error("Error:", error.message);
        console.log("failed to fetch");
    }
}

fetchProducts();