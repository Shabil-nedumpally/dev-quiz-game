var qnumber = document.getElementById('qnumber')
var question = document.getElementById('question')
var answer1= document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var buttons = document.getElementById('buttons')
var score = document.getElementById('score')
var uscore = document.getElementById('uscore')
var point = 0;


uscore.style.display='none'
answer1.innerHTML='<button id="startb" onclick="start()">START QUIZ</button>'

function start(){
var player =prompt('what is your name')
    startb.style.display='none'
    
    question.innerHTML='How many computer languages are in use?'
    qnumber.innerHTML='Question No.1'
    score.innerHTML=player+ ' your score:'
    answer1.innerHTML='<button onclick="answer11()"  id="answer1">A) 2000</button>'
    answer2.innerHTML='<button onclick="answer22()" id="answer2">B) 5000</button>'
    answer3.innerHTML='<button onclick="answer33()" id="answer2">B) 500</button>'
    answer4.innerHTML='<button onclick="answer44()" id="answer2">B) 200</button>'
    
    
    
} answer11=()=>{
   
        answer1.style.backgroundColor='lime'
        question.style.color='#3cff3c'
        question.innerHTML='Correct Answer  2000 There are about 2000 computer languages in active use whereas there were only 15 in use in 1970'
        point++;
        uscore.innerHTML=point
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="secondquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer4.style.display='none'
        uscore.style.display='block'
        answer2.style.background='none'
    
    

}
answer22=()=>{
    
    
        answer2.style.backgroundColor='red'
        point--;
        question.innerHTML='Wrong Answer! '
        uscore.innerHTML=point;
        
    
    

}
answer33=()=>{
   
        answer3.style.backgroundColor='red'
        point--;
        question.innerHTML='Wrong Answer'
        uscore.innerHTML=point
    
    

}
answer44=()=>{
    
        answer4.style.backgroundColor='red'
        point--;
        question.innerHTML='Wrong Answer'
        uscore.innerHTML=point
    
    

}
function secondquestion(){
        question.style.color='red'
        question.innerHTML='Which of these is not an early computer?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.2'
       
        answer1.innerHTML='<button onclick="answersecond1()"  id="answer1">A) ENIAC</button>'
        answer2.innerHTML='<button onclick="answersecond2()" id="answer2">B) UNIVAC</button>'
        answer3.innerHTML='<button onclick="answersecond3()" id="answer3">C) NASA</button>'
        answer4.innerHTML='<button onclick="answersecond4()" id="answer4">D) SAGE</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}



function answersecond1(){
        
        answer1.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER !'
        point--;
        uscore.innerHTML=point
}
function answersecond2(){
        answer2.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER ! .'
        point--;
        uscore.innerHTML=point
}
function answersecond3(){
        question.style.color='#3cff3c'
        answer3.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER NASA stands for the National Aeronautics and Space Administration. It is an agency of the U.S. government.'
        point++;
        uscore.innerHTML=point
        next()
}
function answersecond4(){
        answer4.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER !'
        point--;
        uscore.innerHTML=point
}
function next(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="thirdquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'
}
function thirdquestion(){
        question.style.color='red'
        question.innerHTML='What does HTML stands for?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.3'
       
        answer1.innerHTML='<button onclick="answerthird1()"  id="answer1">A)Hypertext Machine language</button>'
        answer2.innerHTML='<button onclick="answerthird2()" id="answer2">B) Hypertext and links markup language</button>'
        answer3.innerHTML='<button onclick="answerthird3()" id="answer3">C) Hypertext Markup Language</button>'
        answer4.innerHTML='<button onclick="answerthird4()" id="answer4">D) Hightext machine language.</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answerthird1(){
        
        answer1.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER '
        point--;
        uscore.innerHTML=point
}
function answerthird2(){
        answer2.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER '
        point--;
        uscore.innerHTML=point
}
function answerthird3(){
        question.style.color='#3cff3c'
        answer3.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER !  Hypertext Markup Language '
        point++;
        uscore.innerHTML=point
        next4()
}
function answerthird4(){
        answer4.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER !'
        point--;
        uscore.innerHTML=point
}
function next4(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="fourthquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'
}
function fourthquestion(){
        question.style.color='red'
        question.innerHTML='How is document type initialized in HTML5.?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.4'
       
        answer1.innerHTML='<button onclick="answerthird1()"  id="answer1">A)&lt;/DOCTYPE HTML&gt;</button>'
        answer2.innerHTML='<button onclick="answerthird2()" id="answer2">B)&lt;/DOCTYPE&gt</button>'
        answer3.innerHTML='<button onclick="answerfourth3()" id="answer3">C)&lt;!DOCTYPE HTML&gt</button>'
        answer4.innerHTML='<button onclick="answerthird4()" id="answer4">D)&lt;/DOCTYPE html&gt</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answerfourth3(){
        

        answer3.style.backgroundColor='lime'
        question.style.color='#3cff3c'
        question.innerHTML=' CORRECT ANSWER &lt;!DOCTYPE HTML&gt.'
       
        point++;
        uscore.innerHTML=point
        next5()
}
function next5(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="fivethquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'
}
function fivethquestion(){
        question.style.color='red'
        question.innerHTML='Which of the following HTML element is used for creating an unordered list?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.5'
       
        answer1.innerHTML='<button onclick="answerfivth1()"  id="answer1">A)&lt;ui &gt;</button>'
        answer2.innerHTML='<button onclick="answerfivth2()" id="answer2">B)&lt;i&gt</button>'
        answer3.innerHTML='<button onclick="answerfivth3()" id="answer3">C)&lt;em&gt</button>'
        answer4.innerHTML='<button onclick="answerfivth4()" id="answer4">D)&lt;ul&gt</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'
        
}
function answerfivth1(){
        
        answer1.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER '
        point--;
        uscore.innerHTML=point
}
function answerfivth2(){
        answer2.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER '
        point--;
        uscore.innerHTML=point
}
function answerfivth3(){
        answer3.style.backgroundColor='red'
        question.innerHTML='WRONG ANSWER !'
        point--;
        uscore.innerHTML=point

       
}
function answerfivth4(){
        question.style.color='#3cff3c'
        answer4.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! &lt;ul&gt   '
        point++;
        uscore.innerHTML=point
        next6()
}
function next6(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="sixthquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'
}
function sixthquestion(){
        question.style.color='red'
        question.innerHTML='What is the font-size of the h1 heading tag?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.6'
       
        answer1.innerHTML='<button onclick="answerthird1()"  id="answer1">A)3.5em;</button>'
        answer2.innerHTML='<button onclick="answerthird2()" id="answer2">B)2.17em</button>'
        answer3.innerHTML='<button onclick="answersixth3()" id="answer3">C)2em</button>'
        answer4.innerHTML='<button onclick="answerthird4()" id="answer4">D)1em</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'
        
}
function answersixth3(){
        question.style.color='#3cff3c'
        answer3.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! 2em '
        point++;
        uscore.innerHTML=point
        next7()

}
function next7(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="seventhquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'

}
function seventhquestion(){
        question.style.color='red'
        question.innerHTML='Which of the below is the abbreviation of CSS ?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.7'
       
        answer1.innerHTML='<button onclick="answerthird1()"  id="answer1">A)Cascade sheets style;</button>'
        answer2.innerHTML='<button onclick="answerthird2()" id="answer2">B)Color and style sheets</button>'
        answer3.innerHTML='<button onclick="answerseventh3()" id="answer3">C)Cascading style sheets</button>'
        answer4.innerHTML='<button onclick="answerthird4()" id="answer4">D)Coded Style Sheet</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answerseventh3(){
        question.style.color='#3cff3c'
        answer3.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! Cascading style sheet '
        point++;
        uscore.innerHTML=point
        next8()

}
function next8(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="eighthquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'

}
function eighthquestion(){
        question.style.color='red'
        question.innerHTML='Which of the below is correct syntax when we put a line over text in CSS ?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.8'
       
        answer1.innerHTML='<button onclick="answerthird1()"  id="answer1">A)text-decoration: line;</button>'
        answer2.innerHTML='<button onclick="answerthird2()" id="answer2">B)text-decoration: none</button>'
        answer3.innerHTML='<button onclick="answereighth3()" id="answer3">C)text-decoration: overline</button>'
        answer4.innerHTML='<button onclick="answerthird4()" id="answer4">D)text-decoration: underline</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answereighth3(){
        question.style.color='#3cff3c'
        answer3.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! text-decoration: overline'
        point++;
        uscore.innerHTML=point
        next9()
}
function next9(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="ninethquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'

}
function ninethquestion(){
        question.style.color='red'
        question.innerHTML='How do we set the default width of the font in CSS ?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.9'
       
        answer1.innerHTML='<button onclick="answernineth1()"  id="answer1">A)font-stretch;</button>'
        answer2.innerHTML='<button onclick="answer22()" id="answer2">B)font-weight none</button>'
        answer3.innerHTML='<button onclick="answer33()" id="answer3">C)text-transform overline</button>'
        answer4.innerHTML='<button onclick="answer44()" id="answer4">D)font-variant</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answernineth1(){
        question.style.color='#3cff3c'
        answer1.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! The font-stretch property in CSS which is used to set the text or wide or narrower. It is not working in any fonts. It only works when the font family has a width-variant face.'
        point++;
        uscore.innerHTML=point
        next10()

}
function next10(){
        answer1.style.display='none'
        answer2.innerHTML='<button onclick="tenthquestion()" id="next1">Next Question</button>'
        answer3.style.display='none'
        answer2.style.background='none'
        answer4.style.display='none'
        uscore.style.display='block'

}
function tenthquestion(){
        question.style.color='red'
        question.innerHTML='Which of the below CSS property is used to add a stroke in the text ?'
        next1.style.display='none'
        qnumber.innerHTML='Question No.10'
       
        answer1.innerHTML='<button onclick="answertenth1()"  id="answer1">A)text-stroke</button>'
        answer2.innerHTML='<button onclick="answer22()" id="answer2">B)	text-transform</button>'
        answer3.innerHTML='<button onclick="answer33()" id="answer3">C)text-decoration</button>'
        answer4.innerHTML='<button onclick="answer44()" id="answer4">D)None of the above</button>'
        answer1.style.display='block'
        answer2.style.display='block'
        answer3.style.display='block'
        answer4.style.display='block'
        answer1.style.background='none'
        answer2.style.background='none'
        answer3.style.background='none'
        answer4.style.background='none'

}
function answertenth1(){
        question.style.color='#3cff3c'
        answer1.style.backgroundColor='lime'
        question.innerHTML=' CORRECT ANSWER ! The text-stroke is a CSS property that is used to add a stroke in the text basically it is used to add stroke to the text. It is also supported by using WebKit.'
        point++;
        uscore.innerHTML=point
        if(point==10){
                qnumber.innerHTML='Congratulation 100% mark You won'
                answer1.style.display='none'
                answer2.style.display='none'
                answer3.style.display='none'
                answer4.style.display='none'
                question.innerHTML='<img width="200px"; height="200px" src="https://i.pinimg.com/originals/10/3e/3d/103e3de8d19a7e7f0c31b24778470df7.png">'
        }else if(point==9){
                qnumber.innerHTML='Congratulation 90% Mark you won'
                answer1.style.display='none'
                answer2.style.display='none'
                answer3.style.display='none'
                answer4.style.display='none'
                question.innerHTML='<img width="200px"; height="200px" src="https://i.pinimg.com/originals/dc/1a/21/dc1a213d5a749f2b045220f75c214854.png">'
        }else if(point==8){
                qnumber.innerHTML='Congratulation 80% Mark you won'
                answer1.style.display='none'
                answer2.style.display='none'
                answer3.style.display='none'
                answer4.style.display='none'
                question.innerHTML='<img width="200px"; height="200px" src="https://purepng.com/public/uploads/large/purepng.com-bronze-medalmedalgold-medalbronze-medalsilvermedalawardribbon-1421526582563j3dkp.png">'
        }else {
                qnumber.innerHTML='Please try again Minimum 80% score you won'
                answer1.style.display='none'
                answer2.style.display='none'
                answer3.style.display='none'
                answer4.style.display='none'
                question.innerHTML='<img width="200px"; height="200px" src="https://c.tenor.com/NII7Z9YQLsMAAAAC/go-for-it-you-can-do-it.gif">'
        }

}
