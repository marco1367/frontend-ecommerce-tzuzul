const admin = require("firebase-admin");
const serviceAccount = require('./credentials.json');


let app_Firebase;

if (!admin.apps.length) {
    app_Firebase = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
}else{
    app_Firebase = admin.app();
}

const dataBase_fireStore = app_Firebase.firestore(); 

module.exports = dataBase_fireStore;