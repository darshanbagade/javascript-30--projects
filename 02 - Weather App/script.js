const apiKey = "b841b114526c656ebd08c48d32568472";
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click",function(e){
    e.preventDefault();

    const city = document.querySelector(".search input").value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=` + `${apiKey}` + `&q=${city}`;
    
    const weatherSearch = document.querySelector("#weather");
    const errorMsg = document.querySelector(".error");

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        weatherSearch.style.display = "block";
        errorMsg.style.display = "none";

        const temp = document.querySelector("#temp");
        const cityName = document.querySelector("#city-name");
        const humidity = document.querySelector("#humidity");
        const wind = document.querySelector("#wind-speed");
        

        console.log(data);
        temp.innerHTML = Math.floor(data.main.temp) + `°c`;
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + ` %`;
        wind.innerHTML = data.wind.speed + ` km/h`;
        
        let weatherType = data.weather[0].main;
        let weatherIcon = document.querySelector(".weather-icon");
        if(weatherType == "Mist" ){
            weatherIcon.src = "icons/mist.png";
        }
        else if(weatherType === "Clouds"){
            weatherIcon.src = "icons/clouds.png"
        }
        else if(weatherType === "Clear"){
            weatherIcon.src = "icons/clear.png"
        }
        else if(weatherType === "Rain"){
            weatherIcon.src = "icons/rain.png"
        }
        else if(weatherType === "Drizzle"){
            weatherIcon.src = "icons/drizzle.png"
        }


    })
    .catch((error) => {
        
        errorMsg.style.display = "block";
        weatherSearch.style.display = "none";
    
    })


})



// 