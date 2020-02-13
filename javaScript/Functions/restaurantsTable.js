//example restaurant initialized
let res1 = new Restaurant(1,"noma", new Address(1, "Refshalevej", 96,1432,"København K", "Danmark"), [],10,[],"Fin restaurant:)");
let res2 = new Restaurant(2, "Geranium", new Address(2, "Per Henrik Lings Allé", 4, 2100, "København", "Danmark"),[],20,[],"Også en fin restaurant:)");
let res3 = new Restaurant(3,"Sheik Shawarma Halal", new Address(3, "Nørrebrogade", 98, 2200,"København", "Danmark"),[],30,[],"MEGET fin restaurant:)");

//Pushing the
let test1 = [res1.tabelPrep(), res2.tabelPrep(), res3.tabelPrep()];

// Table borrowed from eloquent javaScript - Overview of the restaurants.

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
            let cell; //Cell variable is created in the correct scope
            if(key === "Book") {
                cell = document.createElement("button");
                cell.innerHTML = key;
                cell.onclick = function(){
                    console.log(restaurant.Book);
                }
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

document.getElementById("restaurants").appendChild(buildTable(test1));