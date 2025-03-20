

/*
i modified the code and use prompt for user input  which is always take input from user and add,find,join as per user input
*/


function manageStudents(students) {   //added students arr as a parameter

    // Add "David" at index 
    let nameadd=prompt("enter name which is add-:")
    students.splice(1, 0, nameadd);
    

    // Check if "Eve" is in the list
    let namefind=prompt("enter name which is find-:")
  // Should return false

    // Convert the array to a string with names separated by commas
    let sepratechar=prompt("enter char which seprate-:")
      // Expected: "Alice,David,Bob,Charlie"
    
    console.log(students)
        console.log(students.includes(namefind));
        console.log(students.join(sepratechar));

        
}

manageStudents(["Alice", "Bob", "Charlie"]);