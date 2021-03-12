'use strict';

// ----- Search function -----
async function searchByParms(someArray){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = someArray[0];
    let lastNameInput = someArray[1];

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = await people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one with that search criteria.');
        console.log('Sorry, looks like there is no one with that search criteria.');
    }
};


// ----- Form validation ----- //
function validateAndSearchForm() {
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fName'].value;
    let lastNameInput = document.forms['nameForm']['lName'].value;

    let tempArray = [];

    // Check for a minium of at least 1 required variable
    // build temp array of search variables
    if (firstNameInput !== "") {
        tempArray.push(firstNameInput)
    }
    if (lastNameInput !== "") {
        tempArray.push(lastNameInput)
    }
    if (field2 !== "") {
        tempArray.push(field2)
    }
    if (field3 !== "") {
        tempArray.push(field3)
    }

    if (tempArray.length = 0) {
        alert('You must enter an option in at least one search field.');
        console.log('You must enter an option in at least one search field.');
        return false
    } else {
        searchByParms(tempArray); // async function call
        return true
    }
};
