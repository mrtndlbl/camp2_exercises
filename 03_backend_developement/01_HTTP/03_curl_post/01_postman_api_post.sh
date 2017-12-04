curl -d "Hello from postman" -X POST "https://postman-echo.com/post"| jq .'form' > 01_postman_api_post.result
