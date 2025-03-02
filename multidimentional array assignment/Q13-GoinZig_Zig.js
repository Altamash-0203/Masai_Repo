let arr=[
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
    
    ]
let result=""
for(i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        for(j=arr[i].length-1;j>=0;j--)
        {
            result+=arr[i][j]+" "
        }
    }
    else
    {
        for(k=0;k<arr[i].length;k++)
        {
            result+=arr[i][k]+" "
        }
    }
}
console.log(result)