const firebase = require("firebase");
require("firebase/firestore");

const config = {
  apiKey: "<YOUR FIREBASE INFO HERE>",
  authDomain: "<YOUR FIREBASE INFO HERE>",
  databaseURL: "<YOUR FIREBASE INFO HERE>",
  projectId: "<YOUR FIREBASE INFO HERE>",
  storageBucket: "<YOUR FIREBASE INFO HERE>",
  messagingSenderId: "<YOUR FIREBASE INFO HERE>"
};
firebase.initializeApp(config);

const fire = {
  auth : firebase.auth(),
  database: firebase.firestore()
}

export default fire