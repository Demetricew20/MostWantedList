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
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].id;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].firstName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].lastName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].dob;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].gender;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[5].innerHTML = people[row].eyeColor;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[6].innerHTML = people[row].occupation;

    // ****** Add photos for each person in table ****** ///
    let photos = document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[7];
    photos.innerHTML = '<button id="photo">Photo</button>';
    photos.addEventListener('click', function(){

        if (photos.innerHTML == '<button id="photo">Photo</button>')
        {
            photos.innerHTML = '<img id="photo" src="https://picsum.photos/100/100" alt="Random Photo" />';
        }
        else
        {
            photos.innerHTML = '<button id="photo">Photo</button>';
        }
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

