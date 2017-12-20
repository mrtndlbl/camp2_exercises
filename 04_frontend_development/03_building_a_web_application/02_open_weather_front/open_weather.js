const express = require("express");
const app = express();
const fetch = require("node-fetch");
const API_KEY = process.env.OPENWEATHER_API_KEY;
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/:city", function(request, result) {
  const myCity = request.params.city
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((json) => json.main.temp)
    .then(function(temp) {
       if (temp > 10) {
         result.send(`
          <head>
            <title>Weather in ${myCity}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
            <style>
            .jumbotron {
              margin-bottom: 0px;
              background-image: url(https://images.unsplash.com/photo-1488120299791-f9241bdf10c9?auto=format&fit=crop&w=2619&q=80);
              background-position: 0% 25%;
              background-size: cover;
              background-repeat: no-repeat;
              color: white;
            }
            </style>
          </head>
          <body>
            <div class="jumbotron">
              <h1 class="display-3">Temperature of ${myCity} is ${temp}°C</h1>
              <p class="lead">MyFuckinWeatherApp is a simple app to get weather for a place, produced by high level developpers.</p>
              <hr class="my-4">
              <p>MyFuckinWeatherApp is one of the most visited websites in the world.</p>
              <p>Commerce is fine. Advertising is not evil. But it doesn't belong here. Not in MyFuckinWeatherApp.</p>
              <p>MyFuckinWeatherApp is something special. It is like a temple for the mind. It is a place we can all go to think, to learn, to share our knowledge with others.</p>
              <p>When I founded MyFuckinWeatherApp, I could have made it into a for-profit company with advertising banners, but I decided to do something different. We’ve worked hard over the years to keep it lean and tight. We fulfill our mission efficiently.</p>
              <p>If everyone reading this donated, our fundraiser would be done within an hour. But not everyone can or will donate. And that's fine. Each year just enough people decide to give.</p>
              <p>This year, please consider making a donation of €5, €20, €50 or whatever you can to protect and sustain MyFuckinWeatherApp.</p>
              <p>Thanks</p>
              <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Donate</a>
              </p>
            </div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
          </body>`)
    } else {
     result.send(`
      <head>
        <title>Weather in ${myCity}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <style>
        .jumbotron {
          margin-bottom: 0px;
          background-image: url(https://images.unsplash.com/photo-1433863448220-78aaa064ff47?auto=format&fit=crop&w=3289&q=80);
          background-position: 0% 25%;
          background-size: cover;
          background-repeat: no-repeat;
          color: white;
        }
        </style>
      </head>
      <body>
        <div class="jumbotron">
          <h1 class="display-3">Temperature of ${myCity} is ${temp}°C</h1>
          <p class="lead">MyFuckinWeatherApp is a simple app to get weather for a place, produced by high level developpers.</p>
          <hr class="my-4">
          <p>MyFuckinWeatherApp is one of the most visited websites in the world.</p>
          <p>Commerce is fine. Advertising is not evil. But it doesn't belong here. Not in MyFuckinWeatherApp.</p>
          <p>MyFuckinWeatherApp is something special. It is like a temple for the mind. It is a place we can all go to think, to learn, to share our knowledge with others.</p>
          <p>When I founded MyFuckinWeatherApp, I could have made it into a for-profit company with advertising banners, but I decided to do something different. We’ve worked hard over the years to keep it lean and tight. We fulfill our mission efficiently.</p>
          <p>If everyone reading this donated, our fundraiser would be done within an hour. But not everyone can or will donate. And that's fine. Each year just enough people decide to give.</p>
          <p>This year, please consider making a donation of €5, €20, €50 or whatever you can to protect and sustain MyFuckinWeatherApp.</p>
          <p>Thanks</p>
          <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Donate</a>
          </p>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
      </body>`)
    }
  })
    .catch((error) => {
      console.warn(error);
    });
})
