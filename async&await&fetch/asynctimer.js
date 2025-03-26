function timer(duration,callback)
{
    setTimeout(()=>{
        callback("timer of "+duration+" ms finished")
    },duration)
   
}
 
    function calling(ans)
    {
        console.log(ans)
    }
timer(2000,calling)