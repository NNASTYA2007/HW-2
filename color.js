const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

startBtnRef.addEventListener("click", handleStart);
stopBtnRef.addEventListener("click", handleStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const start = () => {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  startBtnRef.disabled = true;
};
let colorSwitchId = null;

function handleStart() {
  return (colorSwitchId = setInterval(start, 1000));
}

function handleStop() {
  startBtnRef.disabled = false;
  return clearInterval(colorSwitchId);
}
