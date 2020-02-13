

//let res1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");

function bookingRestaurant(restaurant) {
    let newRestaurantString = `Bookning til følgende restaurant: ${restaurant.name}, ${restaurant.address.getAddress()}`;
    let bookingForm = document.getElementById("bookingForm");
    let restaurantParagraph = document.createElement("p");
    restaurantParagraph.appendChild(document.createTextNode(newRestaurantString));
    bookingForm.appendChild(restaurantParagraph);

}
