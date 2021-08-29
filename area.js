const inputs = document.querySelectorAll('.area-input');

const AreaBtn = document.querySelector('#area-btn');

const Output = document.querySelector('#output');


function multiplyBaseAndHeight(base,height)
    {
        const multipliedOutput = base * height;
        return multipliedOutput;
    }

    function calculateArea()
    {
        // area = (base * height)

        const baseheight = multiplyBaseAndHeight(inputs[0].value,
            inputs[1].value);

        const area = baseheight / 2;
        console.log({area});

        Output.innerText = 'The area of the triangle is ${aera} cm²';

    }

    areaBtn.addEventListener('click',calculateArea);