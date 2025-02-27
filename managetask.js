let todos=["coading","running","collage","coading practice","sleep"]


for (let i = 0; i < todos.length - 1; i++) {
    todos[i] = todos[i + 1]
}
todos.length--
// console.log(todos)

for(j=todos.length-1;j>=0;j--)
{ 
   todos[j+2]=todos[j]
}
todos[0]="new1"
todos[1]="new2"
// console.log(todos)

todos[todos.length-1]="new  task"

console.log(todos)
