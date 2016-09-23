var mainPlayer = {
    name: "player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messanger: function (message0){
        alert("So I have " + message0 + ".");
    }
}

mainPlayer.name = prompt("What is your name adventurer?");

alert("welcome " + mainPlayer.name + ".");
var phrases = [
    prompt("Please enter your mother's maiden name."),
    prompt("Enter your phone number."),
    prompt("enter your credit card information."),
    prompt("Who is your first born child.")
    ];

for (var i = 0; i< phrases.length; i++){
    mainPlayer.messanger(phrases[i]);
}

