POST http://localhost:8080/v1/fragments

Content-Type: text/plain; charset=utf-8

[BasicAuth]
user1@email.com:password1

```Hello S3!```

HTTP/1.1 201

[Asserts]
# The Location header should look like what we expect (including the fragment id)
header "Location" matches "^http:\/\/localhost:8080\/v1\/fragments\/[A-Za-z0-9_-]+$"
jsonpath "$.status" == "ok"

[Captures]
url: header "Location"
################################################
GET {{url}}
[BasicAuth]
user1@email.com:password1

HTTP/1.1 200
Content-Type: text/plain; charset=utf-8
[Asserts]
body == "Hello S3!"
#################################################
DELETE {{url}}
[BasicAuth]
user1@email.com:password1

HTTP/1.1 200
#################################################
GET {{url}}
[BasicAuth]
user1@email.com:password1

HTTP/1.1 404
