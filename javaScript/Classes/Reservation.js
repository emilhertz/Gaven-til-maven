class Reservation {
    constructor(id, timeInterval, customer, pax, comments){
        this.id = id;
        this.timeInterval = timeInterval;
        this.customer = customer;
        this.pax = pax;
        this.comments = comments;
    }
    reservationPrep(){
        return{

            Tidspunkt: this.timeInterval,
            Antal: this.pax,
            Kommentarer: this.comments,
            Afmeld: this


        }
    };
}