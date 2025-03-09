function check(data)
{
  let tasks=data.filter(person=>person.tasksCompleted>5)

   tasks.sort((a,b)=>b.rating-a.rating)



   return tasks.map(person => {
    let performance;
    if (person.rating > 4.5) {
        performance = "Excellent";
    } else if (person.rating > 3) {
        performance = "Good";
    } else {
        performance = "Needs Improvement";
    }

   return{ name: person.name, performance }
});
}

console.log(check( [

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]))

