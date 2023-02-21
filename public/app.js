// var quizData = [
//     {
//       question: "What is JavaScript?",
//       a: "client side",
//       b: "html",
//       c: "server lang",
//       d: "machine languge",
//       correct: "a",
//     },
//     {
//       question: "What is the full meaning of CSS?",
//       a: "Cascading Style Server",
//       b: "Cascade Styling Surface",
//       c: "Cascading Surface Sheet",
//       d: "Cascading Style Sheets",
//       correct: "d",
//     },
//     {
//       question: "What is the most popular programming language in 2022?",
//       a: "Java",
//       b: "PHP",
//       c: "html",
//       d: "JavaScript",
//       correct: "d",
//     },
//     {
//       question: "Which company developed JavaScript??",
//       a: "Netscape .",
//       b: "goolge",
//       c: "mete company",
//       d: "spice X",
//       correct: "a",
//     },
//     {
//       question: "What does HTML stand for?",
//       a: "Hypertext Markup Language",
//       b: "Cascading Stylesheet",
//       c: "JavaScript Object Notation",
//       d: "Hyper Markup Language",
//       correct: "a",
//     },
//     {
//       question: "What year was JavaScript launched?",
//       a: "1998",
//       b: "1993",
//       c: "1995",
//       d: "2000",
//       correct: "c",
//     },
//     {
//       question: "All these are Server Side Language except?",
//       a: "HTML",
//       b: "PHP",
//       c: "Node.js",
//       d: "Ruby on rails",
//       correct: "a",
//     },
//     {
//       question: "All these are JavaScript Framework except?",
//       a: "Laravel",
//       b: "React.js",
//       c: "Node.js",
//       d: "Vue.js",
//       correct: "a",
//     }
//   ];

//   var currInd = 0;
//   var score = 0;
   
// var allRadioEle = document.getElementsByTagName("input")
//   var eleQues = document.getElementById("question");
//   var eleA = document.getElementById("a_text");
//   var eleB = document.getElementById("b_text");
//   var eleC = document.getElementById("c_text");
//   var eleD = document.getElementById("d_text");
//   var elescore = document.getElementById("score")
// var selectedAnswer =""
//   function displayData(){
//     var currData = quizData[currInd];

//     eleQues.innerHTML = currData.question;
//     eleA.innerHTML = currData.a
//     eleC.innerHTML = currData.c
//     eleB.innerHTML = currData.b
//     eleD.innerHTML =  currData.d
//   }
  
//   function getSelectedradio(){
//     for (let i = 0; i < allRadioEle.length; i++) {
//      if(allRadioEle[i].checked)
//      selectedAnswer = allRadioEle[i].id
      
//     }
//   }
//   return selectedAnswer;
//   function next(){
//     var answer = getSelectedradio();
//     if (answer ==quizData[currInd].correct) {
//       score++
//       elescore.innerHTML =score;
      
//     }
// currInd++;
// if (currInd < quizData.length) {
//   displayData()
  
// } else {
//   var div = document.getElementById("mainDiv")
//   div.innerHTML  `<h2>You answered ${score} out of ${quizData.length} correctly
//   .</h2>
//   <button onclick="location.reload()">Retake Quiz!</button>`;
// }
//   }

// var quizData = [
//   {
//     question: "What is JavaScript?",
//     a: "client side",
//     b: "html",
//     c: "server lang",
//     d: "machine languge",
//     correct: "a",
//   },
//   {
//     question: "What is the full meaning of CSS?",
//     a: "Cascading Style Server",
//     b: "Cascade Styling Surface",
//     c: "Cascading Surface Sheet",
//     d: "Cascading Style Sheets",
//     correct: "d",
//   },
//   {
//     question: "What is the most popular programming language in 2022?",
//     a: "Java",
//     b: "PHP",
//     c: "html",
//     d: "JavaScript",
//     correct: "d",
//   },
//   {
//     question: "Which company developed JavaScript??",
//     a: "Netscape .",
//     b: "goolge",
//     c: "mete company",
//     d: "spice X",
//     correct: "a",
//   },
//   {
//     question: "What does HTML stand for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Stylesheet",
//     c: "JavaScript Object Notation",
//     d: "Hyper Markup Language",
//     correct: "a",
//   },
//   {
//     question: "What year was JavaScript launched?",
//     a: "1998",
//     b: "1993",
//     c: "1995",
//     d: "2000",
//     correct: "c",
//   },
//   {
//     question: "All these are Server Side Language except?",
//     a: "HTML",
//     b: "PHP",
//     c: "Node.js",
//     d: "Ruby on rails",
//     correct: "a",
//   },
//   {
//     question: "All these are JavaScript Framework except?",
//     a: "Laravel",
//     b: "React.js",
//     c: "Node.js",
//     d: "Vue.js",
//     correct: "a",
//   }
// ];

// var currInd = 0;
// var score = 0;
 
// var allRadioEle = document.getElementsByTagName("input")
// var eleQues = document.getElementById("question");
// var eleA = document.getElementById("a_text");
// var eleB = document.getElementById("b_text");
// var eleC = document.getElementById("c_text");
// var eleD = document.getElementById("d_text");
// var elescore = document.getElementById("score")
// var selectedAnswer =""
// function displayData(){
//   var currData = quizData[currInd];

//   eleQues.innerHTML = currData.question;
//   eleA.innerHTML = currData.a
//   eleC.innerHTML = currData.c
//   eleB.innerHTML = currData.b
//   eleD.innerHTML =  currData.d
// }

// function getSelectedradio(){
//   for (let i = 0; i < allRadioEle.length; i++) {
//    if(allRadioEle[i].checked)
//    selectedAnswer = allRadioEle[i].id
    
//   }
// }
// return selectedAnswer;
// function next(){
//   var answer = getSelectedradio();
//   if (answer ==quizData[currInd].correct) {
//     score++
//     elescore.innerHTML =score;
    
//   }
// currInd++;
// if (currInd < quizData.length) {
// displayData()

// } else {
// var div = document.getElementById("mainDiv")
// div.innerHTML  `<h2>You answered ${score} out of ${quizData.length} correctly
// .</h2>
// <button onclick="location.reload()">Retake Quiz!</button>`;
// }
// }

const firebaseConfig = {
  apiKey: "AIzaSyAFuAC25XPp3vpsy8jvJn9sv6mGAlQ_EOA",
  authDomain: "quiz-app-482a5.firebaseapp.com",
  projectId: "quiz-app-482a5",
  storageBucket: "quiz-app-482a5.appspot.com",
  messagingSenderId: "689922089419",
  appId: "1:689922089419:web:b930a177e5274c97c8d64e",
  measurementId: "G-TCHHDBM4Q3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// const quizData = [
//   {
//     question: "What is JavaScript?",
//           a: "client side",
//           b: "html",
//           c: "server lang",
//           d: "machine languge",
//           correct: "a",
//         },
//         {
//           question: "What is the full meaning of CSS?",
//           a: "Cascading Style Server",
//           b: "Cascade Styling Surface",
//           c: "Cascading Surface Sheet",
//           d: "Cascading Style Sheets",
//           correct: "d",
//         },
//         {
//           question: "What is the most popular programming language in 2022?",
//           a: "Java",
//           b: "PHP",
//           c: "html",
//           d: "JavaScript",
//           correct: "d",
//         },
//         {
//           question: "Which company developed JavaScript??",
//           a: "Netscape .",
//           b: "goolge",
//           c: "mete company",
//           d: "spice X",
//           correct: "a",
//         },
//         {
//           question: "What does HTML stand for?",
//           a: "Hypertext Markup Language",
//           b: "Cascading Stylesheet",
//           c: "JavaScript Object Notation",
//           d: "Hyper Markup Language",
//           correct: "a",
//         },
//         {
//           question: "What year was JavaScript launched?",
//           a: "1998",
//           b: "1993",
//           c: "1995",
//           d: "2000",
//           correct: "c",
//         },
//         {
//           question: "All these are Server Side Language except?",
//           a: "HTML",
//           b: "PHP",
//           c: "Node.js",
//           d: "Ruby on rails",
//           correct: "a",
//         },
//         {
//           question: "All these are JavaScript Framework except?",
//           a: "Laravel",
//           b: "React.js",
//           c: "Node.js",
//           d: "Vue.js",
//           correct: "a",
//   },
// ];
// const quiz= document.getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')
// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')
// let currentQuiz = 0
// let score = 0
// loadQuiz()
// function loadQuiz() {
//   deselectAnswers()
//   const currentQuizData = quizData[currentQuiz]
//   questionEl.innerText = currentQuizData.question
//   a_text.innerText = currentQuizData.a
//   b_text.innerText = currentQuizData.b
//   c_text.innerText = currentQuizData.c
//   d_text.innerText = currentQuizData.d
// }
// function deselectAnswers() {
//   answerEls.forEach(answerEl => answerEl.checked = false)
// }
// function getSelected() {
//   let answer
//   answerEls.forEach(answerEl => {
//       if(answerEl.checked) {
//           answer = answerEl.id
//       }
//   })
//   return answer
// }
// submitBtn.addEventListener('click', () => {
//   const answer = getSelected()
//   if(answer) {
//      if(answer === quizData[currentQuiz].correct) {
//          score++
//      }
//      currentQuiz++
//      if(currentQuiz < quizData.length) {
//          loadQuiz()
//      } else {
//          quiz.innerHTML = `
//          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//          <button onclick="location.reload()">Reload</button>
//          `
//      }
//   }
// })



function startQuiz() {
  var userName = document.getElementById("username").value;
   console.log(userName);
   
   window.location.href = './Quiz.html';
 
   localStorage.setItem('userName', userName);
 }
 
 var user = localStorage.getItem('userName')
 var quizData = [
   {
     question: "What is JavaScript?",
     a: "client side",
     b: "html",
     c: "server lang",
     d: "machine languge",
     correct: "a",
   },
   {
     question: "What is the full meaning of CSS?",
     a: "Cascading Style Server",
     b: "Cascade Styling Surface",
     c: "Cascading Surface Sheet",
     d: "Cascading Style Sheets",
     correct: "d",
   },
   {
     question: "What is the most popular programming language in 2022?",
     a: "Java",
     b: "PHP",
     c: "html",
     d: "JavaScript",
     correct: "d",
   },
   {
     question: "Which company developed JavaScript??",
     a: "Netscape .",
     b: "goolge",
     c: "mete company",
     d: "spice X",
     correct: "a",
   },
   {
     question: "What does HTML stand for?",
     a: "Hypertext Markup Language",
     b: "Cascading Stylesheet",
     c: "JavaScript Object Notation",
     d: "Hyper Markup Language",
     correct: "a",
   },
   {
     question: "What year was JavaScript launched?",
     a: "1998",
     b: "1993",
     c: "1995",
     d: "2000",
     correct: "c",
   },
   {
     question: "All these are Server Side Language except?",
     a: "HTML",
     b: "PHP",
     c: "Node.js",
     d: "Ruby on rails",
     correct: "a",
   },
   {
     question: "All these are JavaScript Framework except?",
     a: "Laravel",
     b: "React.js",
     c: "Node.js",
     d: "Vue.js",
     correct: "a",
   },
   {
     question: "What year was JavaScript launched?",
     a: "1998",
     b: "1993",
     c: "1995",
     d: "2000",
     correct: "c",
   },
   {
     question: "Which company developed JavaScript??",
     a: "Netscape .",
     b: "goolge",
     c: "mete company",
     d: "spice X",
     correct: "a",
   },
 ];
var currInd = 0;
var score = 0;
var selectedAnswer = 0;

var allRadiOBtn = document.getElementsByTagName("input")
var eleQues = document.getElementById("question")
var eleA = document.getElementById("a_text")
var eleB = document.getElementById("b_text")
var eleC = document.getElementById("c_text")
var eleD = document.getElementById("d_text")

function displayData() {
  var currData = quizData[currInd];

  eleQues.innerHTML = currData.question
  eleA.innerHTML = currData.a
  eleB.innerHTML = currData.b
  eleC.innerHTML = currData.c
  eleD.innerHTML = currData.d
}
function getSelectedRadio() {
  for (var i = 0; i < allRadiOBtn.length; i++) {
    if (allRadiOBtn[i].checked) {
      selectedAnswer = allRadiOBtn[i].id
    }
  }
  return selectedAnswer
}
function deselectRadio() {
  for (var i = 0; i < allRadiOBtn.length; i++) {
    if (allRadiOBtn[i].checked) {
      allRadiOBtn[i].checked = false
    }
  }
}



function next() {
  var answer = getSelectedRadio()
  if (answer == quizData[currInd].correct) {
    score++;


  }

  currInd++;
  deselectRadio()
  if (currInd < quizData.length) {
    displayData()
  }
  else {
    
   
  
    var percentage= Math.floor((score/quizData.length)*100) ;
    var status ;
    if(percentage>50){
      status="Pass"
    }
    else{
      status="Fail"
    }
    
    var div = document.getElementById("quiz");
    div.innerHTML = `
        <h1 class="text-danger"> Result :</h1>
        
        <h3> Percentage : ${percentage}% </h3> 
        <h3> Remarks : You got ${score} out of ${quizData.length}<h3>
        <h3> Status  : ${status} <h3>
        <button  class="btn-next btn btn-success" onclick=" window.location.href='./index.html'">Retake Quiz</button>
        `
    var dataBase = firebase.database().ref("Quiz Results")
    var key = dataBase.push().key


    var res = {
      user : user,
      scores: score,
      key: key,
      status :status,
      Percentage :percentage
    }
    dataBase.child(key).set(res)
  }

console
}