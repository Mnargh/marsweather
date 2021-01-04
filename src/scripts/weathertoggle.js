const previousWeatherToggle = document.querySelector('.show-previous-weather');

const previousWeather = document.querySelector('.previous-weather');

previousWeatherToggle.addEventListener('click', () => {
  previousWeather.classList.toggle('.show-weather');
});

console.log('hello');