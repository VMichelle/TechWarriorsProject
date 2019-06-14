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

exports.createFile = functions.firestore
    .document('files/{userId}')
    .onCreate((snap, context) => {
        let data = {
            userComment: 'First comment here!',
            userName: 'Michelle Vu',
            timeStamp: Date
        };

        const newValue = snap.data();
        const userId = snap.id();

        let setDoc = db.collection('comments').doc(userId).set(data);
    });