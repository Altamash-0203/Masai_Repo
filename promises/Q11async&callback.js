function timer(duration,oncomplate)
{
 setTimeout(() => {
    oncomplate("Timer of "+duration+"ms finished")
 }, duration);


}
timer(2000,fun=>{
    console.log(fun)
})

