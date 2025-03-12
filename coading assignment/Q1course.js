const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];
  
  let com50=studentsProgress.filter(lesson=>lesson.completedLessons>=(lesson.totalLessons/2))
  
  
  let calavg=com50.map((stu)=>(stu.completedLessons/stu.totalLessons)*100)
  
  let totalavg=calavg.reduce((acc,cv)=>acc+cv)/calavg.length
  
  let top=studentsProgress.filter(topper=>(topper.completedLessons/topper.totalLessons)*100>80)
  
  
  
  console.log("activestudents",com50)
  console.log("--------------------------------------------------------------------")
  console.log("completed percentage",calavg)
  console.log("----------------------------------------------------------------")
  console.log("total avg of course",totalavg)
  console.log("----------------------------------------------------------------")
  console.log("top learner is",top)
  
  
  
  
  
  