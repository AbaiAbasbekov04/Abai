const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const clouds = document.querySelector('.clouds');
const icon = document.createElement('img');

const apiKey = 'e417df62e04d3b1b111abeab19cea714';


const citySearch = () => {
    const cityNameValue = document.querySelector('.cityNameValue').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((json) => { 
        console.log(json); 
        cityName.innerHTML = json.name;
        temp.innerHTML = Math.round(json?.main?.temp - 273) + "&deg" + "C";
        let temps = Math.round(json?.main?.temp - 273)
        if (temps < 10) {
            icon.src = "imge/icon/C-.png"
        }else if (temps >= 10 && temps <= 20) {
            icon.src = "imge/icon/C-norm.png"
        }else {
            icon.src = "imge/icon/C+.png"
        }
        temp.appendChild(icon)
        wind.innerHTML = (json.wind.speed) + " м/с";
        clouds.innerHTML = (json.clouds.all) + "%";
    });
};
