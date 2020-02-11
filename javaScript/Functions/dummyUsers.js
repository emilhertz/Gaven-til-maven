function dummyUsers() {
    if (localStorage.getItem("storedListOfUsers") == null) {
        let listOfUsers = [];
        listOfUsers.push(new Users("Thorn","password","32","København"));
        listOfUsers.push(new Users("Peter","Kanin","224","Eventyrskoven"));

        //listOfUsers stringifies, så de kan tilknyttes localStorage
        let listOfUsersString = JSON.stringify(listOfUsers);
        localStorage.setItem("storedListOfUsers", listOfUsersString);
    }
};