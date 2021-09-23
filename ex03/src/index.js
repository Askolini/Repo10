myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}

function myFunction(myObj) {
    var vegetableValue = myObj["vegetable"];
    var fruitValue = myObj["fruit"];
    var drinkValue = myObj["drink"];
    return {vegetableValue, fruitValue, drinkValue};
}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);
