import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './App';
import { getWeatherForTomorrow } from "./getWeatherForTomorrow.js";

jest.mock("WeatherApp", function() {
  return jest.fn()
    .mockImplementation(() =>
      Promise.resolve({
        json: function() {
          return Promise.resolve([{temp: 4.71}]);
        }
      })
    );
});
