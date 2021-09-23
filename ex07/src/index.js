function myFunction(parameter) {
    lion = {
        name: "Simba",
        legs: 4,
        tail: 1,
        roar: "roar-roar"
    }
    delete lion[parameter];
    return lion;
}

myFunction("roar");
module.exports = myFunction;