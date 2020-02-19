//function that creates a dynamic table that displays an admins restaurant
//example restaurant initialized, of which all belongs to admin
let resA1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");
let resA2 = new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],20,[],"Også en fin restaurant:)");
let resA3 = new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],30,[],"MEGET fin restaurant:)");

//array with example restaurants
let adminRes = [];

adminRes.push(resA1.tabelPrepAdmin(), resA2.tabelPrepAdmin(), resA3.tabelPrepAdmin());


//table is appended to the document
document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));



//function that creates the create restaurant form
/*
createRestaurant = () => {
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
 */