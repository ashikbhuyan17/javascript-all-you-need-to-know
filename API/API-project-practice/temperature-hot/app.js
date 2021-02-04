const apiKey = '5d9786f497d73b7a1a4aba05aea882a5'
const apiBase = 'http://api.openweathermap.org/data/2.5/weather'



document.getElementById('search_button').addEventListener('click', function () {
    const inputCity = document.getElementById('city').value
    console.log(inputCity);
    temperature(inputCity)
})


function temperature(city) {
    // const url = `${apiBase}?q=Dhaka&appid=${apiKey}`
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const location = document.getElementById('location').innerText = data.name;
            const temp = document.getElementById('show_temp').innerText = data.main.temp;
            const clouds = document.getElementById('weather_status').innerText = data.weather[0].main;
            console.log(location, temp, clouds);
        })
}
