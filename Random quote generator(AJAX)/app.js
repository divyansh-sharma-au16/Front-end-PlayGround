document.querySelector("#button").addEventListener("click" , genQuote)

function genQuote(e) {
    const xhr = new XMLHttpRequest();
    const num = Math.floor((Math.random() * 100) + 1);

   xhr.open('GET', `https://type.fit/api/quotes`, true);

   xhr.onload = function() {
        let output = ""
          
        let author = "author : "
       if(this.status === 200) {
        const response = JSON.parse(this.responseText);

        output += `<p> ${response[num].text} </p>`
        author +=  `<span>${response[num].author} </span>`
      }
      document.querySelector(".card-footer").innerHTML = author
      document.querySelector(".card-text").innerHTML = output

  }
    xhr.send();
    
    e.preventDefault() ;
}
  