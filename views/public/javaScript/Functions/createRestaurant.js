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
    restaurantStreetName.id = "StreetNameId";
    let restaurantStreetNumber = document.createElement("input");
    restaurantStreetNumber.type = "number";
    restaurantStreetNumber.placeholder = "69";
    restaurantStreetNumber.id = "StreetNumberId";
    let restaurantZipCode = document.createElement("input");
    restaurantZipCode.type = "number";
    restaurantZipCode.placeholder = "0000";
    restaurantZipCode.id = "ZipCodeId";
    let restaurantCity = document.createElement("input");
    restaurantCity.type = "text";
    restaurantCity.placeholder = "Examplecity";
    restaurantCity.id = "CityId";
    let restaurantCountry = document.createElement("input");
    restaurantCountry.type = "text";
    restaurantCountry.placeholder = "ExampleCountry";
    restaurantCountry.id = "CountryId";

    let restaurantAddressText = document.createElement("p");
    let restaurantAddressTextNode = "Adresseoplysninger";

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





    //Uses the "cloneNode()" to clone the break line.
    form.appendChild(br.cloneNode());

    //Description
    let descriptionName = document.createElement("textarea");
    descriptionName.id = "descriptionNameId";
    let description = document.createElement("p");
    description.id = "descriptionId";
    let descriptionText = "Andre kommentarer kan skrives nedenfor";
    descriptionText.id = "descriptionTextId";

    descriptionName.rows = "5";
    descriptionName.placeholder = "Eventuelle kommentarer";

    description.appendChild(document.createTextNode(descriptionText));
    form.appendChild(description);
    form.appendChild(descriptionName);
    form.appendChild(br.cloneNode());

    //Using the DOM to create a submit button for the storeRestaurant function.
    let submitButton = document.createElement("button");
    submitButton.id = "submitButtonId";
    submitButton.innerHTML = "Opret Restaurant";
    submitButton.onclick = storeRestaurant();
    form.appendChild(submitButton);

restaurantDiv.appendChild(form);

};

//
createRestaurant();

// Hele storeRestaurant.
async function storeRestaurant() {
    //Navigating to inputs and saving them to variables
    const restaurantId = document.getElementById("restaurantId");
    const StreetNameId = document.getElementById("StreetNameId");
    const StreetNumberId = document.getElementById("StreetNumberId");
    const ZipCodeId = document.getElementById("ZipCodeId");
    const CityId = document.getElementById("CityId");
    const CountryId = document.getElementById("CountryId");
    const myDropdownList = document.getElementById("myDropdownListId");
    const reservationId = document.getElementById("reservationId");
    const descriptionTextId= document.getElementById("descriptionTextId");

    //Defining req.body content
    const data = {
        name: restaurantId.value,
        address: {
            streetName: StreetNameId.value ,

            streetNumber: StreetNumberId.value,

            zipCode: ZipCodeId.value,

            city: CityId.value,

            country: CountryId.value
        },

        description: descriptionTextId.value,

        adminId: "5e71f50a3e37f17e53a92ca7"

    };

    //Defining request options
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    //Request that saves respond in variable
    const res = await fetch('http://localhost:4000/restaurant/create', options)
    //Procedure if no error
        .then((response)=>{return response.json()})
        //Procedure if fetch error (e.g. API not reachable)
        .catch((e)=>{return console.log(e)});

    if(res.created === true){
        alert("Bruger oprettet!");
        window.open("login.html", "_self");
    } else {
        alert(`${res.errors}`);
    }
}
