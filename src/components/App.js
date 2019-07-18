import React from "react"
import DescriptionContainerComp from "./DescriptionContainerComp"
import WeatherComponent from "./WeatherComponent"

class App extends React.Component{
  render(){
    return (
      <div>

        <DescriptionContainerComp
          info={{
            preferance: true,
            content: "image",
            title: "How we do it",
            description: "Each creative campaign is unique, and therefore, the creative solutions behind it should also be specific to the creative idea, to deliver the best possible results. We intentionally go above and beyond to provide digital ad and websites/landing page experiences. This is because we understand the possibilities of what can be done through digital development work and are therefore in the position to continuously challenge the initial idea to make it even greater."
          }}
        />

        <DescriptionContainerComp
          info={{
            preferance: false,
            content: "text",
            title: "Why we are here",
            description: "Many companies do not have the necessary skill set to produce high-quality banner ads for desktop and mobile. This is where Hawkins DC can deliver you a service, which may be really beneficial to any company looking to improve its digital game. Hawkins DC is a company with the sole focus of producing high-quality web development services for its clients. Not only do we focus on quality but also on the efficiency of the work we produce, so that production can be done far more effectively than it is being done at present by others in the digital field."
          }}
        />

        <DescriptionContainerComp
          info={{
            preferance: true,
            content: "text",
            title: "How we do it",
            description: "Each creative campaign is unique, and therefore, the creative solutions behind it should also be specific to the creative idea, to deliver the best possible results. We intentionally go above and beyond to provide digital ad and websites/landing page experiences. This is because we understand the possibilities of what can be done through digital development work and are therefore in the position to continuously challenge the initial idea to make it even greater."
          }}
        />

        <DescriptionContainerComp
          info={{
            preferance: false,
            content: "text",
            title: "Showcase",
            description: "This section is coming soon!"
          }}
        />

        <WeatherComponent />

        <DescriptionContainerComp
          info={{
            preferance: true,
            content: "text",
            title: "Weather App",
            description: "The App above is pulling from the OPENWEATHERMAP API"
          }}
        />


      </div>
    )
  }
}

export default App
