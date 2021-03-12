import {people} from "./data.js";
'use strict';

// Table rows for table data begins at tr[1] ///

function populateData(row) {
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].firstName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].lastName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].dob;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].gender;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].occupation;
};

function displayData() {
    for (let i = 0; i < 22; i++){
        populateData(i);
    }
};

displayData();




