function set_int()
{
    let load= setInterval(() => {
        console.log("loading...")
    },1000)
   
     
     setTimeout(() => {
        clearInterval(load)
        console.log("loaded successfully")
     }, 5000);

}

set_int()