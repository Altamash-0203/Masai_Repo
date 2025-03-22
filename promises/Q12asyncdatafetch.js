function fetchdata()
{
    let res=new Promise((resolve,reject)=>
    {
        let ran=Math.random()
        if(ran>0.5)
        {
            resolve("Fetch data succesfuuly")
        }
        else
        {
            reject("fetch data failed")
        }
    })
    
    return res;
}


async function fetchHandler()
{
    try
    {
        let result= await fetchdata()
    console.log("data"+result)
    }
    catch(mes)
    {
        console.log("data"+mes)
    }
}

fetchHandler()