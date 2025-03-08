let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let bag=""
for(key in book)
{
  let detail=book[key]
  bag+=(key+":"+detail+" ")
}
console.log(bag)