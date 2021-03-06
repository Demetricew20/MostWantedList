'use strict';



function galleryData()
{
    let cardTitle = document.getElementsByClassName('card-title');
    let cardBody = document.getElementsByClassName('card-text');
    let cardImage = document.getElementsByTagName('img');
    // Placeholder images if photo is not found //
    let defaultImg = "images\\no-img.png";


    for (let i = 0; i < people.length; i++)
    {
        // Adds Name, Occupation, and Photo to gallery //
        cardTitle[i].innerHTML = `${people[i].firstName} ${people[i].lastName}`;
        cardBody[i].innerHTML = people[i].occupation.toUpperCase();
        let photoHtml = people[i].photo;
        if (people[i].photo === undefined)
        {
            cardImage[i].src = defaultImg;
        }
        else{

            cardImage[i].src = "images\\" + photoHtml;

        }
    }

}



galleryData();