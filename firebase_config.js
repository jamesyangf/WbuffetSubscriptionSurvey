 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyACQRgpmJfiRlthEerSJ2PIfbtBpg_2knQ",
    authDomain: "warehouse-buffet.firebaseapp.com",
    databaseURL: "https://warehouse-buffet.firebaseio.com",
    projectId: "warehouse-buffet",
    storageBucket: "warehouse-buffet.appspot.com",
    messagingSenderId: "383187253746",
    appId: "1:383187253746:web:d4baa055bbbb1095a4136b",
    measurementId: "G-9QYS5B85NX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  // Get a reference to the database service
  var database = firebase.database().ref();

  function signupCustomer(email) {
    email = "Tyler@gmail.com";
    var dbRef = database.child('subscribers');
    dbRef.orderByChild("email").equalTo(email).once("value", snapshot => {
      if (snapshot.exists()) { // Dont add existing user
        console.log("Existing Subsciber " + email);
      } else {
        console.log("New Subscriber " + email);
        dbRef.push().set({
          email: email
        });
      }
    })

    console.log("POOP");
    
  }