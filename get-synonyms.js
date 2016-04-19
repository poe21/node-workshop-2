var synonyms = require('./library/synonyms');
var prompt = require("prompt");

var newUser = new synonyms("6b4191c20c0dd87617418e075a82c63c");

var question = [{
        name: "word",
        description: "What word would you like to find out about?"
    }];
    
 // get the location of the user with a prompt
    prompt.start();
    prompt.get(question, function(err, result) {
        console.log("You are searching for the word: " + result.word);
        console.log("Here are the synonyms for this word: ");
        
        newUser.getSynonyms(result.word, function(placeholder){
            console.log(placeholder);
        });
    });