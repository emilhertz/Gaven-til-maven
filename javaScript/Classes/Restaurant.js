//Restaurant-klasse
class Restaurant{
    constructor(id, name, address, menu, tables, reservations, description) {
        this.id = id;
        this.name = name;
        this.address = address; //klasseindstands af addresse-klassen
        this.menu = []; //array med product-indstandser?
        this.tables = []; //samme som foroven?
        this.reservations = reservations;
        this.description = description;
    }
    addReservation(){
        //logik
    }
}