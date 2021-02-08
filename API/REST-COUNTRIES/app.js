fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayCountries(data)

    })

const displayCountries = countries => {

    // forEach
    countries.forEach(countries => {
        // console.log(countries.name);
        const element = document.getElementById('countries')

        // create a div
        const countriesDiv = document.createElement('div')
        countriesDiv.className = "country"

        const countryInfo = `
            <h3 class = "country-name">${countries.name}</h3>
            <p>${countries.capital} </p>
            <button onclick = "displayCountryDetails('${countries.name}')"> show Details </button>
        `
        countriesDiv.innerHTML = countryInfo
        element.appendChild(countriesDiv)
    })
}

const displayCountryDetails = cName => {
    const url = `https://restcountries.eu/rest/v2/name/${cName}`
    // console.log(cName);
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
}

function renderCountryInfo(country) {
    console.log(country);
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = `
        <h1>Name : ${country.name} </h1>
        <h1>population : ${country.population} </h1>
        <h1>area : ${country.area} </h1>
        <img src="${country.flag}">
    `

}