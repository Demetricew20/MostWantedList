'use strict';

// function populateData(row)
// {

//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].id;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].firstName;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].lastName;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].dob;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].gender;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[5].innerHTML = people[row].eyeColor;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[6].innerHTML = people[row].occupation;

//     // ****** Add photos for each person in table ****** ///
//     let photos = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[7];
//     photos.innerHTML = '<button id="photo">Photo</button>';
//     photos.addEventListener('click', function(){

//         if (photos.innerHTML == '<button id="photo">Photo</button>')
//         {
//             photos.innerHTML = '<img id="photo" src="https://picsum.photos/100/100" alt="Random Photo" />';
//         }
//         else
//         {
//             photos.innerHTML = '<button id="photo">Photo</button>';
//         }
//     });

// };

// // ----Adds td and tr tags in the body of mostWantedTable---- //
// function addElement() {

//     let tableBody = document.getElementById('tableBody');
//     let tableHeaders = document.getElementsByTagName('th');

//     // Create Rows using array of people length //
//     for (let i = 0; i < people.length; i++) {
//         let row = tableBody.insertRow(0);
//         // Create cells for columns of criteria (first,last,....etc)
//         for (let i = 0; i < tableHeaders.length; i++) {
//             row.insertCell(i);
//         };
//     };

//     function insertData() {
//         for (let i = 0; i < people.length; i++) {
//             populateData(i)
//         }
//     };

//     insertData();

// };


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

function deleteTable() {
    let delTable = document.getElementById("mostWantedTable");
    delTable.innerHTML = "";
}


// Function Calls //
// testDataRtv(); // Testing Routing only
// window.onload = addElement();
window.onload = loadTable(people);
// insertData();

