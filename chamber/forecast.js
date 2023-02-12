const five_dayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=96658d9a7e75c72252f06d47773c60d7";


fetch(five_dayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //Days of the week:
        const w = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
        let this_day = 0;

        
        const five_days = jsObject.list.filter(x => x.dt_text.includes('18:00:00')); 
        
       
        five_days.forEach(x => {
            let day = new Date([x].dt_txt);

            document.getElementById('#week_day'+ (this_day + 1)).textContent = w[day.getDay()];
            document.getElementById('#temp' + (this_day + 1)).textContent = (jsObject.main.temp).toFixed(2);

         
            const imagesrc = `https://weather.com/weather/today/l/c40fc4b0ff0c7ce4876ea65e63fe28611e491c3d17be41dd0b4ddaa4f434f536${jsObject.weather[0].icon}.png`; 
            const d = jsObject.weather[0].description; 
            document.getElementById('imagesrc'+ (this_day + 1)).textContent = imagesrc;
            document.getElementById('icon' + (this_day + 1)).setAttribute('src', imagesrc);
            document.getElementById('icon' + (this_day + 1)).setAttribute('alt', d);


        });

    });