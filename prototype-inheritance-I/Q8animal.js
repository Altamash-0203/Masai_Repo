function animal()
 {
    this.type="animal"
  }

 animal.prototype.sound=function()
  {
    console.log("bhoo bhoo")
  }

  function dog()
  {
    animal.call(this)
  }

  dog.prototype = Object.create(animal.prototype)
  
  dog.prototype.constructor = dog
  
  dog.prototype.sound=function()
   {
    console.log("Bark")
  }
  
  const myDog=new dog()
  
  myDog.sound()
  