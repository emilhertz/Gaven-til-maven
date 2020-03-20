//login metode
let login = async ()=> {
    //We are using the DOM to retrieve the values from our text-input ind login.html.
    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");

    const user = await



    //for-loop which uses operators to decide which user to sign in
    for (let i=0; i < listOfUsers.length; i++) {
        if (username.value === listOfUsers[i].userName && password.value === listOfUsers[i].password) {
            //Stores signed in user in localStorage as a string
            let signedIn = JSON.stringify(listOfUsers[i]);
            localStorage.setItem("signedIn", signedIn);
            if(listOfUsers[i].admin === true){
                window.open("adminPage.html", "_self");
                return;
            } else {
                //opens home.html
                window.open("homePage.html", "_self");
                return;
            }
        }
    }
    alert("Forkert brugernavn eller password :(")
};
