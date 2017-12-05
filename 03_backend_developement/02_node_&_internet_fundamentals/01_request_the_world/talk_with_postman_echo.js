const request = require("request");

function simpleGet(callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function simpleGetWithParams(callback) {
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result) {
      const resultJs = JSON.parse(result);
      callback(resultJs.args);
    }
  );
}

function validateTimestamp(callback) {
  const aujourd = new Date();
  const date = `${aujourd.getFullYear()}-${aujourd.getMonth() + 1}-${aujourd.getDate()}`;
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${date}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
