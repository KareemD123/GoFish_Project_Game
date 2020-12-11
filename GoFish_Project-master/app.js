// GoFish PseudoCode

// Constant Variables:
// Deck of Cards, Your cards, Opponent's cards, remaining cards, number of points for user, number of points for opponent
// 

const numbersDeck = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13",
    "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13",
    "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13",
    "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13"];

// const numbersDeck = ["sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK",
//     "dA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK",
//     "hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
//     "cA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK"];

const namesDeck = ["Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades",
    "Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
    "Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts",
    "Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs"];

let deck = Array.from(new Array(52), (x, i) => i);
let myCardClass, myNumberAlone2, myNumberAlone3, resultOtherHand, matchArray, swap, swap1, swap2, otherHand1;
let count1, count2, count3, count4, count5, count6, count7, count8, count9, count10, count11, count12, count13;


function shuffle(numbersDeck) {
    let repeat = numbersDeck.length;
    while (repeat != 0) {
        numbersDeck.push(numbersDeck.splice(Math.floor(Math.random() * repeat), 1)[0]);
        repeat = repeat - 1;
    }
}

shuffle(numbersDeck);
console.log(numbersDeck);

// use math random on indices
let myHand = [];
let otherHand = [];
let myPoints = 0;
let otherPoints = 0;

input_card = 0;


let myBeginningHand = [];
for (let i = 0; i < 7; i++) {
    let randomCardClass = myHand.push(numbersDeck.splice(0, 1)[0]);
    shuffle(numbersDeck);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(myHand[i]);
    myFirstCards.addEventListener('click', compareChoices)
}


console.log(myHand);

let otherBeginningHand = [];
for (let i = 0; i < 7; i++) {
    let randomCardClass = otherHand.push(numbersDeck.splice(0, 1)[0]);
    shuffle(numbersDeck);
    let otherHand1 = document.getElementById('otherHand');
    let opponentsFirstCards = document.createElement('div');
    otherHand1.appendChild(opponentsFirstCards);
    opponentsFirstCards.classList.add('card');
    opponentsFirstCards.classList.add(otherHand[i]);
    // opponentsFirstCards.classList.add('back');
    // opponentsFirstCards.addEventListener('click', compareChoices)
}

console.log(otherHand);
console.log(numbersDeck);


// This function gets the input, we need another one to compare it with the values in the array of the otherhand

// document.getElementById('submitButton').addEventListener('click', compareChoices);

document.getElementById('pickUpButton').addEventListener('click', pickUpCard);
document.querySelector('.blue').addEventListener('click', pickUpCard);

// document.getElementById('opponentPickUpButton').addEventListener('click', opponentPickUpCard);

document.getElementById('restartButton').addEventListener('click', reload);

function doNothing(){
    console.log('There are no more cards left!');
}


function reload() {
    location.reload();
    return false;
}

// 

let player = new Audio('cardsound.mp3');
player.crossorigin = 'anonymous';

function pickUpCard() {
    player.play();
    if (numbersDeck[0] != undefined){
    let randomCard = numbersDeck.splice(0, 1)[0];
    myHand.push(randomCard);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(randomCard);
    myFirstCards.addEventListener('click', compareChoices);
    console.log(randomCard);
    console.log(myHand);
    winner();}
    else { document.getElementById('pickUpButton').innerHTML = 'No Cards Left!';
    document.querySelector('.blue').addEventListener('click', doNothing);
};
}


function opponentPickUpCard() {
    let randomCard = numbersDeck.splice(0, 1)[0];
    otherHand.push(randomCard);
    let otherHand1 = document.getElementById('otherHand');
    let opponentsFirstCards = document.createElement('div');
    otherHand1.appendChild(opponentsFirstCards);
    opponentsFirstCards.classList.add('card');
    opponentsFirstCards.classList.add(randomCard);
    // opponentsFirstCards.classList.add('back');
    // opponentsFirstCards.addEventListener('click', compareChoices)
    console.log(randomCard);
    console.log(otherHand);
    winner();

}


function removeItemAll(arr, value) {
    var i = 0;
    while (i < otherHand.length) {
        if (otherHand[i] === secondArray) {
            otherHand.splice(i, 1);
        } else {
            ++i;
        }
    }
}

function getAllIndices(arr, value) {
    var indices = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === value)
            indices.push(i);
    return indices;
}

function compareChoices(evt) {
    console.log(myHand);
    myCardClass = evt.target.className;
    myNumberAlone2 = myCardClass.match(/\d/g);
    myNumberAlone3 = myNumberAlone2.join('');
    console.log(myNumberAlone3);
    console.log(myNumberAlone2);
    console.log(typeof (myNumberAlone3));

    let resultOtherHand = [];
    for (let i = 0; i < otherHand.length; i++) {
        var otherNumberAlone2 = otherHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        resultOtherHand.push(otherNumberAlone3);
    }

    let matchArray = getAllIndices(resultOtherHand, myNumberAlone3)
    console.log(matchArray[0])

    if (matchArray[0] == undefined) {
        alert('GoFish!');
    }

    if (matchArray[0] != undefined) {
        myHand.push(otherHand[matchArray[0]]);
        var swap = otherHand[0];
        otherHand[0] = otherHand[matchArray[0]];
        otherHand[matchArray[0]] = swap;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        // let otherHand1 = document.querySelector('back');

        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[1] != undefined) {
        console.log('I am running!');
        myHand.push(otherHand[matchArray[1] - 1]);
        var swap1 = otherHand[0];
        otherHand[0] = otherHand[matchArray[1] - 1];
        otherHand[matchArray[1] - 1] = swap1;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        // let otherHand1 = document.querySelector('back');

        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[2] != undefined) {
        myHand.push(otherHand[matchArray[2] - 2]);
        var swap2 = otherHand[0];
        otherHand[0] = otherHand[matchArray[2] - 2];
        otherHand[matchArray[2] - 2] = swap2;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        // let otherHand1 = document.querySelector('back');

        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }
    computerTurn();
    // setTimeout(computerTurn, 1500);
    winner();
}

let resultMyHand;
function winner() {

    resultMyHand = [];
    for (let i = 0; i < myHand.length; i++) {
        var otherNumberAlone2 = myHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        resultMyHand.push(otherNumberAlone3);
    }
    
    resultOtherHand = [];
    for (let i = 0; i < otherHand.length; i++) {
        var otherNumberAlone2 = otherHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        resultOtherHand.push(otherNumberAlone3);
    }

// This part is for myHand
    count1 = getAllIndices(resultMyHand, '1');
    count2 = getAllIndices(resultMyHand, '2');
    count3 = getAllIndices(resultMyHand, '3');
    count4 = getAllIndices(resultMyHand, '4');
    count5 = getAllIndices(resultMyHand, '5');
    count6 = getAllIndices(resultMyHand, '6');
    count7 = getAllIndices(resultMyHand, '7');
    count8 = getAllIndices(resultMyHand, '8');
    count9 = getAllIndices(resultMyHand, '9');
    count10 = getAllIndices(resultMyHand, '10');
    count11 = getAllIndices(resultMyHand, '11');
    count12 = getAllIndices(resultMyHand, '12');
    count13 = getAllIndices(resultMyHand, '13');

    // "use strict";

    if (count1.length == 4) {
        for (let i = 0; i < 4; i++) {
            
            let removeCard1 = document.querySelector(`.${myHand[count1[i]]}`)
            removeCard1.remove();
            myHand.splice(count1[i], 1, 'nocard99')
        };
    }
    if (count6.length == 4) {
        for (let i = 0; i < 4; i++) {
            
            let removeCard6 = document.querySelector(`.${myHand[count6[i]]}`)
            removeCard6.remove();
            myHand.splice(count6[i], 1, 'nocard99')
        }
    }
    if (count7.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard7 = document.querySelector(`.${myHand[count7[i]]}`)
            removeCard7.remove();
            myHand.splice(count7[i], 1, 'nocard99')
        }
    }
    if (count8.length == 4) {
        for (let i = 0; i < 4; i++) {

           
            let removeCard8 = document.querySelector(`.${myHand[count8[i]]}`)
            removeCard8.remove();
             myHand.splice(count8[i], 1, 'nocard99')
        }
    }
    if (count9.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard9 = document.querySelector(`.${myHand[count9[i]]}`)
            removeCard9.remove();
            myHand.splice(count9[i], 1, 'nocard99')
        }
    }
    if (count10.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard10 = document.querySelector(`.${myHand[count10[i]]}`)
            removeCard10.remove();
            myHand.splice(count10[i], 1, 'nocard99')
        }

    }
    if (count11.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard11 = document.querySelector(`.${myHand[count11[i]]}`)
            removeCard11.remove()
            myHand.splice(count11[i], 1, 'nocard99')
        }

    }
    if (count12.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard12 = document.querySelector(`.${myHand[count12[i]]}`)
            removeCard12.remove()
            myHand.splice(count12[i], 1, 'nocard99')
        }

    }
    if (count13.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard13 = document.querySelector(`.${myHand[count13[i]]}`)
            removeCard13.remove()
            myHand.splice(count13[i], 1, 'nocard99')
        }

    }
    if (count5.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard5 = document.querySelector(`.${myHand[count5[i]]}`)
            removeCard5.remove();
            myHand.splice(count5[i], 1, 'nocard99')
        }
    }
    if (count4.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard4 = document.querySelector(`.${myHand[count4[i]]}`)
            removeCard4.remove();
            myHand.splice(count4[i], 1, 'nocard99')
        }
    }
    if (count3.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard3 = document.querySelector(`.${myHand[count3[i]]}`)
            removeCard3.remove();
            myHand.splice(count3[i], 1, 'nocard99')
        };
    }
    if (count2.length == 4) {
        for (let i = 0; i < 4; i++) {

            
            let removeCard2 = document.querySelector(`.${myHand[count2[i]]}`)
            removeCard2.remove();
            myHand.splice(count2[i], 1, 'nocard99')
        };
    }


// This part is for the otherHand
count1 = getAllIndices(resultOtherHand, '1');
count2 = getAllIndices(resultOtherHand, '2');
count3 = getAllIndices(resultOtherHand, '3');
count4 = getAllIndices(resultOtherHand, '4');
count5 = getAllIndices(resultOtherHand, '5');
count6 = getAllIndices(resultOtherHand, '6');
count7 = getAllIndices(resultOtherHand, '7');
count8 = getAllIndices(resultOtherHand, '8');
count9 = getAllIndices(resultOtherHand, '9');
count10 = getAllIndices(resultOtherHand, '10');
count11 = getAllIndices(resultOtherHand, '11');
count12 = getAllIndices(resultOtherHand, '12');
count13 = getAllIndices(resultOtherHand, '13');

// "use strict";

if (count1.length == 4) {
    for (let i = 0; i < 4; i++) {
        otherHand.splice(count1[i], 1, 'nocard99')
    };
}
if (count6.length == 4) {
    for (let i = 0; i < 4; i++) {
        otherHand.splice(count6[i], 1, 'nocard99')
    }
}
if (count7.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count7[i], 1, 'nocard99')
    }
}
if (count8.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count8[i], 1, 'nocard99')
    }
}
if (count9.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count9[i], 1, 'nocard99')
    }
}
if (count10.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count10[i], 1, 'nocard99')
    }

}
if (count11.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count11[i], 1, 'nocard99')
    }

}
if (count12.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count12[i], 1, 'nocard99')
    }

}
if (count13.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count13[i], 1, 'nocard99')
    }

}
if (count5.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count5[i], 1, 'nocard99')
    }
}
if (count4.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count4[i], 1, 'nocard99')
    }
}
if (count3.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count3[i], 1, 'nocard99')
    };
}
if (count2.length == 4) {
    for (let i = 0; i < 4; i++) {

        otherHand.splice(count2[i], 1, 'nocard99')
    };
}

    let matchScore = 0;
    for (let i = 0; i < myHand.length; i++) {
        if (myHand[i] == 'nocard99') {
            matchScore = matchScore + 1;
        };
    }

    if (matchScore == 52) {
        player2.play();
        alert('YOU HAVE WON!');
    }


    let othermatchScore = 0;
    for (let i = 0; i < otherHand.length; i++) {
        if (otherHand[i] == 'nocard99') {
            othermatchScore = othermatchScore + 1;
        };

    }

    if (othermatchScore == 52) {
        alert('YOU HAVE LOST!');
    }
    
    totalScore = matchScore / 4;
    let scoreText = "Your score is " + totalScore;
    finalScore.innerHTML = scoreText;
    console.log(totalScore);

    totalScore2 = othermatchScore / 4;
    let scoreText2 = "Opponent's score is " + totalScore2;
    finalScore2.innerHTML = scoreText2;
    console.log(totalScore2);
}



let player2 = new Audio('victory.mp3');
player2.crossorigin = 'anonymous';
let totalScore;
let scoreBoard = document.getElementById('theButtonDiv');
let newScoreBoard = document.createElement('p');
let finalScore = scoreBoard.appendChild(newScoreBoard);

let totalScore2;
let scoreBoard2 = document.getElementById('theButtonDiv');
// let newScoreBoard2 = document.createElement('br');
let newScoreBoard2 = document.createElement('p');
let finalScore2 = scoreBoard2.appendChild(newScoreBoard2);




function computerTurn() {
    player.play();
    let computersChoice = (Math.floor(Math.random() * otherHand.length));
    var myCardClass = otherHand[computersChoice];
    var myNumberAlone2 = myCardClass.match(/\d/g);
    var myNumberAlone3 = myNumberAlone2.join('');
    console.log(myNumberAlone3);
    console.log(myNumberAlone2);
    console.log(typeof (myNumberAlone3));

    let resultOtherHand = [];
    for (let i = 0; i < myHand.length; i++) {
        var otherNumberAlone2 = myHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        resultOtherHand.push(otherNumberAlone3);
    }
    console.log(resultOtherHand);
    let matchArray = getAllIndices(resultOtherHand, myNumberAlone3)
    console.log(matchArray)

    if (matchArray[0] == undefined) {
        opponentPickUpCard();
        alert('Opponent has picked up a card!');
    }

    if (matchArray[0] != undefined) {
        otherHand.push(myHand[matchArray[0]]);
        var swap = myHand[0];
        myHand[0] = myHand[matchArray[0]];
        myHand[matchArray[0]] = swap;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        // myFirstCards.classList.add('back');
        myFirstCards.addEventListener('click', compareChoices)
        alert('Opponent has taken one of your cards!');
    }

    if (matchArray[1] != undefined) {
        console.log('I am running!');
        otherHand.push(myHand[matchArray[1] - 1]);
        var swap1 = myHand[0];
        myHand[0] = myHand[matchArray[1] - 1];
        myHand[matchArray[1] - 1] = swap1;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)
        alert('Opponent has taken two of your cards!');

    }

    if (matchArray[2] != undefined) {
        otherHand.push(myHand[matchArray[2] - 2]);
        var swap2 = myHand[0];
        myHand[0] = myHand[matchArray[2] - 2];
        myHand[matchArray[2] - 2] = swap2;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)
        alert('Opponent has taken three of your cards!');

    }

    console.log(myHand);
    console.log(otherHand);

};

// App's State Variables:
// beginning of deck cards, random shuffling and distribution of deck cards to user and computer, hide the opponent's cards but display the users cards

// Initiate function that creates an array of all the deckcards 
// randomly assign 5 cards for the array myHand (i.e. randomly dealing 5 cards for player 1) by 
// randomly assign 5 cards for the array otherHand (i.e. randomly dealing 5 cards for player 2);
// display the array myHand in the Div and hide/dont display 



// function initiate(){alert ('The game has started!');
// };

// let aceofSpades = document.getElementById('').addClass('');

// 
// Cached element references:
// remaining deck cards, cards comparison
// 
// Event listeners: 
// input from user for card choice, 
// 
// Functions: 
// random shuffle and distribution of 6 cards to the user's cards and 6 cards to the opponents cards from the deck upon clicking the start button
// prompt user to begin by inputing their choice of a card
// compare card choice with opponents cards and with deck of cards
// if card choice is found in opponents cards, then move the chosen card from opponents cards to your cards
// if card choice is found in deck of cards (or if card choice is not found in opponents cards), then a random card from the deck variable (array) will be transferred to users cards
// after every turn, check if user and/or computer has any combination of 4 numbers (card numbers) in their cards, if yes then remove those 4 cards and add 1 point to the user's side, else continue the game
// once the entire deck is complete and both the user and their opponent have zero cards then the side with the most points win
// return a declaration of the winner based on score
// restart game
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
