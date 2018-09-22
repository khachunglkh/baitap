const URL = 'https://api.openweathermap.org/data/2.5/find?units=metric&appid=bed159084bbecfb1052cd5e05c9b31b9';

function getTemp(cityName){
  return fetch(URL+ '&q='+cityName)
  .then(res => res.json())
  .then(resJSON => resJSON.list[0].main.temp);
}
 export default getTemp;
