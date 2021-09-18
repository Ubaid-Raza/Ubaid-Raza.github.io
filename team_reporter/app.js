var base_url = 'file:///E:/de/team_reporter/';
const firebaseConfig = {
        apiKey: "AIzaSyDyb1MFdnZ3gHcFKP5AFx8P2NyD-GB2quE",
        authDomain: "team-reporter-67bfe.firebaseapp.com",
        projectId: "team-reporter-67bfe",
        storageBucket: "team-reporter-67bfe.appspot.com",
        messagingSenderId: "1015705495552",
        appId: "1:1015705495552:web:a9340230223a31a024d0e5",
        measurementId: "G-HN3JRWCV0H"
};
    
/// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const dbRef  = firebase.database().ref();
const auth   = firebase.auth();
var database = firebase.database();


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
} 

function creatteam(){
    let newTeam = {};
    const user  = auth.currentUser.email;
    const uid   = auth.currentUser.uid;


    const teamname = document.getElementById("p1").value;
    const category = document.getElementById("p2").value;
    const membertype = document.getElementById("p3").value;
    newTeam['team_name'] = teamname;
    newTeam['category_name'] = category;
    newTeam['member_email'] = membertype;

    let dataref = database.ref("OwnProject/")
    dataref.push({
        id: uid,
        email: user,
        team_name: teamname,
        member_email: membertype 
    })

}