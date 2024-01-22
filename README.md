api without database

- we will follow MVC architecture
- routes demo
  - /users ->GET -> {id, username, email}
  - /users/ -> POST -> {username, email}
  - /users/id ->PUT -> update the user
  - /users/id -> DELETE -> update the user

Salam@DESKTOP-D4LBKOH MINGW64 ~/Desktop/REST-API (master) $ npm init -y && npm
install express nodemon cors body-parser dotenv uuid

Salam@DESKTOP-D4LBKOH MINGW64 ~/Desktop/REST-API (master) $ npm start

> rest-api@1.0.0 start nodemon index.js

[nodemon] 3.0.3 [nodemon] to restart at any time, enter `rs` [nodemon] watching
path(s): _._ [nodemon] watching extensions: js,mjs,cjs,json [nodemon] starting
`node index.js` server is running at http://localhost:4000 [nodemon] restarting
due to changes... [nodemon] starting `node index.js` server is running at
http://localhost:4000
