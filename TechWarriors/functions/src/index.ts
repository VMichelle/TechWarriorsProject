import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

uid = 

exports.createToken = functions.admin.auth().createCustomToken(uid).then(function(customToken){
    
}

})

export const heyThere = functions.https.onRequest((request, response) => {
    let uid = user.uid;
    admin.auth().createCustomToken(uid)
    .then(function(customToken: any) {
    return customToken;
    })
    .catch(function(error) {
    console.log('Error creating custom token:', error);
});
    response.send("Hello from Michelle!");
   });

// export getToken = functions.admin.auth().createCustomToken(uid)
//     .then(function(customToken: any) {
//     return customToken;
//     })
//     .catch(function(error) {
//     console.log('Error creating custom token:', error);
// });


