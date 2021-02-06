fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data)

    })

const displayCountries = countries => {

    // forEach
    countries.forEach(countries => {
        console.log(countries.name);
        const element = document.getElementById('countries')

        // create a div
        const countriesDiv = document.createElement('div')
        countriesDiv.className = "country"

        const countryInfo = `
            <h3 class = "country-name">${countries.name}</h3>
            <p>${countries.capital} </p>
            <button > show Details </button>
        `
        countriesDiv.innerHTML = countryInfo
        element.appendChild(countriesDiv)
    })

   

    // map 
    // countries.map(countries => {
    //     console.log(countries.name);
    //     const element = document.getElementById('countries')

    //     // create a div
    //     const countriesDiv = document.createElement('div')
    //     countriesDiv.className = "country"
    //     // countriesDiv.style.backgroundColor = 'green'
    //     // countriesDiv.style.color = 'white'

    //     const countryInfo = `
    //         <h3 class = "country-name">${countries.name}</h3>
    //         <p>${countries.capital} </p>
    //     `
    //     countriesDiv.innerHTML = countryInfo



    //     // // creat a h3 elements and appended div tags
    //     // const countyName = document.createElement('h3')
    //     // countyName.innerText = countries.name
    //     // countriesDiv.appendChild(countyName)

    //     // // creat a p elements and appended div tags
    //     // const capital = document.createElement('p')
    //     // capital.innerText = countries.capital
    //     // countriesDiv.appendChild(capital)

    //     // appended 
    //     element.appendChild(countriesDiv)
    // })
}