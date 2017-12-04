curl -X GET "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis" | jq .'args' > 04_postman_api_call.result
