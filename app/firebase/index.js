import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDLP8bT6Mxeze3Yj_gpNW9rmoky8PPk-U4",
      authDomain: "tycho-todo-app.firebaseapp.com",
      databaseURL: "https://tycho-todo-app.firebaseio.com",
      storageBucket: "tycho-todo-app.appspot.com",
    };
    firebase.initializeApp(config);
} catch(e) {

}


export var firebaseRef = firebase.database().ref();

export default firebase;
