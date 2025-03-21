console.log("Begin"); 

setTimeout(() =>
{ console.log("Timeout Task"); }, 0);

Promise.resolve().then(() =>
{ console.log("Promise Task") }); 

console.log("End");

//there are no issue in code 
//code running as per sequence


// begin and end printed immidietly because those console written synchronus js

// promise is printing before setimeout because promises uses microtask queue microtask runs after sychronus code 

// timeout task printing after promise task because after settimeout uses marcotask queue is slower than microtask so it printing in last