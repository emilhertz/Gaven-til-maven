

//let res1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");

function bookingRestaurant(restaurant) {
    let newRestaurantString = `Bookning til følgende restaurant: ${restaurant.name}, ${restaurant.address.getAddress()}`;
    let bookingDiv = document.getElementById("bookingForm");
    let restaurantParagraph = document.createElement("p");
    restaurantParagraph.appendChild(document.createTextNode(newRestaurantString));
    bookingDiv.appendChild(restaurantParagraph);

    let bookingForm = document.createElement("form");

    let pax = document.createElement("select");
    pax.id = "pax"

    for (let i=0; i<restaurant.seats; i++){
        let seats = document.createElement("option");
        seats.innerHTML = `${i+1} person(er)`;
        seats.value = i+1;
        pax.appendChild(seats);
    };

       bookingForm.appendChild(pax);
    bookingDiv.appendChild(bookingForm);


}
