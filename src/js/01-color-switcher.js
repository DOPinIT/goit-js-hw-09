

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let changeBodyColorId = null;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);


function onClickStartBtn() {
  stopBtn.disabled = false;
    startBtn.disabled = true;
    changeBodyColorId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
};

function onClickStopBtn() {
  stopBtn.disabled = true
    startBtn.disabled = false;
    clearInterval(changeBodyColorId);
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};