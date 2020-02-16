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
    restaurantDiv.appendChild(createRestaurantForm);

    //Adress

    //Menu

    //Seats --> Dropdown
    let createSeatDropdown = document.createElement("select");

    let seatName = document.createElement("option");
    seatName.type = "text";
    seatName.id = "myDropdownList";

    createSeatDropdown.appendChild(seatName);
    restaurantDiv.appendChild(createSeatDropdown);


    //Reservations

    let createReservationsForm = document.createElement("form");

    let reservationName = document.createElement("input");

    reservationName.type = "number";
    reservationName.placeholder = "Type the max seats here..";
    reservationName.id = "reservationId";

    restaurantDiv.appendChild(reservationName);

    //Description

    let createDescriptionForm = document.createElement("form");


    let descriptionName = document.createElement("input");
    descriptionName.type = "text";
    descriptionName.placeholder = "Placér en beskrivelse her";
    descriptionName.id = "descriptionId";

    //createDescriptionForm.appendChild(descriptionName);
    restaurantDiv.appendChild(descriptionName);





}

