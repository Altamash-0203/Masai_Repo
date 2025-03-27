function creatlibrary()
{
    let bag=[]

    return{
        add(book)
        {
            bag.push(book)
        },

        remove(title)
        {
            let dex=bag.findIndex(book=>book.title==title)
            if(dex!=-1)
            {
                bag.splice(dex,1)
            }
        },

        list(){
            if(bag.length==0)
            {
                console.log("no books")
            }
            else{
                for(i=0;i<bag.length;i++)
                {
                    console.log(bag[i])
                }
            }
        }
    }
}
function book(title,author)
{
    return{
        title,
        author
    }
}

const library = creatlibrary();

const book1 = book("To Kill a Mockingbird", "Harper Lee");
const book2 = book("1984", "George Orwell");

library.add(book1);
library.add(book2);

library.list();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell
console.log("-----------------After removing------------------------")
library.remove("1984");
library.list();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

