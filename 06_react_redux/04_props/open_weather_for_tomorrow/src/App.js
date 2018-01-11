import React, { Component } from 'react';
import './App.css';
import { getWeatherForTomorrow } from "./getWeatherForTomorrow.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    }
  }

  componentDidMount() {
    getWeatherForTomorrow()
      .then(newTemp => {
        this.setState({
          temp: newTemp
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h3>Bonjour Monsieur</h3>
        <p>Temperature is {this.state.temp}°C</p>
        <h1>branlette()</h1>
        <img src="https://media.giphy.com/media/3ohzdIfd39bRZhKRLa/giphy.gif" width="480" height="480" className="giphy-embed"/>
        <p>
          <a href="https://giphy.com/gifs/funkofficial-hand-3ohzdIfd39bRZhKRLa">via GIPHY</a>
        </p>
      </div>
    );
  }
}

export default WeatherApp;
