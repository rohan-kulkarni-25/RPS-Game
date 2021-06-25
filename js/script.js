let userName = 'You';


function rpsGame(yourchoice) {



    var humanChoice, botChoice;
    humanChoice = yourchoice.id;
    console.log(humanChoice);

    var botChoice = numberToChoice(randtoRpsInt());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice);  // [0,1] Human lost
    console.log(results);
    message = finalMessage(results[0])
    console.log(message);
    rpsfrontend(humanChoice, botChoice, message);

}

function randtoRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var BotScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore, BotScore];
}

function finalMessage(yourScore) {
    if (yourScore === 0) {
        return { 'message': `${userName} lost the Game &#128533; <br>Better Luck Next Time !!`, 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': `Game Tied between ${userName} & Rohan's BOT`, 'color': 'yellow' };
    }
    else if (yourScore === 1) {
        return { 'message': `Hurray &#129321; <br>${userName} Won the Game !!`, 'color': 'chartreuse' };
    }
}

function rpsfrontend(humanImgChoice, BotImgChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    };

    // After Click Remove all images 

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    // Create Seperate Divs
    var Humandiv = document.createElement('div');

    var Botdiv = document.createElement('div');
    var Messagediv = document.createElement('div');

    // Display Human img
    Humandiv.innerHTML = "<p>" + userName + " Selected</p><img src='" + imageDatabase[humanImgChoice] + "'>";
    document.getElementById('flexbox').appendChild(Humandiv);


    // Display Message
    Messagediv.innerHTML = "<p style=' background-color: " + finalMessage.color + ";'>" + finalMessage.message + "<p/><button id='retry' onclick='location.reload();''>Play Again &#128521;</button>"
    document.getElementById('flexbox').appendChild(Messagediv);

    // Display Bot Image
    Botdiv.innerHTML = "<p>Rohan's BOT Selected</p><img src='" + imageDatabase[BotImgChoice] + "'>";
    document.getElementById('flexbox').appendChild(Botdiv);


    document.getElementById('flexbox').style.display = 'flex';

    Humandiv.setAttribute("class", "nohover");
    Botdiv.setAttribute("class", "nohover");
    Messagediv.setAttribute("class", "msg");

    document.getElementById('hidelater').remove();

}


