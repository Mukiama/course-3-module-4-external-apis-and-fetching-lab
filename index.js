// index.js

function fetchWeatherAlerts (){
    
fetch(`https://api.weather.gov/alerts/active?area=${"USER-ABBREV"}`, {
    headers: {
        "User-Agent": "my-weather-app (godsonkiama@gmail.com)",
        "Accept": "application/geo+json"
    }
})
.then(response => response.json())
.then((data) => displayAlerts(data))
.catch((error) => console.error("Error fetching data:", error))
}
fetchWeatherAlerts();

{
  '@context': [
    'https://geojson.org/geojson-ld/geojson-context.jsonld',
    {
      '@version': '1.1',
      wx: 'https://api.weather.gov/ontology#',
      '@vocab': 'https://api.weather.gov/ontology#'
    }
  ],
  type: 'FeatureCollection',
  features: [
    {
      id: 'https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e2f8efb098f9c685004fb9f9636d2efdd6812a77.001.1',
      type: 'Feature',
      geometry: [Object],
      properties: [Object]
    }
  ],
  title: 'Current watches, warnings, and advisories for New York',
  updated: '2026-04-15T04:05:16+00:00'
}



function displayAlerts() {
    const button = document.querySelector("#fetch-alerts")
    const display = document.querySelector("#alerts-display")
   
    button.addEventListener("click", function (){
        display.innerHTML = ""
        

fetch("https://api.weather.gov/alerts/active?area=NY", {
    headers: {
        "User-Agent": "my-weather-app (godsonkiama@gmail.com)",
        "Accept": "application/geo+json"
    }
    })
    .then(response => response.json())
    .then(data => {
        display.innerHTML = ""
        
        data.features.forEach(alert => {
            const p = document.createElement("p")
            p.textContent = alert.properties.headline
            display.appendChild(p)
        })
    })
    .catch(errorObject => {
        const errorObject = document.querySelector("#error-message")
        
    })


}

