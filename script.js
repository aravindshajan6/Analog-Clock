//access DOM elements
const body = document.querySelector('body');
hourHand = document.querySelector('.hour');
minuteHand = document.querySelector('.minute');
secondHand = document.querySelector('.second');
modeSwitch = document.querySelector('.mode-switch');

//eventListner for mode-switch

modeSwitch.addEventListener('click', () => {
  //toggle dark mode on body emlement
  body.classList.toggle('dark');
  //check if dark class is currently present on body element
  const isDarkMode = body.classList.contains('dark');
  //   console.log(isDarkMode);
  modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

const updateTime = () => {
  //get current time and calculate degrees for hands
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  //rotate hands to appropriate degree based on current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

//call updateTime to set clock time each second
setInterval(updateTime, 1000);

//call updateTime duntion on page load
updateTime();
