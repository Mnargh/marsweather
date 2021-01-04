import './styling/main.scss';

function App() {
  return (
    <div className="App">
      

      <div class="previous-weather">
        <button for="weather-toggle" class='show-previous-weather'>
          <span> &#8593;</span>
          <span class="sr-only">Show previous weather</span>
        </button>
        <h2 class="main-title previous-weather__title">Previous 7 days</h2>

        <div class="previous-days">
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
          <div class="previous-day">
            <h3 class="previous-day__sol">Sol 371</h3>
            <p class="previous-day__date">September 31</p>
            <p class="previous-day__temp">High: -20°C</p>
            <p class="previous-day__temp">Low: -180°C</p>
            <button class="previous-day__more-info">more info</button>
          </div>
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
