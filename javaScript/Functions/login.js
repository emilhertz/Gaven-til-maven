//login metode
function login() {
    let listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));

    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    //for-loop der bruger operators til at se om indtastede værdier stemmer overens med listOfUsers-array, som er gemt i localStorage
    for (let i=0; i < listOfUsers.length; i++) {
        if (username.value === listOfUsers[i].userName && password.value === listOfUsers[i].password) {
            //Gemmer bruger som logger ind i localStorage og som string
            let signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            // Åbner home.html
            window.open("./homePage.html", "_self");
            return
        }
    }
    alert("Forkert brugernavn eller password :(")
};