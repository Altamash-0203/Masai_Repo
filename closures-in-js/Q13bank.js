function bankacc(num)
{
    let bal=num
  
    return{
        deposite:function(amount)
        {
            bal+=amount
            return bal
        },
        withdraw:function(amount)
        {
            bal-=amount
            return bal
        },
        total:function()
        {
            return bal;
        }
    }
 
}
let final=bankacc(100)

console.log(final.deposite(50))
console.log(final.withdraw(30))
console.log(final.total())