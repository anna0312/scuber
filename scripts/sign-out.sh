#!/bin/bash

curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

# TOKEN=BAhJIiU4NDQwOTE3ZmI0MzhlOGQ5OTc1ZTJkYjliOGEwYzEwZAY6BkVG--47151e600167380faa578d6db2c9fe0494ec869e sh scripts/sign-out.sh
