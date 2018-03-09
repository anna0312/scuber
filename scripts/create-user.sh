#!/bin/bash

# curl "https://afternoon-basin-31565.herokuapp.com/sign-up" \
curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
# EMAIL="lucy@anna.com" PASSWORD="testing" PASSWORD_CONFIRMATION="testing" sh scripts/create-user.sh
