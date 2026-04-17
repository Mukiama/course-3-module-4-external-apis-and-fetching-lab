function fetchWeatherAlerts(state) {
fetch(`https://api.weather.gov/alerts/active?area=${"NY"}`)
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.log("Error fetching data:", error))


fetchWeatherAlerts(state);


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

    })
} 