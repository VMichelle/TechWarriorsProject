"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// admin.initializeApp();
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.heyThere = functions.https.onRequest((request, response) => {
    response.send("Hello from Michelle!");
});
// export getToken = functions.admin.auth().createCustomToken(uid)
//     .then(function(customToken: any) {
//     return customToken;
//     })
//     .catch(function(error) {
//     console.log('Error creating custom token:', error);
// });
//# sourceMappingURL=index.js.map