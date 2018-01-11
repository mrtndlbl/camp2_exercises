const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const getWeatherForTomorrow = () => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lille&APPID=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((json) => json.main.temp)
    .then((temp) => {
      console.log(`Temperature in Lille is ${temp}°C`);
      return temp;
    })
    .catch((error) => {
      console.warn(error);
    });
}
