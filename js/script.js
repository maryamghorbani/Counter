let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');


startCounter.addEventListener('click' , function (e) {
    let secondsValue = parseInt(inputCounter.value)
    console.log(secondsValue)

    if (isNaN(secondsValue)) {
        errorElement.textContent = 'Inter a number, please!';
        errorElement.classList.add('active')
        return
    }

    errorElement.classList.remove('active');
    startBox.style.display = 'none';
    timerCircle.style.display = 'block';
})