
var reservation1 = new Reservation(1, 14.00, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 5, "4 flasker Möet til bordet");













/*
window.onload = function (myReservation) {

    document.getElementById("idReservation1").innerHTML = "Reservationens id-nummer: "+ reservation1.id;
    document.getElementById("timeInterval1").innerHTML = "Time interval: " + reservation1.timeInterval;
    document.getElementById("customer1").innerHTML = "Kundenavn: " + reservation1.customer;
    document.getElementById("pax1").innerHTML = "pax: " + reservation1.pax;
    document.getElementById("comments1").innerHTML = "Kommentarer: " + reservation1.comments;

};
*/
console.log(reservation1.customer.id);