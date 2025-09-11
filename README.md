curl --location 'https://strapi.arvanschool.ir/api/auth/local/register' \
--header 'Content-Type: application/json' \
--data-raw '{
"username": "yourusername",
"email": "you@example.com",
"password": "yourPassword"
}'
<!-- ---------------------------- -->
curl --location 'https://strapi.arvanschool.ir/api/auth/local' \
--header 'Content-Type: application/json' \
--data-raw '{
"identifier": "you@example.com",
"password": "yourPassword"
}