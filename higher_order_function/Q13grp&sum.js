
function groupandsum(arr)
{
   return arr.reduce((acc, group) => {
        if(acc[group]==null){
            acc[group]=1
        }
        else
        {
          acc[group]++
        }
        return acc
    }, {});
}

console.log(groupandsum(["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]))