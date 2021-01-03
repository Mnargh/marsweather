import './styling/main.scss';

function App() {
  return (
    <div className="App">
      <main class="mars-current-weather" >
        <h1 class="main-title">Latest weather at Elysium Plantitia</h1>
        <div class="date">
          <h2 class="section-title section-title-date">Sol 377</h2>
          <p class="date__day">September 18</p>
        </div>
        <div class="temperature">
          <h2 class="section-title">Temperature</h2>
          <p class="reading">High: -20°C</p>
          <p class="reading">Low: -180°C</p>
        </div>
        <div class="wind">
          <h2 class="section-title">Wind</h2>
          <p class="reading">75 kph</p>

          <div class="wind__direction">
            <p class="sr-only">45 degrees</p>
            <div class="wind__arrow"></div>
          </div>
        </div>
        <div class="info">
          <p>Insight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Plantitia,
          a flat smooth crater near Mars' equator</p>

          <p>This is only part of insights mission. Click here to find out more</p>
        </div>
        <div class="unit">
          <label for="cel">°C</label>
          <input type="text" id="cel" name="unit" checked />
          // When unit toggel is clicked, checkbox must swap
          <button class="unit-toggle" />
          <label for="fah">°F</label>
          <input type="text" id="fah" name="unit" />
        </div>
      </main>

      <div class="previous-weather">
        <label for="weather-toggle" class='show-previous-weather-label'>
          &#8593;
        <span class="sr-only">Show previous weather</span>
        </label>

        <input type="checkbox" id="weather-toggle" class="show-previous-weather-toggle" />

        <h2 class="main-title">Previous 7 days</h2>

        <div class="previous-days">
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
