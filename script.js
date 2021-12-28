// //Add an event listener to btn 

// document.getElementById("btn").addEventListener("click",getData);

// //Lets creat a function to get the data from the API
// function getData(){
//     fetch('https://www.anapioficeandfire.com/api/books')
//     .then(response=>response.json())
//     .then(data=> {
//         // console.log(data)


//         //Display the data in the UI
//         let output=""
//         data.forEach(function(books) {
//             output+=`<li>${books.name}</li>
//             <li>${books.isbn}</li>
//             <li>${books.authors}</li>`
//             });

//             document.getElementById("output").innerHTML=output;
//     }).catch(err=> console.log(err));
    

// }

function search() {
    const url="https://www.anapioficeandfire.com/api/books";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(users){
        getData(users);
    })
    .catch(function(error){
        console.log(error);
    })
}

function getData(books){
    //will use which contain empty results
    let booksDiv=document.querySelector("#books")
    booksDiv.innerHTML="";

//Create a table element
let table=document.createElement("table")
//Iterate over user data
books.forEach(currentBook => {
    let row=table.insertRow();
    let name=row.insertCell()
    name.innerHTML=currentBook.name;

    let isbn=row.insertCell();
isbn.innerHTML=currentBook.isbn;

let authors=row.insertCell();
authors.innerHTML=currentBook.authors;

let numberOfPages=row.insertCell();
numberOfPages.innerHTML=currentBook.numberOfPages;

let publisher=row.insertCell();
publisher.innerHTML=currentBook.publisher;

let releasedate= row.insertCell();
releasedate.innerHTML=currentBook.released

let characters=row.insertCell();
characters.innerHTML=currentBook.characters[20]
    
});
booksDiv.appendChild(table);
}

