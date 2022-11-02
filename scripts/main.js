const myHeading = document.querySelector("h1"); 
myHeading.textContent = "Hello world!";


const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
    resolutionFunc(777);
  });
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");


function addDigits(inputValue) {
    const txtInput = document.getElementById('txtInput');
    if (inputValue !== '+'){
        txtInput.value = inputValue;
    } else {
        txtInput.value = (txtInput.value !== '')? 3 : '';
    }
}

const myHeading = document.querySelector("h1"); 
myHeading.textContent = "Hello world!";
document.addEventListener('DOMContentLoaded', () => {
    const inputs = [];
    function createPara() {
        const para = document.createElement('p');
        para.textContent = 'Create paragraph on load';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener('click', createPara(button.textContent));
    }
});
