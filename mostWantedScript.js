'use strict';

// const _ = require('./data.js');

//// Table rows for table data begins at tr[1] ///

// function populateData(row) {
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].firstName;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].lastName;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].dob;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].eyeColor;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].gender;
//     document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[5].innerHTML = people[row].occupation;
// };



// function displayData() {
//     // Changed 21 lines of function calls to this for loop: CRM 3/12/21
//     for (let i = 0; i < 22; i++) {
//         populateData(i)
//     }
// };

// displayData();

//// Table rows for table data begins at tr[1] ///

function populateData(row)
{
    let firstColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].id;
    let secondColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].firstName;
    let thirdColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].lastName;
    let fourthColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].dob;
    let fifthColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].gender;
    let sixthColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[5].innerHTML = people[row].eyeColor;
    let seventhColumn = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[6].innerHTML = people[row].occupation;

    // ****** Add photos for each person in table ****** ///
    let photos = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[7].innerHTML = '<button id="photo">Photo</button>';
    let showPhoto = document.getElementById('photo').addEventListener('click', function(){
        document.getElementById('photo').innerHTML = '<img src="https://picsum.photos/200/300" alt="Random Photo" />';
    });

};

// ----Adds td and tr tags in tbody of mostWantedTable---- //
function addElement () {

    let tableBody = document.getElementById('tableBody');
    let tableHeaders = document.getElementsByTagName('th');

    // Create Rows using array of people length //
    for (let i = 0; i < people.length; i++)
    {
        let row = tableBody.insertRow(0);
        // Create cells for columns of criteria (first,last,....etc)
        for (let i = 0; i < tableHeaders.length; i++)
        {
            row.insertCell(i);
        };
    };

    function insertData()
    {
        for (let i = 0; i < people.length; i++) {
            populateData(i)
        }
    };

    insertData();

};

// Function Calls //
// testDataRtv(); // Testing Routing only
window.onload = addElement();
// insertData();

