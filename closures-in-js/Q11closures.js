function outerfunction()
{
    let message="Hello"
    function innerfunction()
    {
       console.log(message)
    }
 return innerfunction()
}

outerfunction()