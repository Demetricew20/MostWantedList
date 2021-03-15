'use strict';

function testDataRtv() {
    for (let i = 0; i < people.length; i++) {
        let testData = rtvPeopleByID(people[i].id)
        console.log(testData)
    }
}

// ----- RTV People by ID ------ //
function rtvPeopleByID(personID) {
    var personArray = [];

    if (personID === "") {
        console.log("Error: Missing person ID");
        return personArray
    }

    // Switched from "filter" to "find" -
    // Filter will iterate over entire database, find will stop after first valid occurance
    people.find(function (person) {
        if (personID === person.id) {
            personArray = Object.values(person);
            console.log("Person Array:", personArray)
            return personArray
            // The next line will NOT pass back the array. Suspect that it has to do with the "Object.values' function written as inline expression
            // return personArray = Object.values(person)
        }
    })
}

// ----- RTV People by Search params ----- //
async function searchByParms(someArray) {
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = someArray[0];
    let lastNameInput = someArray[1];
    let genderInput = someArray[2];
    let eyeColorInput = someArray[3];
    let occupationInput = someArray[4];


    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = await people.filter(function (person) {
        if (firstNameInput !== "" && person.firstName !== firstNameInput) {
            return false
        } else if (lastNameInput !== "" && person.lastName !== lastNameInput) {
            return false
        } else if (genderInput !== "" && person.gender !== genderInput) {
            return false
        } else if (eyeColorInput !== "" && person.eyeColor !== eyeColorInput) {
            return false
        } else if (occupationInput !== "" && person.occupation !== occupationInput) {
            return false
        }
        return true

    }
    );

    // Rather than console logging, you need to append the filteredPeople to a table.
    if (filteredPeople.length > 0) {
        console.log(filteredPeople);
    } else {
        alert('Sorry, looks like there is no one with that search criteria.');
        console.log('Sorry, looks like there is no one with that search criteria.');
    }
};


// ----- Form validation ----- //
function validateAndSearchForm() {
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fName'].value;
    let lastNameInput = document.forms['nameForm']['lName'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;

    let tempArray = ['','','','',''];

    // Check for a minium of at least 1 required variable
    // build temp array of search variables
    if (firstNameInput !== "") {
        tempArray[0] =firstNameInput
    }
    if (lastNameInput !== "") {
        tempArray[1] = lastNameInput
    }
    if (genderInput !== "") {
        tempArray[2] = genderInput
    }
    // Check for translation or valid values here ...
    if (eyeColorInput !== "") {
        tempArray[3] = eyeColorInput.lowerCase()
    }
    if (occupationInput !== "") {
        tempArray[4] = occupationInput
    }

    console.log("TempArray:", tempArray)
    if (tempArray.length === 0) {
        alert('You must enter an option in at least one search field.');
        console.log('You must enter an option in at least one search field.');
        return false
    } else {
        console.log("TempArray:", tempArray)
        searchByParms(tempArray); // async function call
        return true
    }
};
