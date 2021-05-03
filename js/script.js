let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let lastPercent = 'p100';
let originalSecond, secondsValue, timeriId;



startCounter.addEventListener('click' , function (e) {
    secondsValue = parseInt(inputCounter.value)
    console.log(secondsValue)

    if (isNaN(secondsValue)) return toggleErrorMessage({show: true , message: 'Input valid number, please!'});

    toggleErrorMessage({ show: false });
    toggleStartBox({ show: false });
    toggleLoadingMessage({ show: true });
    toggleTimer({ show: true }, secondsValue)


    originalSecond = secondsValue;
    timeriId = setInterval(startTimer,1000);
})

let startTimer = () => {
    if(lastPercent) timerCircle.classList.remove(lastPercent);
    if ( secondsValue<= 0 ) {
        clearInterval(timeriId)
        toggleStartBox({ show: true });
        toggleTimer({ show:false });
        toggleLoadingMessage({ show: false });
        return;
    }


    secondsValue  -= 1;
    timerNum.textContent = secondsValue;

    let percent = lastPercent = `p${Math.abs(Math.floor( ((originalSecond - secondsValue)/originalSecond) * 100) - 100 )}`
    timerCircle.classList.add(percent)

}


let toggleErrorMessage = ({show, message}) => {
    let errorElement = document.querySelector('#error-message');
    if(show) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
    } else {
        errorElement.classList.remove('active');
    }
}

let toggleStartBox = ({show}) => {
    if( show ) {
        startBox.style.display = 'block';
        inputCounter.value = '';
    } else {
        startBox.style.display = 'none';
    }
}

let toggleLoadingMessage = ({ show }) => {
    let loadingMessage = document.querySelector('.message .loading');
    let successMessage = document.querySelector('.message .success');
    if(show) {
        loadingMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }else {
        loadingMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
}

let toggleTimer = ({ show, secondsValue }) => {
    if (show) {
        timerCircle.style.display = 'block';
        timerNum.textContent = secondsValue;
    } else {
        timerCircle.style.display = 'none';
    }
}