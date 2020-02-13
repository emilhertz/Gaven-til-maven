//Restaurant-klasse
class Restaurant{
    constructor(id, name, address, menu, seats, reservations, description) {
        this.id = id;
        this.name = name;
        this.address = address; //klasseindstands af addresse-klassen
        this.menu = menu; //array med product-indstandser?
        this.seats = seats; //samme som foroven?
        this.reservations = reservations;
        this.description = description;
    }
    addReservation(){
        //logik
    }
    tabelPrep(){
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            Siddepladser: this.seats,
            //This returns the currents instance
            Book: this
        }
    };
}

