



const weatherWizard = (inputCity) => {
    const apiKey = '';  //your API
    const unit = 'metric'

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity + '&appid=' + apiKey + '&units=' + unit)
        .then(response => response.json())
        .then(response => {
            const iconCode = response.weather[0].icon
            const iconURL = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'

            cityName.innerHTML = response.name;
            temp.innerHTML = response.main.temp
            wind_speed.innerHTML = response.wind.speed
            humidity.innerHTML = response.main.humidity
            description.innerHTML = response.weather[0].description;
            icon_image.setAttribute('src', iconURL)
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + (response.name) + "')";


        })
        .catch(err => console.error(err));

}

submit.addEventListener('click', () => {

    weatherWizard(inputCity.value)

})

inputCity.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        weatherWizard(inputCity.value);
    }
});
weatherWizard("Noida")
