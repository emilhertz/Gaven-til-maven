//Dummy opening hours:
let openingTime = "12:00";
let closingTime = "23:00";


function bookingRestaurant(restaurant){
    // Navigates to the div where the form is made
    let bookingDiv = document.getElementById("bookingForm");

    // CREATING PARAGRAPH ABOUT THE CHOSEN RESTAURANT:
    // Creating a new paragraph
    let restaurantParagraph = document.createElement("p");
    // Creating a string for the paragraph
    let restaurantString = `Bookning til følgende restaurant: ${restaurant.name}, ${restaurant.address.getAddress()}`;
    // Turning restaurantString into a text node and appending it to the paragraph
    restaurantParagraph.appendChild(document.createTextNode(restaurantString));
    bookingDiv.appendChild(restaurantParagraph);

    // CREATING PARAGRAPH ABOUT THE OPENING HOURS:
    // Creating a new paragraph
    let openingHoursParagraph = document.createElement("p");
    // Creating a string for the paragraph
    let openingHoursString = `Restauranten åbner kl. ${openingTime} og lukker kl. ${closingTime}`;
    // Turning openingHoursString into a text node and appending it to the paragraph
    openingHoursParagraph.appendChild(document.createTextNode(openingHoursString));
    bookingDiv.appendChild(openingHoursParagraph);


    // CREATING THE BACK BUTTON:
    // Creating a new button
    let backButton = document.createElement("button");
    // Adding text to the button
    backButton.innerHTML = "Tilbage";
    // Creating button function
    backButton.onclick = function(){
        //The div that contains the form is cleared
        bookingDiv.innerHTML = "";
        //The tabel showing all the restaurant is made visible
        document.getElementById("restaurants").style.display = "block";
    };
    //The button is added to the div containing the form
    bookingDiv.appendChild(backButton);


    // CREATING THE FORM:
    // The form is created
    let bookingForm = document.createElement("form");

    // Creating selector
    let pax = document.createElement("select");
    // Giving the selector an id
    pax.id = "pax";

    // Adding options that can be selected:
    // Looping the same amount of times as there are seats in the restaurant
    for (let i=0; i<restaurant.seats; i++){
        // Creating an option
        let seats = document.createElement("option");
        // Adding text to the option
        seats.innerHTML = `${i+1} person(er)`;
        // Adding a value to the option
        seats.value = i+1;
        // Appending the option to the selector
        pax.appendChild(seats);
    }
    // Appending the selector to the form
    bookingForm.appendChild(pax);

    // Creating start time selector:
    let startTime = document.createElement("input");
    startTime.type = "time";
    startTime.id = "startTime";
    startTime.onblur = function(){
      if(startTime.value < openingTime){
          startTime.value = "";
          endTime.value = "";
          alert(`${restaurant.name} åbner først kl. ${openingTime}`);
      } else if (startTime.value === endTime.value){
          alert("Start- og tidspunkt kan ikke være ens")
      }
    };

    let endTime = document.createElement("input");
    endTime.type = "time";
    endTime.id = "endTime";
    endTime.onblur = function() {
        if (closingTime < openingTime && endTime.value > closingTime || closingTime > openingTime && closingTime < endTime.value) {
            alert(`${restaurant.name} lukker kl. ${closingTime}`);
            endTime.value = "";
        } else if (closingTime > openingTime && endTime.value < openingTime){
            alert(`${restaurant.name} åbner først kl. ${openingTime}`);
            endTime.value = "";
        } else if (startTime.value === endTime.value){
            alert("Start- og tidspunkt kan ikke være ens")
        }
    };

    bookingForm.appendChild(startTime);
    bookingForm.appendChild(endTime);

    let date = document.createElement("input");
    date.type = "date";
    bookingForm.appendChild(date);
    bookingDiv.appendChild(bookingForm);2
}
