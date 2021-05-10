const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
  };

refs.btnStop.disabled=true;
const TIMER_DELAY=1000;
let timerId = null;
let intervalId = '';


// Слушатель события по кнопке Start
refs.btnStart.addEventListener('click', clickOnButtonStart);

// Слушатель события по кнопке Stop  
refs.btnStop.addEventListener('click',clickOnButtonStop);

// Функция для смены цвета
function changeBodyColor() {
  const randomColor = randomIntegerFromInterval(0,colors.length-1);
   refs.body.style.backgroundColor = colors[randomColor];
}

// Функция для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция для клика по кнопке Start 
function clickOnButtonStart () {
  refs.btnStart.disabled = true; 
  refs.btnStop.disabled = false;
  intervalId=setInterval(changeBodyColor,TIMER_DELAY);
}

// Функция для клика по кнопке Stop 
function clickOnButtonStop () {
    clearInterval(intervalId);
    refs.btnStart.disabled = false; 
    refs.btnStop.disabled = true; 
} 






