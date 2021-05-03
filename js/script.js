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

    let originalSecond = secondsValue;
    let lastPercent = 'p100'
    let timeriId = setInterval(() => {
        if(lastPercent) timerCircle.classList.remove(lastPercent);
        if ( secondsValue<= 0 ) {
            clearInterval(timeriId)
            startBox.style.display = 'block';
            timerCircle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';
            inputCounter.value = '';
            return;
        }


        secondsValue  -= 1;
        let percent = Math.abs(Math.floor( ((originalSecond - secondsValue)/originalSecond) * 100) - 100 )
        lastPercent = `p${percent}`;
        timerCircle.classList.add(`p${percent}`)
        timerNum.textContent = secondsValue;
        },1000);
})