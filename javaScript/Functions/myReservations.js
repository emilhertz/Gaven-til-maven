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




buildTable(loggedInReservations);

function buildTable(reservations) {
    let table = document.createElement("table");
    //keys which displays all of the different restaurant key's
    let keys = Object.keys(reservations[0]);
    //row for keys
    let headRow = document.createElement("tr");
    //every header is appended to a cell in the head row
    keys.forEach(function(header) {
        let headCell = document.createElement("th");
        //key from keys-array is first converted to a text-node and then appended to head-table row
        headCell.appendChild(document.createTextNode(header));
        headRow.appendChild(headCell);
    });
    //headrow with all the restaurant keys is appended to the main table
    table.appendChild(headRow);

    //runs through all the different restaurants in the database, and creates individual rows
    reservations.forEach(function(restaurant) {
        let row = document.createElement("tr");
        //runs through all the properties of the current restaurant and creates cells
        keys.forEach(function(key) {
            let cell; //Cell variable is created in the correct scope
            if(key === "Afmeld") {
                cell = document.createElement("button");
                cell.innerHTML = key;
                cell.onclick = AfmeldReservations;




            } else {
                cell = document.createElement("td");
                cell.appendChild(document.createTextNode(restaurant[key]))
            }
            //table cell (td) is appended to a table row
            row.appendChild(cell);
        });
        table.appendChild(row)
    });
    return table;
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