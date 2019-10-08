var friends = require("../data/friends");

module.exports = function(app){



    app.get("/api/friends", function(req,res){
        res.json(friends)
// like star wars it will show the strings of characters
    })


    app.post("/api/friends", function(req,res){
// will send to the front end
//compare to your other firends
//2 for loops
//1 loop will through each of the users
//2 loop scores array
//subtract and get the diffence the user that has the least difference will be the match
    })
    
}