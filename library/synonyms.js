var request = require("request");

function SynonymAPI(apiKey) {
    this.apikey = apiKey;
}

SynonymAPI.prototype.getSynonyms = function(word, callback) {

    var address = "http://words.bighugelabs.com/api/2/"+this.apikey+"/"+word+"/json"
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        callback(resultObject.noun.syn);
    });
};

module.exports = SynonymAPI;