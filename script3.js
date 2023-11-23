// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country and display its information
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region || 'N/A';
      const subregion = country.subregion || 'N/A';
      const population = country.population || 'N/A';

      console.log(`Country: ${name}, Region: ${region}, Subregion: ${subregion}, Population: ${population}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));