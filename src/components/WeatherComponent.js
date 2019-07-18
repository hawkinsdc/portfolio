import React from "react"
import rain from "../images/weatherIcons/rain.svg"
import sun from "../images/weatherIcons/rain.svg"
import clouds from "../images/weatherIcons/clouds.svg"
import snow from "../images/weatherIcons/snow.svg"

const API = "547faba16ca4d2d483f0c799b4fd6c77"
class WeatherComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      weather:0,
      temperature:0,
      city: 0,
      icon: '10n'
    }
  }


  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API}`)
    .then(data => data.json())
    .then((parsedData) => {
      this.setState({
        weather:parsedData.weather[0].main,
        temperature: Math.round(parsedData.main.temp - 273.15),
        city: parsedData.name,
        icon: parsedData.weather[0].icon
      })
    })
  }

  weatherIconPicker(){

    let weatherSVGIcon
    console.log(this.state.weather)
    switch(this.state.weather) {
      case "Rain" || "Drizzle":
      weatherSVGIcon = rain

      break;

      case "Clear":
      weatherSVGIcon = sun
      break;

      case "Clouds":
      weatherSVGIcon = clouds
      break;

      case "Snow":
      weatherSVGIcon = snow
      break;
      default:
      weatherSVGIcon=null
      // code block
    }
    // console.log(weatherSVGIcon)
    return weatherSVGIcon

  }


  render(){
    let icon = this.weatherIconPicker();

    let weatherInfoStyle = {
      width: "100%",
      height: "100%",
      position: "relative",
    };

    let sectionStyle={
      backgroundColor: "#451c84"
    }

    let weatherIconImage = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`
    return(
      <section className="w-100 p-6 bg-gray-100 h-full" style={sectionStyle}>
        <div id="weatherContainer" className="text-center p-4" style={weatherInfoStyle}>
          <h4 className="font-normal text-3xl p-4 text-white">{this.state.weather}</h4>
          <h3 className="font-normal p-4 text-yellow-600" style={{fontSize: "6rem", fontWeight: 600}}>{this.state.temperature} ℃</h3>
          <h2 className="font-normal text-4xl text-white">{this.state.city}</h2>
          <img className="m-auto" src={icon} style={{width: "15%"}} alt="WeatherIcon" />
        </div>
      </section>
    )
  }

}

export default WeatherComponent
