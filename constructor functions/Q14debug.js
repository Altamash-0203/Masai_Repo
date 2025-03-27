function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo:function(){    // instead of arrow function used simple function because arrow dont have this context
        console.log("Book: " + this.title + ",Author: " + this.author);
      }
    };
  }
  
  const book = createBook("1984", "George Orwell");
book.printInfo();
// Output: Book: 1984, Author: George Orwell
