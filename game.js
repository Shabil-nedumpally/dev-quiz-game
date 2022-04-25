var qnumber = document.getElementById('qnumber')
var question = document.getElementById('question')
var answer1= document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var buttons = document.getElementById('buttons')
var score = document.getElementById('score')



answer1.innerHTML='<button id="startb" onclick="start()">START QUIZ</button>'

function start(){
var player =prompt('what is your name')
    startb.style.display='none'
    
    question.innerHTML='How many computer languages are in use?'
    qnumber.innerHTML='Question No.1'
    score.innerHTML=player
    answer1.innerHTML='<button onclick="answer11()"  id="answer1">A) 2000</button>'
    answer2.innerHTML='<button onclick="answer22()" id="answer2">B) 5000</button>'
    answer3.innerHTML='<button onclick="answer33()" id="answer2">B) 500</button>'
    answer4.innerHTML='<button onclick="answer44()" id="answer2">B) 200</button>'
    
    
    
} answer11=()=>{
   
        answer1.style.backgroundColor='lime'
        question.innerHTML='Correct Answer  2000 There are about 2000 computer languages in active use whereas there were only 15 in use in 1970'
    
    

}
answer22=()=>{
    
    
        answer2.style.backgroundColor='red'
        question.innerHTML='Wrong Answer'
    
    

}
answer33=()=>{
   
        answer3.style.backgroundColor='red'
        question.innerHTML='Wrong Answer'
    
    

}
answer44=()=>{
    
        answer4.style.backgroundColor='red'
        question.innerHTML='Wrong Answer'
    
    

}



