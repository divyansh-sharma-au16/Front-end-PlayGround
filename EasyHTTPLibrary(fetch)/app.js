http = new EasyHTTP
// Get Data
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// User data

const dara =  {
    name : "divyansh" ,
    usrername : "dsharma" , 
    email : "divyansh@gmail.com"
}

//post Request

http.post('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err))