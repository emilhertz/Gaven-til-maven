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