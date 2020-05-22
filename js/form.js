class Form{

constructor(){

}

display(){
    canvas = createCanvas(400,400);
   var title = createElement('h3')
    title.html("Enter Yor Name")
   var question1 = createElement('h3')
   question1.html("1.Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
   var question2 = createElement('h3')
   question2.html("2.Would you be willing to contribute a small amount every month for such a program?")
   var question3 = createElement('h3')
   question3.html("3. How much per month would you be willing to pay?")
   var q1button1 = createButton("YES")
   var q1button2 = createButton("NO")
   var q2button1 = createButton("YES")
   var q2button2 = createButton("NO")
   var q3button1 = createButton("500")
   var q3button2 = createButton("1000")
   var q3button3 = createButton("MORE")
   q1button1.position(40,140)
   q1button2.position(180,140)
   q2button1.position(40,240)
   q2button2.position(180,240)
   q3button1.position(40,340)
   q3button2.position(180,340)
   q3button3.position(280,340)
    question1.position(25,70)
    question2.position(25,170)
    question3.position(25,270)
    title.position(120,15)
    database = firebase.database();
    var input = createInput("Name")
    input.position(100,60)
    var button = createButton("SUBMIT")
    button.position(150,380)
    if(question1!==undefined){
    q1button1.mousePressed(()=>{
      a = "YES"
      q1a1 = q1a1 + 1;
      writeQuestion1(q1a1,q1a2)
      q1button1.style('color:red')
      q1button2.style('color:black')
    })
    q1button2.mousePressed(()=>{
      a = "NO"
      q1a2 = q1a2 + 1;
      writeQuestion1(q1a1, q1a2)
      q1button2.style('color:red')
      q1button1.style('color:black')
    })}
    if(question2!==undefined){
    q2button1.mousePressed(()=>{
      b = "YES"
      q2a1 = q2a1 + 1;
      writeQuestion2( q2a1,q2a2)
      q2button1.style('color:red')
      q2button2.style('color:black')
    })
    q2button2.mousePressed(()=>{
      b = "NO"
      q2a2 = q2a2 + 1;
      writeQuestion2(q2a1, q2a2)
      q2button2.style('color:red')
      q2button1.style('color:black')
    })}
    if(question3!==undefined){
    q3button1.mousePressed(()=>{
      c = "500"
      q3a1 = q3a1 + 1;
      writeQuestion3(  q3a1,q3a2,q3a3)
      q3button1.style('color:red')
      q3button2.style('color:black')
      q3button3.style('color:black')
    })
    q3button2.mousePressed(()=>{
      c = "1000"
      q3a2= q3a2 + 1;
      writeQuestion3(q3a1,  q3a2,q3a3)
      q3button2.style('color:red')
      q3button1.style('color:black')
      q3button3.style('color:black')
    })
    q3button3.mousePressed(()=>{
      c = "MORE"
      q3a3 = q3a3 + 1;
      writeQuestion3(q3a1,q3a2,  q3a3)
      q3button3.style('color:red')
      q3button2.style('color:black')
      q3button1.style('color:black')
    })}
    button.mousePressed(() =>{
      if(a!=undefined && b!=undefined && c!=undefined ){  
      title.hide()
      input.hide()
      button.hide()
      q1button1.hide()
      q1button2.hide()
      q2button1.hide()
      q2button2.hide()
      q3button1.hide()
      q3button2.hide()
      q3button3.hide()
      question1.hide()
      question2.hide()
      question3.hide()
      name = input.value()
      player.updateNameAndAnswers(name,a,b,c)
      x = x+1
      writeCount(x);
      textSize(20)
      fill("black")
      text("TOTAL VOTERS  : " + x,100,50)
      fill("black")
      text("Q1 - ",10,100)
      fill("green")
      text("YES: "+q1a1,60,100)
      fill("red")
      text("NO: "+q1a2,60,150)
      fill("black")
      text("Q2 - ",10,200)
      fill("green")
      text("YES: "+q2a1,60,200)
      fill("red")
      text("NO: "+q2a2,60,250)
      fill("black")
      text("Q3 - ",10,300)
      fill("blue")
      text("500: "+q3a1,60,300)
      fill("blue")
      text("1000: "+q3a2,60,350)
      fill("blue")
      text("MORE: "+q3a3,60,400)
      
      
      }
     else{
        textSize(18)
        fill("red")
        text("*Please Answer All Questions ",30,15)
      }


})
  }










}