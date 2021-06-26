let weather = {
    "apiKey":"7396ed72679b58559b4ad55bee27e42e",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" + this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather : function(data){
        //retreving important token from the json data
        const {name} = data;
        const{temp,humidity}=data.main;
        const{description,icon}=data.weather[0];
        const{speed}=data.wind;
        console.log(name,temp,description,speed,humidity,icon);
        //displayint the retrieved data on to the page
        document.querySelector(".City").innerText = "Weather in "+name;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".Humidity").innerText=humidity + " %";
        document.querySelector(".wind").innerText = speed + " Km/h";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name + "')";
        document.querySelector(".weather").classList.remove("loading");



    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
//search button event listener
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
//enter key in search bar event listener
document.querySelector(".search-bar").addEventListener('keyup', function (e) {
    if(e.key=="Enter"){
        weather.search();
    }
});

