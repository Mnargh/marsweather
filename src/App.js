import './styling/main.scss';
import CurrentWeather from '../src/components/CurrentWeather';
import PreviousWeather from '../src/components/PreviousWeather';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <PreviousWeather />
    </div>
  );
}

export default App;
