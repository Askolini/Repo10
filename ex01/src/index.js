myPet = {
    species: "Tornjak",
    name: "Snoopie",
    legs: 4,
    friends: ['Astor', 'Pujdo']
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };