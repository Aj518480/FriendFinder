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
       
        console.log("are you here?")
        
console.log(newFriend)
        var newFriendMatchObject ={name:"",photo:"",nearestNum:51}
        var totalDifference;
        
// will send to the front end
//compare to your other firends
for (let i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    var totalDifference=0;
    console.log(friends[i]);
   for (let j = 0; j < currentFriend.scores.length; j++) {
       
    var currentFriendScore = currentFriend.scores[j]
    var newFriendScore = newFriend.scores[j];

    totalDifference +=  (Math.abs(parseInt(currentFriendScore[i]) - parseInt(newFriendScore[j])));
    

       
   } 
        
    if(totalDifference <= newFriendMatchObject.nearestNum){
        newFriendMatchObject.name = currentFriend.name;
        newFriendMatchObject.photo = currentFriend.photo;
        newFriendMatchObject.nearestNum = totalDifference;
    }
}

//2 for loops
//1 loop will through each of the users
//2 loop scores array
//subtract and get the diffence the user that has the least difference will be the match
friends.push(newFriend);
res.json(newFriendMatchObject);
    })
    
}