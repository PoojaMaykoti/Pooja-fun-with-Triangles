const quizForm = document.querySelector('.quiz-form');

const submitAnswerBtn = document.querySelector('#submit-answer-btn');

const outputEl = document.querySelector('#output-show');

const correctAnswers = ["90°", "right angled","100°", "A triangle with three angles of 60 degrees is equilateral"];



// const correctAnswers = ["90°", "right angled" ,"100°" ,"A triangle with three angles of 60 degrees is equilateral"];
 
correctAnswers = []



function calculateScore()
{
     let score = 0;
     let index = 0;

     const formResults = new FormData(quizForm);

    //  console.log(formResults);

    for(let value of formResults.values())
    {
        if(value === correctAnswers[index])
        {
            score = score + 1;
        }

        index = index + 1;
    }

    // console.log(score);

    outputEl.innerText = " Your score is " + score;
}


submitAnswerBtn.addEventListener('click' ,calculateScore);




