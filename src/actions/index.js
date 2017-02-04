import axios from 'axios';
const API_KEY = 'b09dc8328902dbe4a4495017081ab633';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    //Compose our URL according to the API requirements
    const url = `${ROOT_URL}&q=${city},us`;
    //Create a variable for the API call
    const request = axios.get(url);

    return{
      type: FETCH_WEATHER,
      payload: request
    };
}
