const OAuth = require("OAuth");
const newOAuth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

const request = require("request");
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_PASSWORD;
const watson_url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


twitson("cnn");

function twitson(tweetID) {
  getTextFromTweets(tweetID, (json) => {
    json.map(tweet => watsonAnalyse(tweet.text, (body) => console.log(body)));
  });
}

function getTextFromTweets(userId, callback) {
  newOAuth.get(url + userId, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      const json = JSON.parse(data);
      json.map((tweet) => console.log(tweet.text));
      callback(json);
    }
  });
}

function watsonAnalyse(watsonText, callback) {
  const text = watsonText;
  const uri = encodeURI(watson_url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request(
    {
      url: uri,
      headers: { "Authorization": auth }
    },
    function (error, response, body) {
      const json = JSON.parse(body);
      callback(json.emotion);
    }
  );
}
