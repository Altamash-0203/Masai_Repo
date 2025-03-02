let n=3

let arr= [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let bag=""

for(i=n-1;i>=0;i--)
{
    bag+=arr[i][0]+" "
}

for(i=1;i<n;i++)
{
    bag+=arr[0][i]+" "
}

for(i=1;i<n;i++)
{
    bag+=arr[i][n-1]+" "
}
for(i=1;i<n-1;i++)
{
    bag+=arr[n-1][i]
}


console.log(bag)