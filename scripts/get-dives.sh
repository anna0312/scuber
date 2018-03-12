curl "http://localhost:4741/dives" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
# TOKEN=BAhJIiVjODY0ZDk5MjVkNzhlZTQ0ZmQzMmNmNGM3MWUwMjY1MQY6BkVG--4488bf0f92072f3c5ed62ee92805c8355c509a3e sh scripts/get-dives.sh
