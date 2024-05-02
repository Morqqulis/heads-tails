const elements = {
    result: document.getElementById('result'),
    statistics: {
        wins: document.querySelector('.wins'),
        botWins: document.querySelector('.bot-wins'),
        draws: document.querySelector('.draw'),
    },
    choices: {
        player: document.querySelector('.player-choice'),
        bot: document.querySelector('.bot-choice'),
    },
    buttons: {
        heads: document.getElementById('head'),
        tails: document.getElementById('tail'),
    },
    images: {
        head: document.getElementById('head-image'),
        tail: document.getElementById('tail-image'),
    },
}

elements.buttons.heads.addEventListener('click', () => playGame(1))
elements.buttons.tails.addEventListener('click', () => playGame(2))

function playGame(userChoice) {
    const randomNumber = Math.floor(Math.random() * 2) + 1
    const botChoice = Math.floor(Math.random() * 2) + 1
    const result = getResult(randomNumber, userChoice, botChoice)

    if (randomNumber === 1) {
        elements.images.tail.classList.add('hidden')
        elements.images.head.classList.remove('hidden')
    } else {
        elements.images.head.classList.add('hidden')
        elements.images.tail.classList.remove('hidden')
    }

    // displayResult(result)
    updateStatistics(result)
    displayChoices(userChoice, botChoice)
}

function getResult(randomNumber, userChoice, botChoice) {
    if (randomNumber === userChoice && randomNumber === botChoice) {
        return 'draw'
    } else if (randomNumber === userChoice && randomNumber !== botChoice) {
        return 'win'
    } else if (randomNumber === botChoice && randomNumber !== userChoice) {
        return 'botWin'
    } else if (randomNumber !== userChoice && randomNumber !== botChoice) {
        return 'lose'
    }
}

// function displayResult(result) {
//     if (result === 'draw') {
//         elements.result.textContent = 'Draw!'
//         elements.images.head.classList.add('hidden')
//         elements.images.tail.classList.add('hidden')
//     } else {
//         const playerWins = result === 'win'
//         const botWins = result === 'botWin'
//         elements.result.textContent = playerWins && botWins ? 'Draw!' : playerWins ? 'You win!' : 'Bot wins!'
//         elements.images.head.classList.toggle('hidden', !playerWins)
//         elements.images.tail.classList.toggle('hidden', playerWins)
//     }
// }

function updateStatistics(result) {
    if (result === 'win') {
        elements.statistics.wins.textContent++
    } else if (result === 'botWin') {
        elements.statistics.botWins.textContent++
    } else {
        elements.statistics.draws.textContent++
    }
}

function displayChoices(playerChoice, botChoice) {
    elements.choices.player.innerHTML = `Player's Choice: <br> ${playerChoice === 1 ? 'Heads' : 'Tails'}`
    elements.choices.bot.innerHTML = `Bot's Choice: <br> ${botChoice === 1 ? 'Heads' : 'Tails'}`
}
