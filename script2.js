Question : 2 : use the rest countries' API URL->https://restcountries.com/v3.1/all and display all country flag in the console
Answer:
// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country and display its flag
    data.forEach(country => {
      const flag = country.flags[0]; // Assuming the flag is stored in an array
      console.log(`Country: ${country.name.common}, Flag: ${flag}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));