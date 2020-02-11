function dummyUsers() {
    if (localStorage.getItem("storedListOfUsers") == null) {
        let listOfUsers = [];
        listOfUsers.push(new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"));
        listOfUsers.push(new User(2,"Emil","Trækkerdreng","Grindrboi", "<=3", "hola@gmail.com"));

        //listOfUsers stringifies, så de kan tilknyttes localStorage
        let listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);
    }
};
//Calling dummyUser() to save dummy users in localStorage
dummyUsers();

//login metode
function login() {
    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    //for-loop der bruger operators til at se om indtastede værdier stemmer overens med listOfUsers-array, som er gemt i localStorage
    for (let i=0; i < listOfUsers.length; i++) {
        if (username.value === listOfUsers[i].username && password.value === listOfUsers[i].password) {
            //Gemmer bruger som logger ind i localStorage og som string
            let signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            // Åbner home.html
            window.open("../HTML/home.html", "_self");
            return
        }
    }
    alert("Forkert brugernavn eller password :(")
};