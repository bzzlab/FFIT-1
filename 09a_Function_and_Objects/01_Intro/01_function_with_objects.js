/*
Topic: Objects with Function Expression
Functions allow program code to be executed multiple times
Application more maintainable (readable, cost-effective, expandable).
*/

/*
Example 1 - Function with objects as parameters
*/

//Object 1
let book1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//Object 2
let book2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//function that returns an object literal
let getSummary = function (book) {
    return {
        summary: `Das Buch \"${book.title}\" ist vom Autor ${book.author}`,
        pageCount: `Das Buch \"${book.title}\" hat ${book.pageCount} Seiten.`
    }
}

//call and result on the console
let obj1 = getSummary(book1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(book2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

