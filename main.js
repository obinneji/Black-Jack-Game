
// DOM
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let personEl = document.getElementById("person-el")

// initial state of the game
let cards =[]
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""

// starting the game

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let SecordCard = getRandomCard()
    cards = [firstCard, SecordCard]
    sum = firstCard + SecordCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards:"
    for(i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20){
        message = "Draw new card"
    } else if (sum === 21){
        message = "you have Black jack"
        hasBlackjack = true
    } else {
        message = " you are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}


// Drawing a new card

function drawNewCard(){
    if (isAlive === true && hasBlackjack === false){
    newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}

}

//  Random numbers
function getRandomCard(){
    randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10
    } else if(randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}



