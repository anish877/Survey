var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var voterCountRef
var form, player, game;
var a = undefined
var b = undefined
var c = undefined
var count = 0
var x
var countValue
var question1Ref,question2Ref,question3Ref
var q1,q2,q3;
var q1a1,q1a2;
var q2a1,q2a2
var q3a1,q3a2,q3a3
var q1yes

function setup(){
  createCanvas(1000,400)

  database = firebase.database()
  player = new Player()
  form = new Form()

  form.display()
  voterCountRef = database.ref("players/voter")
  voterCountRef.on("value",readCount,writeCount)
  question1Ref = database.ref("players/question1")
  question1Ref.on("value",readQuestion1,writeQuestion1)
  question2Ref = database.ref("players/question2")
  question2Ref.on("value",readQuestion2,writeQuestion2)
  question3Ref = database.ref("players/question3")
  question3Ref.on("value",readQuestion3,writeQuestion3)
}


function draw(){
console.log(q1a1)
//console.log(q1yes.width)
}
function readCount(data){
count = data.val()
x = count.count

}
function writeCount(countValue){
  database.ref("players/voter").set(
  {
    'count' : countValue
  })

}
function readQuestion1(data){
question1 = data.val()
q1a1  = question1.answer1
q1a2 = question1.answer2

}
function writeQuestion1(q1a1,q1a2){
  database.ref("players/question1").set({
  'answer1' : q1a1,
  'answer2' : q1a2
  })}
  function readQuestion2(data){
    question2 = data.val()
    q2a1  = question2.answer1
    q2a2 = question2.answer2
    
    }
    function writeQuestion2(q2a1,q2a2){
      database.ref("players/question2").set({
      'answer1' : q2a1,
      'answer2' : q2a2
      })   
    }
    function readQuestion3(data){
      question3 = data.val()
      q3a1  = question3.answer1
      q3a2 = question3.answer2
      q3a3 = question3.answer3
      }
      function writeQuestion3(q3a1,q3a2,q3a3){
        database.ref("players/question3").set({
        'answer1' : q3a1,
        'answer2' : q3a2,
        'answer3' : q3a3
        })
      }
