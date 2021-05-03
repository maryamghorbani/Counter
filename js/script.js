let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message .loading');
let successMessage = document.querySelector('.message .success');


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
    timerNum.textContent = secondsValue;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';


    let timeriId = setInterval(() => {

        if ( secondsValue<= 1 ) {
            clearInterval(timeriId)
            startBox.style.display = 'block';
            timerCircle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';
            inputCounter.value = ''
        }

        secondsValue  -= 1;
        timerNum.textContent = secondsValue;
        },1000);
})