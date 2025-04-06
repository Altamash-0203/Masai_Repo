const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    else
    {
    this.books.push(book);     // put this statemnt inside the else block
    console.log("book added successfully")
    }
    
    
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title);
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    //adding
    library.addBook({ title:"atomic habit",author: "George Orwell", year: 1949 });
    library.addBook({ title:"atomic habit",author: "George Orwell", year: 1949 });
    library.addBook({ title:"atomic habit",author: "George Orwell", year: 1949 });
    

    //removing
library.removeBook("atomic habit")
    
    //printing library all books
    console.log(library.books)
    

    //finding by title
  console.log(library.findBookByTitle("The Hobbit"))

    //no of books in library
    console.log(library.books.length);