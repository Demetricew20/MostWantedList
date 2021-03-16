'use strict';

// -------
// Helper Function: Build family row
function buildRow(rowTypeString, id, currRow, tableHeaders, tableBody) {
    let tempRow = rowTypeString;
    let tempPerson = rtvPeopleByID(id);
    tempRow = tempRow + tempPerson[1] + ' ' + tempPerson[2];

    let newRow = tableBody.insertRow(currRow);
    // newRow.insertCell(0)
    let someEl = newRow.insertCell(0);
    someEl = newRow.insertCell(1);
    someEl.innerText = tempRow
    for (let i = 2; i < tableHeaders.length; i++) {
        someEl = newRow.insertCell(i);
    }
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
        for (let j = 0; j < tableHeaders.length-1; j++) {
            let someEl = row.insertCell(j);
            someEl.innerText = tempArray[j]
        }

        // ****** Add photos for each person in table ****** ///
        let photos = row.insertCell(tableHeaders.length - 1)
        let photoHtml = "no-img.png"
        if (someArray[i].photo) {
            photoHtml = someArray[i].photo
        }
        photos.innerHTML = '<img id="photo" src="./images/' + photoHtml +
                            '" width="45" height="50" alt="person photo" />';
        // photos.innerHTML = '<button id="photo">Photo</button>';
        // photos.addEventListener('click', function(){
        //     if (photos.innerHTML == '<button id="photo">Photo</button>')
        //     {
        //         photos.innerHTML = '<img id="photo" src="https://picsum.photos/50/50" alt="Random Photo" />';
        //     }
        //     else
        //     {
        //         photos.innerHTML = '<button id="photo">Photo</button>';
        //     }
        // });

        // Add Spouse
        if (someArray[i].currentSpouse) {
            currentRow++;
            buildRow("Spouse: ", someArray[i].currentSpouse, currentRow, tableHeaders, tableBody)
        }

        // Add Parents
        if (someArray[i].parents.length > 0) {
            for (let j = 0; j < someArray[i].parents.length; j++) {
                currentRow++;
                buildRow("Parent: ", someArray[i].parents[j],currentRow, tableHeaders, tableBody)
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