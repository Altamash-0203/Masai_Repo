function multiplyNumbers(num1,num2)
{
    return num1*num2
}

function mul(num1,num2)
{
    return multiplyNumbers.apply(null,[num1,num2])
}

console.log(mul(7,4))