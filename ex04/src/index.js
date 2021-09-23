players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
}

function myFunction(myObj) {
    var playerNumber = myObj[10];
    var player = playerNumber;
    return player;
}

console.log(myFunction(players));
module.exports = { players, myFunction };