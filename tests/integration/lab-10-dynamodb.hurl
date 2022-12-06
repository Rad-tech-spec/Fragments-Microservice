POST http://localhost:8080/v1/fragments

Content-Type: application/json

[BasicAuth]
user1@email.com:password1

{ "service": "DynamoDB" }

HTTP/1.1 201

[Asserts]
# The Location header should look like what we expect (including the fragment id)
header "Location" matches "^http:\/\/localhost:8080\/v1\/fragments\/[A-Za-z0-9_-]+$"
jsonpath "$.status" == "ok"

[Captures]
fragment1_url: header "Location"
fragment1_id: jsonpath "$.['fragment']['id']"
#############################################################################
GET {{fragment1_url}}/info

[BasicAuth]
user1@email.com:password1

HTTP/1.1 200

# We have various assertions about the response that we want to check
[Asserts]
# The Location header should look like what we expect (including the fragment id)
jsonpath "$.status" == "ok"
##############################################################################
POST http://localhost:8080/v1/fragments

Content-Type: text/markdown

[BasicAuth]
user1@email.com:password1

```DynamoDB is **great**``` 

HTTP/1.1 201

[Asserts]
# The Location header should look like what we expect (including the fragment id)
header "Location" matches "^http:\/\/localhost:8080\/v1\/fragments\/[A-Za-z0-9_-]+$"
jsonpath "$.status" == "ok"

[Captures]
fragment2_url: header "Location"
fragment2_id: jsonpath "$.['fragment']['id']"
###############################################################################
GET {{fragment2_url}}/info

[BasicAuth]
user1@email.com:password1

HTTP/1.1 200

# We have various assertions about the response that we want to check
[Asserts]
# The Location header should look like what we expect (including the fragment id)
jsonpath "$.status" == "ok"
#############################################################################
GET http://localhost:8080/v1/fragments

[BasicAuth]
user1@email.com:password1

HTTP/1.1 200

[Asserts]
jsonpath "$.status" == "ok"
jsonpath "$.fragments[*].id" includes "{{fragment1_id}}"
###############################################################################
DELETE {{fragment1_url}}

[BasicAuth]
user1@email.com:password1

HTTP/1.1 200
