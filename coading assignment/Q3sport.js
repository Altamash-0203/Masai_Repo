const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  
  // destructuring first player name and sport
  let firstplayer={name:fname,sport:psport}=athletes[0]  // athletes who is first means on 0 index we destrusturing that player using 0th index
  console.log(fname,"plays",psport)
  
  
  //neeraj score destruturing
  let scores2=athletes[2].scores
  let neerajscore=[firsts,seconds,...remscores]=scores2 // fistrs and seconds is first two scores and using spread operaor remaining value stored in remscores
  console.log(firsts,seconds,remscores)
  
  
  //creating new obj for neeraj
  let neerajobj={...athletes[2]}  // sperad operator makeing new object for athlets[2] index
  neerajobj.age=27
  neerajobj.worldChampion=true
  console.log(neerajobj)
  
  
  //collecting all scores in single array
  let allscores=[...athletes[0].scores,...athletes[1].scores,...athletes[2].scores]  // spread operator collecting all scores of athelets in single array
  console.log(allscores)