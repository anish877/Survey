class Player{

constructor(){

}

updateNameAndAnswers(n,a,b,c){
var playerRef = database.ref("players")
playerRef.push({
name:n,
answer1:a,
answer2:b,
answer3:c
})

}

}

