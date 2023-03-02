const background = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');
let load = 0;

// blur will change every 30ms
let interval = setInterval(blur, 30);

// function to map load numbers (0-100) to opacity values (0-1) and blur values (30-0)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// start image blurred and decrease blur as percentage increases
/// increment load for each interval up to 100 - change text and opacity with load increments
/// 
function blur() {
  load++;
  if (load === 100) {
    clearInterval(interval);
  }
  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)

  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
