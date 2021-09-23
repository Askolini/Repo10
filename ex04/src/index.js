players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
}

function myFunction(myObj) {
    var playerNumber = 10;
    var player = myObj[playerNumber];
    return player;
}

console.log(myFunction(players));
module.exports = { players, myFunction };