//login metode
let login = ()=> {
    let listOfUsers = JSON.parse(localStorage.getItem("storedListOfUsers"));

    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    //for-loop which uses operators to decide which user to sign in
    for (let i=0; i < listOfUsers.length; i++) {
        if (username.value === listOfUsers[i].userName && password.value === listOfUsers[i].password) {
            //Stores signed in user in localStorage as a string
            let signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            if(listOfUsers[i].admin === true){
                window.open("./adminPage.html", "_self");
                return;
            } else {
                //opens home.html
                window.open("./homePage.html", "_self");
                return;
            }
        }
    }
    alert("Forkert brugernavn eller password :(")
};

//function which deletes the signed in user from localStorage and returns user to home-page
let logout = ()=> {
    localStorage.removeItem("signedIn");
    window.open("./homePage.html", "_self");
};

//asigns the signed in user to a global-varible
let signedIn = JSON.parse(localStorage.getItem("signedIn"));

//function is called on every html-page
let dynamicNavBar = ()=> {
    //decides what to display if user is signed in
    if (signedIn !== null) {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("reserve").style.display = "block";
        document.getElementById("admin").style.display = "none";
        document.getElementById("myRes").style.display = "block";
        //decides what to display if user is admin
        if (signedIn.admin === true) {
            document.getElementById("admin").style.display = "block";
            document.getElementById("reserve").style.display = "none";
            document.getElementById("myRes").style.display = "none";
        }
        //decides what to display if no user is signed in
    } else {
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
        document.getElementById("admin").style.display = "none";
        document.getElementById("reserve").style.display = "none";
        document.getElementById("myRes").style.display = "none";
    }
};