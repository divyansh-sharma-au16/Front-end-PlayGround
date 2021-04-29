// book constructor

function Book(title , author , ISBN) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
}


// UI Constructor

function UI() {}

UI.prototype.addBookToList = function(book) {
    console.log("running")
    const list = document.querySelector("#book-list")

    const row = document.createElement("tr")
    row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.ISBN}</td>
                    <td> <a href = "#" class = "delete"> X </a> </td>
   
    `;
    console.log(row)
    list.appendChild(row)
}
 
UI.prototype.createAlert = function(msg ,classNmae) {
    const div = document.createElement("div")
    div.className = `alert ${classNmae}`
    div.appendChild(document.createTextNode(msg))

    const container = document.querySelector(".container")
    const form =  document.querySelector("#book-form")

    container.insertBefore(div , form)

    setTimeout(function() {
        document.querySelector(".alert").remove()
    } , 3000)
     
}
UI.prototype.deleteBook = function(target) {
    if(target.className = "delete") {
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.clearFields = function() {
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#isbn").value = ""
    
}


document.querySelector("#book-form").addEventListener("submit" , function(e) {
    const title = document.querySelector("#title").value ,
          author = document.querySelector("#author").value ,
          isbn = document.querySelector("#isbn").value ;
    
    const book = new Book(title , author , isbn)     
    
    const ui = new UI()
    if(title === "" || author === "" || isbn === "") {
        ui.createAlert("please fill all the details" , "error")
    } else {
        ui.addBookToList(book)
        ui.createAlert("Book added !" , "success")
        ui.clearFields()

    }

  


    
    e.preventDefault()
})

document.querySelector("#book-list").addEventListener("click", function(e){

    const ui = new UI()
    ui.deleteBook(e.target)
    ui.createAlert("Book deleted!" , "success")
    e.preventDefault()

})
