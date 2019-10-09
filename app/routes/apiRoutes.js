var friends = require("../data/friends");

module.exports = function(app){
// API GET Requests
// Below code handles when users "visit" a page.

//Will show the array of friends inputted
    app.get("/api/friends", function(req,res){
        res.json(friends)

    })


    app.post("/api/friends", function(req,res){
        var newFriend = req.body;

        console.log(newCharacter);
      
        characters.push(newCharacter);
      
        res.json(newCharacter);

// will send to the front end
//compare to your other firends
//2 for loops
//1 loop will through each of the users
//2 loop scores array
//subtract and get the diffence the user that has the least difference will be the match
    })
    
}