//function that creates a dynamic table that displays an admins restaurant
//example restaurant initialized, of which all belongs to admin
let resA1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");
let resA2 = new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],20,[],"Også en fin restaurant:)");
let resA3 = new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],30,[],"MEGET fin restaurant:)");

//array with example restaurants
let adminRes = [];

adminRes.push(resA1.tablePrepAdmin(), resA2.tablePrepAdmin(), resA3.tablePrepAdmin());


//table is appended to the document
document.getElementById("adminRestaurants").appendChild(buildTable(adminRes));



//function that creates the create restaurant form
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
    //Firstly we create all the restaurant inputs and assign it a "type" and "placeholder".
    let restaurantStreetName = document.createElement("Input");
    restaurantStreetName.type = "text";
    restaurantStreetName.placeholder = "Eksempelgade";
    let restaurantStreetNumber = document.createElement("input");
    restaurantStreetNumber.type = "number";
    restaurantStreetNumber.placeholder = "69";
    let restaurantZipCode = document.createElement("input");
    restaurantZipCode.type = "number";
    restaurantZipCode.placeholder = "0000";
    let restaurantCity = document.createElement("input");
    restaurantCity.type = "text";
    restaurantCity.placeholder = "Examplecity";
    let restaurantCountry = document.createElement("input");
    restaurantCountry.type = "text";
    restaurantCountry.placeholder = "ExampleCountry";

    let restaurantAddressText = document.createElement("p");
    let restaurantAddressTextNode = "Adresseoplysninger";


    new Address(0, restaurantStreetName.value, restaurantStreetNumber.value, restaurantZipCode.value, restaurantCity.value, restaurantCountry.value);

    restaurantAddressText.appendChild(document.createTextNode(restaurantAddressTextNode));
    form.appendChild(restaurantAddressText);

    form.appendChild(restaurantStreetName);
    form.appendChild(restaurantStreetNumber);
    form.appendChild(restaurantZipCode);
    form.appendChild(restaurantCity);
    form.appendChild(restaurantCountry);

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
    let descriptionName = document.createElement("textarea");
    let description = document.createElement("p");
    let descriptionText = "Andre kommentarer kan skrives nedenfor";

    descriptionName.rows = "5";
    descriptionName.placeholder = "Eventuelle kommentarer";

    description.appendChild(document.createTextNode(descriptionText));
    form.appendChild(description);
    form.appendChild(descriptionName);
    form.appendChild(br.cloneNode());

restaurantDiv.appendChild(form);

};
