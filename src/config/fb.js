  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcqm0aDU3njbsjZ4_skwBmjuDwyk2vsxA",
    authDomain: "netninja-project-management.firebaseapp.com",
    databaseURL: "https://netninja-project-management.firebaseio.com",
    projectId: "netninja-project-management",
    storageBucket: "netninja-project-management.appspot.com",
    messagingSenderId: "444980749845"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebase