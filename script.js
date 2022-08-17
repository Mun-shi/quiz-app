const quizData = [
    {
       question: 'how old is munshi?',
       a: '25',
       b: '26',
       c: '21',
       d: '22',
       correct: 'c'
    },
    {
        question: 'what is the most used programming language?',
        a: 'java',
        b: 'c',
        c: 'python',
        d: 'javascript',
        correct: 'd'
     },
     {
        question: 'who is the president of india?',
        a: 'javaharlal nehru',
        b: 'narendra modi',
        c: 'manmohan singh',
        d: 'vajpayee',
        correct: 'b'
     },
     {
        question: 'what does html stands for?',
        a: '25',
        b: '26',
        c: '21',
        d: '22',
        correct: 'c'
     },
     {
        question: 'what year was javascript launched ?',
        a: '2019',
        b: '2020',
        c: '2021',
        d: 'non of the above',
        correct: 'd'
     },
];
 const answerEls = document.querySelectorAll(".answer");
 const quiz = document.getElementById("quiz"); 
 const questionEl = document.getElementById('question');
 const a_text = document.getElementById('a_text');
 const b_text = document.getElementById('b_text');
 const c_text = document.getElementById('c_text');
 const d_text = document.getElementById('d_text');
 const submitBtn = document.getElementById('submit');

 let currentQuiz = 0;
 let answer = undefined;
 let score = 0;

 loadQuiz();

 function loadQuiz(){
       deselecteAnswers();

       const currentQuizData = quizData[currentQuiz];
       questionEl.innerHTML = currentQuizData.question;
       a_text.innerText = currentQuizData.a;
       b_text.innerText = currentQuizData.b;
       c_text.innerText = currentQuizData.c;
       d_text.innerText = currentQuizData.d;
 }
 
 function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
     
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
       
    });
    return answer;
 }

 function deselecteAnswers(){
    answerEls.forEach((answerEl) => {
        {
            answerEl.checked = false;
        }
       
    });
 }

submitBtn.addEventListener("click", () => {
   // check to see the answer is correct or not

    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
         if (currentQuiz < quizData.length) {
           loadQuiz();
        
        } else {
          quiz.innerHTML = `<h1>You got ${score} out of ${quizData.length} correct</h1>
          <button onclick="location.reload()">Reload</button>`; 
    }
    
    }

   
});