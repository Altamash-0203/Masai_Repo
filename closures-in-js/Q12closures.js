function main()
{
    let count=0
    return{
        inc:function(){count++;return  count},
           total:function(){return count}
           }
}
let final=main()
console.log(final.inc())
console.log(final.inc())
console.log(final.total())