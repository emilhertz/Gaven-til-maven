/*
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
        name: reservationId.value,
        address: {
            streetName: StreetNameId.value ,

            streetNumber: StreetNumberId.value,

            zipCode: ZipCodeId.value,

            city: CityId.value,

            country: CountryId.value
        }

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


 */