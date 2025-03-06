
function pattern(n)
{
    let bag=""

    for(i=1;i<=n;i++)
    {
        if(i==1 || i==n)
        {
            let temp=""
            for(j=1;j<=n;j++)
            {
                temp+="* "
            }
            console.log(temp)
        }
        else{
            console.log("*")
        }
    }
 
}
pattern(5)

