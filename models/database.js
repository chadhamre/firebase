// db
const firebase = require("firebase");
const admin = require("firebase-admin");

// initialize datbase
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tocca-131d6.firebaseio.com"
});

const ref = admin.database().ref();

module.exports = ref;
