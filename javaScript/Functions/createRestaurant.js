//function that creates a dynamic table that displays an admins restaurant

//logic....

//function that creates the create restaurant form
let createRestaurant = ()=> {
    //Firstly we assign "createRestaurants" and "form" to variables
    let restaurantDiv = document.getElementById("createRestaurant");
    let form = document.createElement("form");
    let br = document.createElement("br");
    let restaurantParagraph1 = document.createElement("p");
    let restaurantTextNode = "Restaurant: ";

    //Here we create a new input and manipulate the DOM-structure.
    // Afterwards we assign type, placeholder and id to the input.
    let restaurantName = document.createElement("input");
    restaurantName.type = "text";
    restaurantName.placeholder = "Restaurant Navn";
    restaurantName.id = "restaurantId";

    //We call the function
    restaurantParagraph1.appendChild(document.createTextNode(restaurantTextNode));
    form.appendChild(restaurantParagraph1);
    form.appendChild(restaurantName);
    form.appendChild(br);

    //Adress

    //Menu

    //Seats --> Dropdown
    let createSeatDropdown = document.createElement("select");
    let seatNumber = document.createElement("option");
    let seatNumber2 = document.createElement("option");
    let seatNumber3 = document.createElement("option");
    let pladser = document.createElement("p");
    let pladsTextNode = "Antal gæster: ";

    createSeatDropdown.type = "text";
    createSeatDropdown.id = "myDropdownList";

    seatNumber.text = 1;
    seatNumber2.text = 2;
    seatNumber3.text = 3;

    createSeatDropdown.add(seatNumber);
    createSeatDropdown.add(seatNumber2);
    createSeatDropdown.add(seatNumber3);

    pladser.appendChild(document.createTextNode(pladsTextNode));
    form.appendChild(pladser);
    form.appendChild(createSeatDropdown);
    //Uses the "cloneNode()" to clone the break line.
    form.appendChild(br.cloneNode());


    //Reservations
    let reservationName = document.createElement("input");
    let maxGuests = document.createElement("p");
    let maxGuestsText = "Max antal gæster: ";

    reservationName.type = "number";
    reservationName.placeholder = "Type the max seats here..";
    reservationName.id = "reservationId";

    maxGuests.appendChild(document.createTextNode(maxGuestsText));
    form.appendChild(maxGuests);
    form.appendChild(reservationName);
    //Uses the "cloneNode()" to clone the break line.
    form.appendChild(br.cloneNode());

    //Description
    let descriptionName = document.createElement("input");
    let description = document.createElement("p");
    let descriptionText = "Kort beskrivelse af restauranten";

    descriptionName.type = "text";
    descriptionName.placeholder = "Placér en beskrivelse her";
    descriptionName.id = "descriptionId";


    description.appendChild(document.createTextNode(descriptionText));
    form.appendChild(description);
    form.appendChild(descriptionName);

    restaurantDiv.appendChild(form);

};