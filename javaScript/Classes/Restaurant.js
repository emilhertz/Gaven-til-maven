//Restaurant-klasse
class Restaurant{
    constructor(id, name, address, menu, seats, reservations, description, openingHours) {
        this.id = id;
        this.name = name;
        this.address = address; //klasseindstands af addresse-klassen
        this.menu = menu; //array med product-indstandser?
        this.seats = seats; //samme som foroven?
        this.reservations = reservations;
        this.description = description;
        this.openingHours = openingHours;
    }
    addReservation(){
        //logik
    }
    //burde der ikke kunne tages højde for dette i selve tabellen?
    //ellers skal vi have flere versioner af denne metode for de forskellige tabeller
    tabelPrep(){
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            Siddepladser: this.seats,
            //This returns the current restaurant-instance
            Book: this
        }
    };
    tabelPrepAdmin() {
        return {
            Navn: this.name,
            Beskrivelse: this.description,
            Adresse: this.address.getAddress(),
            Siddepladser: this.seats,
            //This returns the current restaurant-instance
            Rediger: this
        }
    }
}

