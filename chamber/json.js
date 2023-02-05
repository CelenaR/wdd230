


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === "Fort Worth" || towns[i].name === "Home" || towns[i].name === "Weather") {
                
                let card = document.createElement('section');
                let motto = document.createElement('h4');
                let p = document.createElement('p');
                let name = document.createElement('h2')
                let photo = document.createElement('img');
                let yearFounded = document.createElement('year');
                let currentPopulation = document.createElement('population');
                let averageRainfall = document.createElement('rain');


                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = "Year Founded: " + '' + towns[i].yearFounded;
                currentPopulation.textContent = "Population: " + '' + towns[i].currentPopulation;
                averageRainfall.textContent = "Average Rain Fall: " + '' + towns[i].averageRainfall;


                p.appendChild(name);
                p.appendChild(motto);
                card.appendChild(p);
                p.appendChild(yearFounded);
                p.appendChild(currentPopulation);
                p.appendChild(averageRainfall);
                card.appendChild(photo);



           
                photo.setAttribute('src', 'images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name + ' ' + towns[i].order);

                document.querySelector('div.cards').appendChild(card);

            }
        }

    });