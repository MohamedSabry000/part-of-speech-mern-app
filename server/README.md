# REST API application

This is a bare-bones example of a Part of Speech application providing REST
API.

The entire application is contained within the `server.js` file.

`package.json` is a file containing all configuration packages we need for start.

## Install

    npm install

## Run the app

    npm run start

# REST API

The REST API to the example app is described below.

## Get list of Words (Random 10 Words)

### Request

`GET /api/v1/words/`

    curl -i -H 'Accept: application/json' http://localhost:5050/api/v1/words/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    Connection: keep-alive
    Keep-Alive: timeout=5
    Content-Length: 721

    [
      {
        "id":1,
        "word":"slowly",
        "pos":"adverb"
      },
      ...
    ]

### Request

`GET /api/v1/rank/`

    curl --location --request GET 'localhost:5050/api/v1/rank' \
      --header 'Content-Type: application/json' \
      --data-raw '{
          "score": 80
      }'
### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
      {
        "rank": 80
      }
    ]
