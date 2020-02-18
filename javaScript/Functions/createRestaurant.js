function createRestaurant() {

    //Firstly we assign "createRestaurants" and "form" to variables
    let restaurantDiv = document.getElementById("createRestaurant");
    let form = document.createElement("form");
    let br = document.createElement("br");

    //Here we create a new input and manipulate the DOM-structure.
    // Afterwards we assign type, placeholder and id to the input.
    let restaurantName = document.createElement("input");
    restaurantName.type = "text";
    restaurantName.placeholder = "Restaurant Navn";
    restaurantName.id = "restaurantId";

    //We call the function
    form.appendChild(restaurantName);
    form.appendChild(br);


    //Adress

    //Menu

    //Seats --> Dropdown
    let createSeatDropdown = document.createElement("select");
    let seatName = document.createElement("option");

    seatName.type = "text";
    seatName.id = "myDropdownList";

    form.appendChild(createSeatDropdown);
    form.appendChild(br);


    //Reservations
    let reservationName = document.createElement("input");

    reservationName.type = "number";
    reservationName.placeholder = "Type the max seats here..";
    reservationName.id = "reservationId";

    form.appendChild(reservationName);
    form.appendChild(br);

    //Description
    let descriptionName = document.createElement("input");

    descriptionName.type = "text";
    descriptionName.placeholder = "Placér en beskrivelse her";
    descriptionName.id = "descriptionId";

    form.appendChild(descriptionName);
    form.appendChild(br);


    restaurantDiv.appendChild(form);

}
