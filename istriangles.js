const inputs = document.querySelectorAll(".angle-input");

const isTriangleBtn = document.querySelector("#is-triangle-btn");

const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3)

{

    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;

}
    
function isTriangle()
{
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),
    Number(inputs[1].value),Number(inputs[2].value)
    );

  

    // if( sumOfAngles < 0  )
    // {
    //     outputEl.innerText="Enter Valid Number";          
    // }

    if(sumOfAngles === 180)
    {
        // console.log("Yay, The angles form a triangle")
        outputEl.innerText = "Yay, The angles form a triangle";
        
    }

 

    else
    {
    //   console.log("oh oh! The angles don't form a triangle")

    //   outputEl.innerText = "oh oh! The angles don't form a triangle";
         outputEl.innerText="Enter valid Number";
    }

    
  



}





isTriangleBtn.addEventListener("click",isTriangle)
