let n=5

for(i=0;i<n;i++)
{
    let bag=""
    if(i==0 || i==n-1)
    {
        for(j=0;j<n;j++)
        {
            bag+="*"+" "
        }
    }
    else
    {
        bag+="*"
    }
    console.log(bag)
}