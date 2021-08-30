const sides = document.querySelectorAll('.side-input');

const hypotenuseBtn = document.querySelector('#hypotenuse-btn');

const outputEl = document.querySelector('#show-output');


function calculateSumofSquares(a,b)
{
    const sumOfSquares = a*a + b*b;
    // console.log(sumofSquares);
    return sumOfSquares;

}




function calculateHypotenuse()
{
    // console.log("hypotenuse");
    const sumOfSquares =  calculateSumofSquares(Number(sides
        [0].value),Number(sides[1].value));

    const lenghtOfHypotenuse = Math.sqrt(sumOfSquares)
    // console.log(sumOfSquares);

    outputEl.innerText = "The lenght of hypotenuse is " +
   lenghtOfHypotenuse

}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);