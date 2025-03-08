let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for( stu in studentScores)
  {
  
     let marks=studentScores[stu]
     if(marks>=90)
     {
       console.log(stu+"-A")
     }
     else if(marks>=80 && marks<90)
     {
       console.log(stu+"-B")
     }
       else if(marks>=70 && marks<80)
     {
       console.log(stu+"-C")
     }
       else if(marks>=60 && marks<70)
     {
       console.log(stu+"-D")
     }
     else
     {
       console.log(stu+"-F")
     }
     
  }
  
  
  