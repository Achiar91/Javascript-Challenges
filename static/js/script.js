//Challenge 1 :your age in days!!
function ageInDays (){
 var birthYear = prompt('What year were you born?');
var ageInDayss = (2021-birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ ageInDayss + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

};
function reset () {
    document.getElementById ('ageInDays').remove();
}

//Challenge 2 : Cat generator 

function generateCat (){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small" ;
    div.appendChild(image);
}

//Challenge 3 : Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt()) ;
    
  console.log('Computer choice: ', botChoice)
  result = decideWinner (humanChoice,botChoice);
   message = finalMessage (result);  //{'message:'you won', 'color:'green'}
   console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);
    console.log(result);
}

function randomToRpsInt(){
     return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
        'rock': {'scissors':1,'rock': 0.5, 'paper':0},
        'paper': {'scissors':0,'rock': 1, 'paper':0.5},
        'scissors': {'scissors':0.5,'rock': 0, 'paper':1}
        }
    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}

function finalMessage ([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color':'red'};
    }
        else if(yourScore === 0.5) {
            return {'message': 'You tied!', 'color':'yellow'};
        } else   {
            return {'message': 'You Won!', 'color':'green'};
        }
    }

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src       
    }
    //removes all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'height=150px width=150px style= 'box-shadow: 0px 0px 15px 5px #2A11FF'; '>";
    messageDiv.innerHTML ="<h1 style=' color:" + finalMessage['color'] + " ; font-size: 60px; padding:30px; '>" +finalMessage ['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'height=150px width=150px style= 'box-shadow: 0px 0px 15px 5px #FF0000'; '>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
  

}


// Challenge 4 : Change the color of all buttons


var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)