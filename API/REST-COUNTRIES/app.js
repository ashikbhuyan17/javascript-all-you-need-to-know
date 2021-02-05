fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data)

    })

const displayCountries = countries => {
    countries.map(countries => {
        console.log(countries.name);
        const element = document.getElementById('countries')

        // create a div
        const countriesDiv = document.createElement('div')
        countriesDiv.style.backgroundColor = 'black'
        countriesDiv.style.color = 'white'

        

        // // creat a h3 elements and appended div tags
        // const countyName = document.createElement('h3')
        // countyName.innerText = countries.name
        // countriesDiv.appendChild(countyName)

        // // creat a p elements and appended div tags
        // const capital = document.createElement('p')
        // capital.innerText = countries.capital
        // countriesDiv.appendChild(capital)

        // appended 
        element.appendChild(countriesDiv)
    })
}