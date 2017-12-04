curl -d "foo=bar" -X POST "https://postman-echo.com/post"| jq .'form' > 02_postman_api_post.result
