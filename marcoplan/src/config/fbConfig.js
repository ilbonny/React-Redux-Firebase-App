import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyClEKaEXaX4sQrSTZflPtbZSbxXpYMvQaE",
    authDomain: "net-ninja-marcoplan.firebaseapp.com",
    databaseURL: "https://net-ninja-marcoplan.firebaseio.com",
    projectId: "net-ninja-marcoplan",
    storageBucket: "net-ninja-marcoplan.appspot.com",
    messagingSenderId: "206325352575"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots : true})

export default firebase;