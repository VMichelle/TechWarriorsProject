const express = require('express');
// const http = require('http');
// const https = require('https');
const app = express();
// const port = 3000;
const admin = require('firebase-admin');


var serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://techwarriors-1c02e.firebaseio.com"
});

let uid = 'some-uid';




// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
