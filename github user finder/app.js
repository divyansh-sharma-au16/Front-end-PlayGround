const github = new Github
const ui = new UI
// search input

const search = document.querySelector("#searchUser")

search.addEventListener("keyup" , (e) => {
    const userText = e.target.value
    if(userText != "") {
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert("User not found !" , "alert alert-danger")
            } else {
                // show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })       
    }else {
        // clear profile
        ui.clearProfile()
    }
    

})