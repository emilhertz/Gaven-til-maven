if (localStorage.getItem("storedListOfUsers") == null) {
    let listOfUsers = [];
    listOfUsers.push(new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"));
    listOfUsers.push(new User(2,"Emil","Trækkerdreng","Grindrboi", "<=3", "hola@gmail.com"));

    //listOfUsers stringifies, så de kan tilknyttes localStorage
    let listOfUsersString = JSON.stringify(listOfUsers);
    localStorage.setItem("storedListOfUsers", listOfUsersString);
}

if (localStorage.getItem("storedListOfRestaurants") == null) {
    let listOfRestaurants = [];
    listOfRestaurants.push(new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],[],[],"Fin restaurant:)"));
    listOfRestaurants.push(new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],[],[],"Også en fin restaurant:)"));
    listOfRestaurants.push(new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],[],[],"MEGET fin restaurant:)"));

    //listOfRestaurants stringifies, så de kan tilknyttes localStorage
    let listOfUsersRestaurantsString = JSON.stringify(listOfRestaurants);
    localStorage.setItem("storedListOfRestaurants", listOfUsersRestaurantsString);
}

