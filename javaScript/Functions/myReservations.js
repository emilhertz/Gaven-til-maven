var loggedInUser1 = new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com")


var reservation1 = new Reservation(1, 14.00, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 4, "4 flasker Möet til bordet");

var reservation2 = new Reservation(2, 17.00, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 8, "2 flasker Möet til bordet");

var reservation3 = new Reservation(3, 18.30, new User(1,"Peter","Kanin","Rabbithole", "1234", "playboy@gmail.com"), 9, "9 flasker Möet til bordet");

var reservation4 = new Reservation(4, 20.00, new User(2,"Emil","Trækkerdreng","Grindrboi", "<=3", "hola@gmail.com"), 6,"Ingen Möet");
//Array med alle samlede reservationer.
var reservationsArr = [];

reservationsArr.push(reservation1.reservationPrep());
reservationsArr.push(reservation2.reservationPrep());
reservationsArr.push(reservation3.reservationPrep());
reservationsArr.push(reservation4.reservationPrep());

//Array med reservationer for brugeren som er logget ind.
var loggedInReservations = [];

for (i=0; i < reservationsArr.length; i++ ){
    if (loggedInUser1.id == reservationsArr[i].Afmeld.customer.id){
        loggedInReservations.push(reservationsArr[i]);
    }
};

function AfmeldReservations() {
    alert("Reservationen er afmeldt");
}

//table is appended to the document
document.getElementById("reservations").appendChild(buildTable(loggedInReservations));









/*




window.onload = function (myReservation) {

    document.getElementById("idReservation1").innerHTML = "Reservationens id-nummer: "+ reservation1.id;
    document.getElementById("timeInterval1").innerHTML = "Time interval: " + reservation1.timeInterval;
    document.getElementById("customer1").innerHTML = "Kundenavn: " + reservation1.customer;
    document.getElementById("pax1").innerHTML = "pax: " + reservation1.pax;
    document.getElementById("comments1").innerHTML = "Kommentarer: " + reservation1.comments;

};

console.log(reservation1.customer.id);



 */