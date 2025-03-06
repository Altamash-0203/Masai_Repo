function sum(k) 
{

    for (a=0;a*a<=k;a++) 
        {
      for (b=0; b*b<=k;b++) 

        {
        if (a*a+b*b==k) 
            {

          return true
            }
          }
         }
    return false
}

  console.log(sum(25))
  console.log(sum(7))