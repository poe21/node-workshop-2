var fortuneList = [ 
    "Things may seem much worse than they are.", 
    "Do your job to the best of your ability.", 
    "Everyone agrees you are the best.", 
    "Things may seem much worse than they are."
];

function getFortune() {
    var randomFortune = fortuneList[Math.floor(Math.random()*fortuneList.length)];
    return randomFortune;
}

module.exports = {
    fortune: getFortune
};