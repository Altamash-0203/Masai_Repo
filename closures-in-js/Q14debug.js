function createFunctionList() {

    let functions = [];
    
    for (let i = 0; i < 5; i++) {    
        /*  for (var i = 0; i < 5; i++) insread of var i use the let because value
        of i using var always 5 bcoz its global so output comming always index 5 instaed of var i used the let */
    
    functions.push(function () {
    
    console.log("Index:", i);
    
    });
    
    }
    
    return functions; }
    
    const functionList = createFunctionList();
    
    functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"
    
    functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"
    
    functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"
    
    functionList[3]();   // Expected Output: "Index: 3", Actual Output: "Index: 5"
    
    functionList[4]();   // Expected Output: "Index: 4", Actual Output: "Index: 5"