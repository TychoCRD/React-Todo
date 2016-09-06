import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDLP8bT6Mxeze3Yj_gpNW9rmoky8PPk-U4",
    authDomain: "tycho-todo-app.firebaseapp.com",
    databaseURL: "https://tycho-todo-app.firebaseio.com",
    storageBucket: "tycho-todo-app.appspot.com",
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
      name: 'The Best App',
      version: '1.0'
    },
    isRunning: true,
    user: {
      name: 'Tycho',
      age: 30
    }
  });


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('New todo:', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push();
newTodoRef.set({
  text: 'Learn Firebase'
});
var newTodoRef2 = todosRef.push({
  text: 'Go for a walk'
});


  // firebaseRef.child('user').on('value', (snapshot)=>{
  //   console.log('Got new value', snapshot.val());
  // });
  //
  // firebaseRef.child('user').update({
  //   name: 'Bob'
  // });

  // firebaseRef.once('value').then((snapshot)=>{
  //   console.log('Got entire database', snapshot.val());
  // },(e)=>{
  //   console.log('Unable to fetch', e);
  // });

  // .then(()=>{
  //   console.log('Set worked');
  // },(e)=>{
  //   console.log('Error', e);
  // });
//
// firebaseRef.child('app').set({
//   name: 'The Best Pivoted App'
// });

// firebaseRef.update({
//   appName: 'Todo Wizard',
//   'app/version': '1.0.1'
// });
//
// firebaseRef.child('app').set({
//   name: 'The Best Wizard App',
//   version: '1.0.2'
// });
//
// firebaseRef.update({
//   appName: 'The Fourth App',
//   'user/name': 'Ferdinand'
// }).then(()=>{
//   console.log('Update worked!')
// },(e)=>{
//   console.log('Error!', e);
// });
//
// firebaseRef.child('app').update(
//   {
//     name: 'The Coolest Updated App'
//   }
// );
//
// firebaseRef.child('user').update({
//   name: 'Bob'
// });
//
// firebaseRef.child('user/age').remove();
//
// firebaseRef.update({
//   isRunning: null
// });
