const countries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}

countries();

function displayCountries(countries) {
    const countriesDiv = document.getElementById('countriesDiv');
    countries.forEach(country => {
        console.log(country.population);
        const div = document.createElement('div');
        div.classList.add('countryStyle');
        div.innerHTML = `
        <h1> Official Country Names : ${country.name.official} </h1>
        <h2> Capital : ${country.capital} </h2>
        <h3> Borders : ${country.borders} </h3>
        <h4> Population : ${country.population} </h4>
        <img src="${country.flags.png}">
        `;
        countriesDiv.appendChild(div);
    });
}
