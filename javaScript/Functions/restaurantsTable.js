// Table borrowed from eloquent javaScript - Overview of the restaurants.

let test1 = [];

//example restaurant initialized
test1.push(new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],[new Table(1, 4), new Table(2, 4), new Table(2, 4)],[],"Fin restaurant:)"));
test1.push(new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],[new Table(4, 4),new Table(5, 4),new Table(6, 4)],[],"Også en fin restaurant:)"));
test1.push(new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],[new Table(7, 4),new Table(8, 4),new Table(9, 4)],[],"MEGET fin restaurant:)"));


//function which creates a html-table in which restaturants are displayed
function buildTable(restaurants) {
    let table = document.createElement("table");
    //keys which displays all of the different restaurant key's
    let keys = Object.keys(restaurants[0]);
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
    restaurants.forEach(function(restaurant) {
        let row = document.createElement("tr");
        //runs through all the properties of the current restaurant and creates cells
        keys.forEach(function(key) {
            let cell = document.createElement("td");
            //the value of the given restaurant property is appended to an individual cell
            cell.appendChild(document.createTextNode(restaurant[key]));
            //table cell (td) is appended to a table row
            row.appendChild(cell);
        });
        table.appendChild(row)
    });
    return table;
}

document.getElementById("restaurants").appendChild(buildTable(test1));