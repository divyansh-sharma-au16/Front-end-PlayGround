let min = 1,
    max = 10 ,
    winningNum = getWinningNum(min ,max),
    guessLeft = 3 ;

const game = document.querySelector("#game") ,
      minNum = document.querySelector(".min-num") ,
      maxNum = document.querySelector(".max-num") ,
      guessInput = document.querySelector("#guess-input"), 
      guessBtn = document.querySelector("#guess-btn"), 
      message = document.querySelector(".message");



      
minNum.textContent = min ;
maxNum.textContent = max ;

game.addEventListener("mousedown" , function(e) {
    if(e.target.className === "play-again"){
        window.location.reload();
    }
  
})



guessBtn.addEventListener("click" , function() {
    let guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess > max || guess < min) {
        setMessage(`Please enter a number in range ${min} to ${max}` , 'red');
    }
    if (guess === winningNum) {
        gameOver(true , `${guess} is correct , YOU WIN!`)
    } else {
        guessLeft -= 1 ;
        if(guessLeft === 0 ) {
            gameOver(false ,`${guess} is wrong  , ${winningNum} is the answer.` )
        } else {
            guessInput.style.borderColor = "red"
            guessInput.value = " "
            setMessage(`${guess} is not correct , ${guessLeft} guesses left` , "red")
        }
    }
});

function gameOver(won , msg){
    let color ;
    won === true ? color = 'green' : color = "red" ;
    guessInput.disabled = true ;
    guessInput.style.borderColor = color ;
    message.style.color = color
    setMessage(msg)

    guessBtn.value = "Play Again"
    guessBtn.className += "play-again"
    
    
}


function getWinningNum(min , max) {
   return  Math.floor(Math.random()*(max-min + 1) + min);
    
}
function setMessage(msg , color) {
    message.style.color = color ;
    message.textContent = msg;
} 



      





