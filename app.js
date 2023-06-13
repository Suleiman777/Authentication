// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyCHoiEN-e70D6SyqjND93RNDN4Sy5YBvMo",
    authDomain: "aauthentication-316fa.firebaseapp.com",
    projectId: "aauthentication-316fa",
    storageBucket: "aauthentication-316fa.appspot.com",
    messagingSenderId: "564792455317",
    appId: "1:564792455317:web:a7370236315b1f73f9eb9c"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");


signUpButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");


    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value,password.value)
    .then((userCredential) => {
        location.reload();
// Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
    })
    .catch((error) => {
        var errorcode = error.code;
        var errorMessege = error.Messege;
        console.log("error code", errorcode);
        console.log("error message", errorMessege);
    });
    
});

// Signin Function
let SignInButton = document.getElementById("signin");

SignInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signIn click");

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value,password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
        window.location = "home.html";

})
.catch((error) => {
    var errorCode = error.code;
    var errorMessege = error.messege;
    console.log("error code", errorCode)
    console.log("error message", errorMessege);
});
});

//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        var users = document.getElementById("user")
        users.appendChild(text);
        console.log(users);
        } else {
            }
});
