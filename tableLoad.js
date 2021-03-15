// Helper Function: Build family row
function buildRow(rowTypeString, id, currRow, tableBody) {
    let tempRow = rowTypeString;
    let tempPerson = rtvPeopleByID(id);
    tempRow = tempRow + tempPerson[0] + ' ' + tempPerson[1];
    let row = tableBody.insertRow(currRow);
    row.insertCell(1)
    row.insertCell(2)
    document.getElementsByTagName('tr')[currRow].getElementsByTagName('td')[1].innerHTML = tempRow
}

function loadTable(someArray) {
    let currentRow = 0
    let tableBody = document.getElementById('tableBody');
    let tableHeaders = document.getElementsByTagName('th');

    for (let i = 0; i < someArray.length; i++) {
        // add row
        let row = tableBody.insertRow(currentRow)
        // build cells
        for (let j = 0; j < tableHeaders.length; j++) {
            row.insertCell(j)
        }
        console.log("tr:"+tr+" td:"+td+" i:"+i)
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[0].innerHTML = someArray[i].firstName;
        console.log("td: "+td+" element: ",someArray[i].firstName )
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[1].innerHTML = someArray[i].lastName;
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[2].innerHTML = someArray[i].dob;
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[3].innerHTML = someArray[i].gender;
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[4].innerHTML = someArray[i].eyeColor;
        document.getElementsByTagName('tr')[currentRow].getElementsByTagName('td')[5].innerHTML = someArray[i].occupation;
        // Add photo button here

        // Add Spouse
        if (someArray[i].spouse !== "")
        {
            currentRow++;
            buildRow("Spouse: ",someArray[i].spouse,currentRow,tableBody )
        }

        // Add Parents
        if (someArray[i].parents !== "") {
            for (let j = 0; j < someArray[i].parents.length; j++) {
                currentRow++;
                buildRow("Parent: ", someArray[i].parents[j],currentRow,tableBody)
            }
        }

        currentRow++;
    }

}