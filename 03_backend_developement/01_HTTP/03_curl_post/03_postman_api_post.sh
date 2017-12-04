curl -d '{"foo": "bar"}' -H "Content-Type: application/json" -X POST "https://postman-echo.com/post"| jq .'json' > 03_postman_api_post.result
