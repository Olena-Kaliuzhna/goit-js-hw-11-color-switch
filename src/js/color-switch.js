import colors from './colors-list.js';

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-action="start"]');
const btnStopEl = document.querySelector('[data-action="stop"]');

let interval = null;
let isActive = false;

btnStartEl.addEventListener('click', onBtnStarClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStarClick() {
    if (isActive) {
    return;
  };
  isActive = true;
  interval = setInterval(switchColor, 1000);
  btnStartEl.disabled = true;
};

function onBtnStopClick() {
  clearInterval(interval);
  isActive = false;
 btnStartEl.disabled = false;
};



function switchColor() { 
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let colorsInd = randomIntegerFromInterval(0, colors.length - 1);
  
  bodyEl.style.backgroundColor = colors[colorsInd];
 
};

