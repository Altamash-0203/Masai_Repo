function filtereven(arr)
{
    return arr.filter(num=>num%2==0)
}

function sumarr(arr)
{
    return arr.reduce((acc,curr)=>acc+curr,0)
}

function sortandconcat(arr1,arr2)
{
   let x=arr1.sort((a,b)=>a-b)
   let y=arr2.sort((a,b)=>a-b)
    return x.concat(y)
}

let arr1=[40,20,65,12,78,14,69]
let arr2=[52,65,48,56,1,2,6,41]

console.log("arr 1 filter:",filtereven(arr1))
console.log("arr 2 filter:",filtereven(arr2))
console.log("----------------------------------------------")
console.log("sum of arr1",sumarr(arr1))
console.log("sum of arr2",sumarr(arr2))
console.log("----------------------------------------------")
console.log("sort and concat arr1 & arr2",sortandconcat(arr1,arr2))