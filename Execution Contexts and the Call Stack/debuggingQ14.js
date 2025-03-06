const userProfile = {

    name: "Alice",
    
    age: 28,
    
    details: function() {
    
    return `${this.name} is ${this.age} years old.;` }, // backticks are not used
    
    updateAge(newAge) {
    
    if (newAge <= 0) {
    
    console.log("Invalid age.");
    
    return; }
    
    this.age = newAge;
    
    // console.log(this.details());   this console not required of expected output

} };
    
    userProfile.updateAge(30);
    
    console.log(userProfile.details()); // Expected: "Alice is 30 years old."