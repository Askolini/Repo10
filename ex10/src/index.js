function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Queen",
            title: "A Kind of Magic",
            release_year: 1986,
            formats: {
                1: "Vinyl",
                2: "Cassete tape",
                3: "DVD"
            },
            gold: true
        }
    }
    return myMusic;
}

myFunction()[2];
module.exports = myFunction;