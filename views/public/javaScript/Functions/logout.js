

//function which deletes the signed in user from localStorage and returns user to home-page
let logout = ()=> {
    localStorage.removeItem("signedIn");
    window.open("homePage.html", "_self");
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