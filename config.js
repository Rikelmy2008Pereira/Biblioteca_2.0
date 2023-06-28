import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDByU2emfnIkUL1M6gz6JQaleKfU8niTfI",
  authDomain: "biblioteca-89454.firebaseapp.com",
  projectId: "biblioteca-89454",
  storageBucket: "biblioteca-89454.appspot.com",
  messagingSenderId: "1062829422325",
  appId: "1:1062829422325:web:605b73a6a40eb530ae37bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
