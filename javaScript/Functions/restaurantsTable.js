// Table borrowed from eloquent javaScript - Overview of the restaurants.

let test1 = [];

test1.push(new Restaurant(1,"noma", "test", "test","test","test","Fin restaurant:)"));

function buildTable(restaurants) {
    let table = document.createElement("table");

    let fields = Object.keys(restaurants[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode(field));
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    restaurants.forEach(function(object) {
        let row = document.createElement("tr");
        fields.forEach(function(field) {
            let cell = document.createElement("td");
            cell.appendChild(document.createTextNode(object[field]));
            if (typeof object[field] == "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;
}

document.getElementById("restaurants").appendChild(buildTable(test1));