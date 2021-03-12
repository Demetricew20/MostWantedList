import {people} from "./data.js";
'use strict';


console.log(people);
console.log(document.getElementsByTagName('tr')[0].getElementsByTagName('td')[0]);

// Table rows for table data begins at tr[1] ///

function populateData(row) {
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[0].innerHTML = people[row].firstName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[1].innerHTML = people[row].lastName;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[2].innerHTML = people[row].dob;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[3].innerHTML = people[row].gender;
    document.getElementsByTagName('tr')[row+1].getElementsByTagName('td')[4].innerHTML = people[row].occupation;
};

function displayData() {
    populateData(0);
    populateData(1);
    populateData(2);
    populateData(3);
    populateData(4);
    populateData(5);
    populateData(6);
    populateData(7);
    populateData(8);
    populateData(9);
    populateData(10);
    populateData(11);
    populateData(12);
    populateData(13);
    populateData(14);
    populateData(15);
    populateData(16);
    populateData(17);
    populateData(18);
    populateData(19);
    populateData(20);
    populateData(21);
};

displayData();





