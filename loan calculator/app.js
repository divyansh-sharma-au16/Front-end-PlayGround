document.querySelector("#loan-form").addEventListener("submit" , function(e) {
    e.preventDefault() ;

    document.querySelector("#loading").style.display = "block"
    document.querySelector("#results").style.display = "none"

    setTimeout(calculate , 2000)

})

function calculate() {
    

    const amount = document.querySelector("#amount")
    const interest = document.querySelector("#interest")
    const years = document.querySelector("#years")

    const monthlyPayment = document.querySelector("#monthly-payment")
    const  totalPayment = document.querySelector("#total-payment")
    const totalInterest = document.querySelector("#total-interest")


    const principal =  parseFloat(amount.value) ;
    const calculatedInterest =  parseFloat(interest.value) / 100 / 12 ;
    const calculatedPayments = parseFloat(years.value) * 12 ;

    const x = Math.pow(1 + calculatedInterest , calculatedPayments) ;
    const montly = (principal * x * calculatedInterest) / (x-1) ;

    if (isFinite(montly)) {
        monthlyPayment.value = montly.toFixed(2)
        totalPayment.value = (montly * calculatedPayments).toFixed(2)
        totalInterest.value = ((montly * calculatedPayments) - principal).toFixed(2)
        
        document.querySelector("#loading").style.display = "none"
        document.querySelector("#results").style.display = "block"   

    } else {
        document.querySelector("#results").style.display = "none"   

        document.querySelector("#loading").style.display = "none"
        showError("please check your numbers")
    }

}

function showError(err) {
    const card =  document.querySelector(".card")
    const heading = document.querySelector(".heading")

    const errDiv = document.createElement("div")
    errDiv.className = "alert alert-danger"

    errDiv.appendChild(document.createTextNode(err))

    card.insertBefore(errDiv , heading)

    setTimeout(function(){
        document.querySelector(".alert").remove()

    } , 3000)
}