function createCar(make,model,year)
 {
    return {
        make:make,
        model:model,
        year:year,

        describeCar: function()
         {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}`)
         }
    }
}

let car = createCar("hundayi","creata",2022)

car.describeCar(); 

