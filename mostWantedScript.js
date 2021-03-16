'use strict';

// -------
// Helper Function: Build family row
function buildRow(rowTypeString, id, currRow, tableBody) {
    let tempRow = rowTypeString;
    let tempPerson = rtvPeopleByID(id);
    tempRow = tempRow + tempPerson[1] + ' ' + tempPerson[2];

    let newRow = tableBody.insertRow(currRow);
    // newRow.insertCell(0)
    let someEl = newRow.insertCell(0);
    someEl = newRow.insertCell(1);
    someEl.innerText = tempRow
    // document.getElementsByTagName('tr')[currRow].getElementsByTagName('td')[1].innerHTML = tempRow
}

// ----- Load Table with incoming data as a parameter -------
function loadTable(someArray) {
    let currentRow = 0;
    let tableBody = document.getElementById('tableBody');
    let tableHeaders = document.getElementsByTagName('th');
    // let row = tableBody.insertRow(currentRow-1)
    for (let i = 0; i < someArray.length; i++) {
        // add row
        let tempArray = [someArray[i].id,
            someArray[i].firstName,
            someArray[i].lastName,
            someArray[i].dob,
            someArray[i].gender,
            someArray[i].eyeColor,
            someArray[i].occupation]

        let row = tableBody.insertRow(currentRow)
        // build cells
        for (let j = 0; j < tableHeaders.length; j++) {
            let someEl = row.insertCell(j);
            someEl.innerText = tempArray[j]
        }

          // Add photo button here

            // Add Spouse
            if (someArray[i].currentSpouse) {
                currentRow++;
                buildRow("Spouse: ", someArray[i].currentSpouse, currentRow, tableBody)
            }

            // Add Parents
            if (someArray[i].parents.length > 0) {
                for (let j = 0; j < someArray[i].parents.length; j++) {
                    currentRow++;
                    buildRow("Parent: ", someArray[i].parents[j],currentRow,tableBody)
                }
            }

            currentRow++;
        }

    }

// ------ Clear Table rows for reload of data (used after filter has been applied)
function deleteTable() {
    let tableHeaderRowCount = 1;
    let table = document.getElementById("mostWantedTable");
    let rowCount = table.rows.length;
    for ( let i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}


// Function Calls //
window.onload = loadTable(people)