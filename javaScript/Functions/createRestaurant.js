function createRestaurant() {
    //Firstly we assign "createRestaurants" and "form" to variables
    let restaurantDiv = document.getElementById("createRestaurant");
    let createRestaurantForm = document.createElement("form");

    //Here we create a new input and manipulate the DOM-structure.
    // Afterwards we assign type, placeholder and id to the input.
    let restaurantName = document.createElement("input");
    restaurantName.type = "text";
    restaurantName.placeholder = "Restaurant Navn";
    restaurantName.id = "restaurantId";

    //We call the function
    createRestaurantForm.appendChild(restaurantName);


    //Adress

    //Menu

    //Seats

    //Reservations

    //Description

    let createDescriptionForm = document.createElement("form");


    let discriptionName = document.createElement("input");
    descriptionName.type = "text";
    descriptionName.place = "Placér en beskrivelse her";
    descriptionName.id = "descriptionId";

    createDescriptionForm.appendChild(descriptionName);
    restaurantName.appendChild(createRestaurantForm);




}

