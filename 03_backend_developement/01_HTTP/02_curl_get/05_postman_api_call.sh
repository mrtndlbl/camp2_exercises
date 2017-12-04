varDate=`date +%Y-%m-%d`
curl -X GET "https://postman-echo.com/time/valid?timestamp=${varDate}" > 05_postman_api_call.result
